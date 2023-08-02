'use server';

import { supabaseClient } from '@/src/lib/supabase';
import { revalidatePath } from 'next/cache';

export const handleSubmit = async (
  formData: FormData,
  user_id: any,
  blog_id: any
) => {
  'use server';
  const { comment } = Object.fromEntries(formData.entries());
  // insert to db...
  const objBlogComment = {
    comment,
    blog_id,
    user_id,
  };

  const result = await supabaseClient()
    .from('article_comments')
    .insert(objBlogComment)
    .eq('id', blog_id)
    .select('*')
    .maybeSingle();

  if (result.data && !result.error) revalidatePath(`/blog/${blog_id}`);

  return result;
};
