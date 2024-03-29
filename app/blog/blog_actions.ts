'use server';

import { supabaseClient } from '@/src/lib/supabase';
import { randomUUID } from 'crypto';
import { filter, isNil } from 'lodash';
import { revalidatePath } from 'next/cache';

export const handleFormServerAction = async (
  formData: FormData | any,
  user_info: any,
  blog_id: any,
  op: boolean
) => {
  if (isNil(user_info)) return { data: null, error: 'must have user info' };
  let result: any;
  if (op) {
    const { comment } = Object.fromEntries(formData.entries());
    const objBlogComment = {
      comment,
      blog_id,
      user_id: user_info?.id,
    };
    result = await supabaseClient()
      .from('article_comments')
      .insert(objBlogComment)
      .eq('id', blog_id)
      .select('*')
      .maybeSingle();
  } else {
    const { comment, article_id } = formData;
    const reply_obj = {
      id: randomUUID(),
      comment,
      user_id: user_info?.id,
      name: user_info?.name,
      avatar_url: user_info?.avatar_url,
      created_at: new Date(),
    };
    result = await supabaseClient().rpc('insert_reply_to_comments', {
      article_id,
      reply_obj,
    });
  }
  // if (!result.error) revalidatePath(`/blog/${blog_id}`);
  if (!result.error) revalidatePath(`/blog/[id]`);

  return result;
};

export const handleArticleLikes = async (
  like_it: boolean,
  userid: any,
  blog_id: any
) => {
  if (isNil(userid)) return { data: null, error: 'must have user info' };
  const result = await supabaseClient().rpc('update_likes_array', {
    userid,
    like_it,
    blog_id,
  });

  if (!result.error) revalidatePath(`/blog/[id]`);
  return result;
};

export const handleArticleViews = async (blog_id: any, anon_ssn: any) => {
  const result = await supabaseClient().rpc('insert_article_views', {
    blog_id,
    anon_ssn,
  });
  if (result?.data && blog_id) revalidatePath(`/blog/[id]`);
};

export const fetchBlogListSrvrFn = async (blog_id: any) => {
  const blogListPrms = await supabaseClient()
    .from('blog')
    .select('*')
    .order('id', { ascending: false });

  return filter(blogListPrms?.data, (i) => Number(i?.id) !== Number(blog_id));
};
