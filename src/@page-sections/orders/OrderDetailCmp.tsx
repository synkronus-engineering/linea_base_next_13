/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { map } from 'lodash';
import Link from 'next/link';

const OrderDetail = ({ orderDetailData }: { orderDetailData: any }) => {
  return (
    <div className="surface-section px-2 py-2 md:px-2 lg:px-4">
      <div className="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between py-2">
        <div className="mb-3 sm:mb-0">
          <span className="font-medium text-xl text-900 mr-2">
            Order number:
          </span>
          <span className="font-medium text-xl text-blue-500">
            {orderDetailData?.order_number}
          </span>
          <br />
          <span className="text-600 text-sm mt-1">
            Order Date: {orderDetailData?.created_at}
          </span>
          <br />
          <span className="text-600 text-sm mt-1">
            Order Status: {orderDetailData?.state}
          </span>
        </div>
        <div>
          <Link href={`/account/orders`}>
            <div
              aria-label="Details"
              className="p-button p-component p-button-outlined p-button-secondary mr-2"
            >
              <span className="p-button-icon p-c p-button-icon-left pi pi-arrow-left"></span>
              <span className="p-button-label p-c">Back to List</span>
            </div>
          </Link>
        </div>
      </div>

      <div
        style={{
          height: '2px',
          background:
            'linear-gradient(90deg, rgb(33, 150, 243) 0%, rgba(33, 150, 243, 0) 90%)',
        }}
      ></div>
      <div className="border-round surface-border border-1 mt-2">
        <ul className="list-none p-0 m-0">
          {map(orderDetailData?.order_detail?.product_items, (item) => (
            <li
              className="p-3 border-bottom-1 surface-border flex align-items-start sm:align-items-center"
              key={item?.id}
            >
              <img
                src={`/assets/products/items/${item?.image}`}
                className="w-3rem sm:w-8rem flex-shrink-0 mr-3 shadow-2"
              />
              <div className="flex flex-column">
                <span className="text-900 font-medium text-xl mb-2">
                  {item?.name}
                </span>
                <span className="text-600 mb-3"> size: {item?.size}</span>
                <span className="text-900 font-medium">
                  Quantity: {item?.qty}
                </span>
              </div>
              <span className="text-900 font-medium text-lg ml-auto">
                ${item?.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap mt-5 pb-3">
        <div className="w-full lg:w-6 pl-3">
          <span className="font-medium text-900">Shipping Address</span>
          <div className="flex flex-column text-900 mt-3 mb-5">
            <span className="mb-1">Celeste Slater</span>
            <span className="mb-1">
              606-3727 Ullamcorper. Roseville NH 11523
            </span>
            <span>(786) 713-8616</span>
          </div>
          <span className="font-medium text-900">Payment</span>
          <div className="flex align-items-center mt-3">
            <img
              src="/assets/images/illustration/visa.png"
              className="w-4rem mr-3"
            />
            <div className="flex flex-column">
              <span className="text-900 mb-1">Visa Debit Card</span>
              <span className="text-900 font-medium">**** **** **** 1234</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6 pl-3 lg:pl-0 lg:pr-3 flex align-items-end mt-5 lg:mt-0">
          <ul className="list-none p-0 m-0 w-full">
            <li className="mb-3">
              <span className="font-medium text-900">Summary</span>
            </li>
            <li className="flex justify-content-between mb-3">
              <span className="text-900">Subtotal</span>
              <span className="text-900 font-medium text-lg">$36.00</span>
            </li>
            <li className="flex justify-content-between mb-3">
              <span className="text-900">Shipping</span>
              <span className="text-900 font-medium text-lg">$5.00</span>
            </li>
            <li className="flex justify-content-between mb-3">
              <span className="text-900">Tax</span>
              <span className="text-900 font-medium text-lg">$4.00</span>
            </li>
            <li className="flex justify-content-between border-top-1 surface-border py-3">
              <span className="text-900 font-medium">Total</span>
              <span className="text-900 font-bold text-lg">$41.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
