import ProductListCmp from '@/src/@page-sections/products';
import CategoryFilterLayout from '@/src/@page-sections/products/CategoryFilterLayout';
import { createServerClient } from '@/src/lib/supabase-server';

// export const revalidate = 3600; // revalidate every hour

/*
 1. compile time generate first content and save in cache
 2. after 3600 sec, background regeneration and save to cache
  - any product update will be available next expired interval.
3. revalidate by demand
  - trigger with db or webhook any time there is a product update
*/

// static with revalidation or Incremental static regeneration.
async function fetchProducts() {
  const supabaseClient = createServerClient();
  const { data } = await supabaseClient.from('products').select('*');
  return data as Array<any>;
}

const Page = async () => {
  const productData = await fetchProducts();

  return (
    <CategoryFilterLayout>
      <ProductListCmp dataSet={productData} />;
    </CategoryFilterLayout>
  );
};

export default Page;
