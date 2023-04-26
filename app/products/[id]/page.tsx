import ProductDetailsCmp from '@/src/@page-sections/products/ProductDetailsCmp';
import { supabaseClient } from '@/src/lib/supabase';
import { map } from 'lodash';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const productList = await supabaseClient().from('products').select(`*`);
  return map(productList.data, (p) => ({ id: `${p.id}` })); // [{ id: 1001 }, { id: 1002 }, { id: 1003 }, ...]
}

async function fetchProduct(params: { id: any }) {
  const { data } = await supabaseClient()
    .from('products')
    .select('*')
    .eq('id', Number(params.id))
    .maybeSingle();
  return {
    product: data,
  };
}

const Page = async ({ params }: { params: any }) => {
  const { product } = await fetchProduct(params);

  if (!product) notFound();

  return <ProductDetailsCmp dataSet={product} />;
};

export default Page;
