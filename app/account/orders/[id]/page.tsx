import OrderDetail from '@/src/@page-sections/orders/OrderDetailCmp';
import { createServerClient } from '@/src/lib/supabase-server';
import { notFound } from 'next/navigation';

// async function fetchOrders(params: { id: any }) {
//   const supabaseClient = createServerClient();
//   let qryResult = null;
//   const { data: dtOrder, error: errOrder } = await supabaseClient
//     .from('orders')
//     .select('*, order_detail(*)')
//     .eq('id', Number(params?.id || 0))
//     .maybeSingle();
//   if (dtOrder && !errOrder) {
//     const ids = map(
//       get(first(dtOrder?.order_detail), 'product_items', []),
//       'product_id'
//     );
//     if ((ids || []).length > 0) {
//       const { data: dtProds, error: errProds } = await supabaseClient
//         .from('products')
//         .select('*')
//         .in('id', [...ids]);
//       const details = first(dtOrder?.order_detail) as any;
//       qryResult = {
//         ...dtOrder,
//         order_detail: {
//           ...details,
//           product_items: map(details?.product_items, (prod) => ({
//             ...prod,
//             ...find(dtProds, ['id', Number(prod.product_id)]),
//           })),
//         },
//       };
//     }
//   }

//   return qryResult as any;
// }

async function fetchOrders(params: { id: any }) {
  const supabaseClient = createServerClient();
  let { data } = await supabaseClient.rpc('get_order_with_details', {
    prm_order_id: params?.id,
  });
  return data as any;
}

const Page = async ({ params }: { params: any }) => {
  const orderDetail = await fetchOrders(params);

  if (!orderDetail) notFound();

  return <OrderDetail orderDetailData={orderDetail} />;
};

export default Page;
