'use server';

import { supabaseClient } from '@/src/lib/supabase';
import { randomUUID } from 'crypto';
import { revalidatePath } from 'next/cache';

export const handleFormServerAction = async (
  formData: FormData | any,
  user_info: any,
  blog_id: any,
  op: boolean
) => {
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

  if (!result.error) revalidatePath(`/blog/${blog_id}`);

  return result;
};