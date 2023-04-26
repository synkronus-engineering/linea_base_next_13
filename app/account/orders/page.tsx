import OrderListCmp from '@/src/@page-sections/orders/OrderListCmp';
import { createServerClient } from '@/src/lib/supabase-server';

async function fetchOrders() {
  const supabaseClient = createServerClient();
  const { data } = await supabaseClient.from('orders').select('*');
  return data as Array<any>;
}

const Page = async () => {
  const orderList = await fetchOrders();
  return <OrderListCmp orderListData={orderList} />;
};

export default Page;
