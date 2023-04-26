'use client';
import { buildPathProduct } from '@/src/lib/imagePathBuilder';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import LazyImage from '../image/LazyImage';

const carouselResponsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
];

const getSeverity = (product: any) => {
  switch (product.inventory_status) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warning';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};

export default function CarouselCmp({ products }: { products: any }) {
  const productTemplate = (product: any) => {
    return (
      <div className="border-1 surface-border border-round m-1 text-center py-2">
        <div className="mb-1">
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
        </div>
        <div>
          <h4 className="p-0 mb-1">{product.name}</h4>
          <h6 className="my-0">${product.price}</h6>
          <Tag
            value={product.inventory_status}
            severity={getSeverity(product)}
          ></Tag>
          <div className="mt-2 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={products}
      numVisible={4}
      numScroll={4}
      responsiveOptions={carouselResponsiveOptions}
      itemTemplate={productTemplate}
    />
  );
}
