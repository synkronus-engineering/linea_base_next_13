// import { createApiServerClient } from 'lib/supabase';
// import { cookies } from 'next/headers';

import BlogDetail from '@/src/@page-sections/blog/BlogDetail';

// export async function generateStaticParams() {
//   const { data } = await supabaseClient()
//     .from('products')
//     .select(`id`)
//     .eq('active', true);
//   return [...map(data, (p) => ({ params: { id: `${p.id}` } }))];
// }

// async function fetchData() {
//   const { data } = await createApiServerClient(cookies)
//     .from('orders')
//     .select('*');
//   return data as Array<any>;
// }

const Page = async ({ params }: { params: any }) => {
  // const data = await fetchData();
  console.log('blog params ***', params);
  return <BlogDetail />;
};

export default Page;
