import BlogDetail from '@/src/@page-sections/blog/BlogArticle';
import { supabaseClient } from '@/src/lib/supabase';
import { filter } from 'lodash';

export async function fetchData(id: any) {
  const blogByIdPrms = supabaseClient()
    .from('blog')
    .select(
      '*, article_comments(*, user_info:profiles(*)).order(id, { ascending: false })'
    )
    .eq('id', id)
    .maybeSingle();

  const blogListPrms = supabaseClient()
    .from('blog')
    .select('*')
    .order('id', { ascending: false });

  const [blogItem, blogList] = await Promise.all([blogByIdPrms, blogListPrms]);

  return {
    blogItem: blogItem?.data,
    blogList: filter(blogList?.data, (i) => Number(i?.id) !== Number(id)),
  };
}

const Page = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  const { blogItem, blogList } = await fetchData(params?.id);

  return <BlogDetail blogItem={blogItem} blogList={blogList} />;
};

export default Page;
