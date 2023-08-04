import ProductDetailsCmp from '@/src/@page-sections/products/ProductDetailsCmp';
import { supabaseClient } from '@/src/lib/supabase';
import { notFound } from 'next/navigation';

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
