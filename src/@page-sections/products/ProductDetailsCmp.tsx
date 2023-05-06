import CardDetails from '@/src/components/cards/CardDetails';
import ImageGalleryColumns from '@/src/components/carousel/ImageGalleryColumns';
import TabViewCmp from '@/src/components/panels/TabViewCmp';

const imageAuxGallery = [
  {
    id: 1,
    itemImageSrc: '/assets/products/items/1.Siri2020.png',
    alt: 'Description Image 1',
    title: 'Title 1',
  },
  {
    id: 2,
    itemImageSrc: '/assets/products/items/12.SonyBGB.png',
    alt: 'Description Image 1',
    title: 'Title 2',
  },
  {
    id: 3,
    itemImageSrc: '/assets/products/items/7.beatsw3.png',
    alt: 'Description Image 1',
    title: 'Title 3',
  },
];

const ProductDetailsCmp = ({ dataSet }: { dataSet: any }) => {
  return (
    <>
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="grid mb-7">
          <div className="col-12 lg:col-6">
            <ImageGalleryColumns
              imageSrc={dataSet}
              imageThumbs={imageAuxGallery}
            />
          </div>
          <div className="col-12 lg:col-6 py-3 lg:pl-6">
            <CardDetails data={dataSet} />
          </div>
        </div>
        <TabViewCmp />
      </div>
    </>
  );
};

export default ProductDetailsCmp;
