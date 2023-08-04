import BlogDetail from '@/src/@page-sections/blog/BlogArticle';
import { supabaseClient } from '@/src/lib/supabase';

export async function generateStaticParams() {
  const productList = await supabaseClient().from('blog').select(`id`);
  return productList.data;
}

async function fetchData(id: any) {
  return supabaseClient()
    .from('blog')
    .select(
      '*, article_comments(*, user_info:profiles(*)).order(id, { ascending: false })'
    )
    .eq('id', id)
    .maybeSingle();
}

const Page = async ({ params }: { params: any }) => {
  const { data: blogItem } = (await fetchData(params?.id)) as any;

  return <BlogDetail blogItem={blogItem} />;
};

export default Page;
