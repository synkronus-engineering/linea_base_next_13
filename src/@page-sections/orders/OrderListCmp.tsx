'use client';
import { isMobileView } from '@/src/providers/MobileViewListener';
import { map } from 'lodash';
import Link from 'next/link';
import { classNames } from 'primereact/utils';
import { useRecoilValue } from 'recoil';

const OrderList = ({ orderListData }: { orderListData: any[] }) => {
  const mediaQuerySize = useRecoilValue(isMobileView);

  return (
    <div className="col-12">
      {map(orderListData, (item) => (
        <div
          className="grid grid-nogutter border-top-1 surface-border justify-content-between align-items-center mx-4"
          key={item?.id}
        >
          <div className="col-12 md:col-4">
            <div
              className={classNames('flex flex-row lg:flex-row mt-4 flex', {
                'align-items-center': mediaQuerySize.isMobile,
              })}
            >
              <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                <i className="pi pi-dollar text-xl text-blue-500"></i>
              </div>
              <div className="flex flex-column my-auto text-center md:text-left">
                <span className="text-900 font-medium mb-2 mt-3 lg:mt-0">
                  Order Number: {item?.order_number}
                </span>
                <span className="text-600 text-sm mb-2">
                  Order Date: {item?.created_at}
                </span>
                <span className="text-600 text-sm mb-2">
                  Total Amount: ${item?.amount}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6">
            <div
              className="bg-green-50 mr-0 lg:mr-3 mt-4 lg:mt-0 p-2 flex align-items-center"
              style={{ borderRadius: '2.5rem' }}
            >
              <span
                className="bg-green-500 text-white flex align-items-center justify-content-center border-circle mr-2"
                style={{ minWidth: '2rem', minHeight: '2rem' }}
              >
                <i className="pi pi-check"></i>
              </span>
              <span className="text-green-600">
                {item?.state} on {item?.delivery_date}{' '}
              </span>
            </div>
          </div>
          <div className="col-12 md:col-2">
            <Link href={`/account/orders/${item?.id}`}>
              <div
                aria-label="Details"
                className="p-button p-component p-button-outlined p-button-secondary mr-2"
              >
                <span className="p-button-icon p-c p-button-icon-left pi pi-list"></span>
                <span className="p-button-label p-c">Details</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
