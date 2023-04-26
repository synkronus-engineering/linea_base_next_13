import CarouselCmp from '@/src/components/carousel/CarouselCmp';
import { get, groupBy, map } from 'lodash';

export default async function CarouselProductCmp({
  dataSet,
}: {
  dataSet: Promise<any>;
}) {
  const { data } = (await dataSet) as any;

  return (
    <CarouselCmp
      products={map(get(groupBy(data, 'deals'), 'flash_deals', []), (p) => ({
        ...p.products,
      }))}
    />
  );
}
