import ProductListCmp from '@/src/@page-sections/products';
import { createServerClient } from '@/src/lib/supabase-server';

async function fetchProducts() {
  const supabaseClient = createServerClient();
  const { data } = await supabaseClient.from('products').select('*');
  return data as Array<any>;
}

const Page = async () => {
  const productData = await fetchProducts();

  return <ProductListCmp dataSet={productData} />;
};

export default Page;
