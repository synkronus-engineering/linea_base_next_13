import OrderListCmp from '@/src/@page-sections/orders/OrderListCmp';
import { createApiServerClient } from '@/src/lib/supabase';
import { cookies } from 'next/headers';

async function fetchOrders() {
  const { data } = await createApiServerClient(cookies)
    .from('orders')
    .select('*');
  return data as Array<any>;
}

const Page = async () => {
  const orderList = await fetchOrders();
  return <OrderListCmp orderListData={orderList} />;
};

export default Page;
