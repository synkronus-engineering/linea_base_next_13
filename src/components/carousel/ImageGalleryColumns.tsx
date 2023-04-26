/* eslint-disable @next/next/no-img-element */
import { map } from 'lodash';

type ImgProps = { imageSrc: any; imageThumbs: any[] };

const ImageGalleryColumns = ({ imageSrc, imageThumbs }: ImgProps) => {
  return (
    <div className="flex">
      <div className="flex flex-column w-2 justify-content-between">
        {map(imageThumbs, (srcImg) => (
          <img
            src={`${srcImg?.itemImageSrc}`}
            alt={`${srcImg?.alt}`}
            className="w-full cursor-pointer border-1 border-round border-transparent transition-colors transition-duration-150 border-primary"
          />
        ))}
      </div>
      <div className="pl-3 w-10 w-full">
        <img
          src={`/assets/products/items/${imageSrc?.image}`}
          alt={`${imageSrc?.image}`}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ImageGalleryColumns;
