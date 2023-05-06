import LazyImage from '@/src/components/image/LazyImage';
import { buildPathProduct } from '@/src/lib/imagePathBuilder';
import { get, groupBy, map, take } from 'lodash';
import Link from 'next/link';

const CarProductHotDeal = ({ product }: { product: any }) => {
  return (
    <div className="col-12 md:col-6 lg:col-3 mb-5 lg:mb-0" key={product?.id}>
      <div className="p-2">
        <div className="font-medium mb-3">{product?.name}</div>
        <Link href={`/products/${product?.id}`}>
          <div className="shadow-1 my-0 mx-0">
            <LazyImage
              src={buildPathProduct('items', product?.image)}
              alt="Product"
              style={{ objectFit: 'cover' }}
              height={200}
              width={250}
            />
          </div>
        </Link>
        <div
          className="mb-2 surface-300 border-round overflow-hidden"
          style={{ height: '0.5rem' }}
        >
          <div className="surface-900 w-6 h-full"></div>
        </div>
        <div className="flex align-items-center justify-content-between">
          <span className="text-600">Sold: 35</span>
          <span className="text-900 font-medium">Available: 50</span>
        </div>
        <div className="flex align-items-center justify-content-between mt-2">
          <div>
            <span className="line-through mr-3 text-600 text-xl">120.00</span>
            <span className="font-medium text-xl text-pink-500">80.00</span>
          </div>
          <button title="Add to Cart" className="p-button mb-2 p-button-sm">
            <i className="pi pi-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const HotDealsCmp = async ({ data }: { data: Promise<Response> }) => {
  const { data: dataSet } = (await data) as any;

  return (
    <div className="grid -mt-3 -ml-3 -mr-3">
      {map(
        take(get(groupBy(dataSet, 'deals'), 'hot_deals', []), 4),
        (item: any, i) => (
          <CarProductHotDeal product={item?.products} key={i} />
        )
      )}
    </div>
  );
};

export default HotDealsCmp;
