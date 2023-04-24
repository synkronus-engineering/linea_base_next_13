import CarouselCmp from '@/src/components/carousel/CarouselCmp';
import { get, map } from 'lodash';

export default async function CarouselProductCmp({
  dataSet,
}: {
  dataSet: Promise<any>;
}) {
  const data = (await dataSet
    .then((res) => res.json())
    .then((d) => d.data)) as any;

  return (
    <CarouselCmp
      products={map(get(data, 'flash_deals', []), (p) => ({
        ...p.products,
      }))}
    />
  );
}
