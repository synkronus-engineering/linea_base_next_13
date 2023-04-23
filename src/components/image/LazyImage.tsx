import NextImage, { ImageProps } from 'next/image';

const LazyImage = ({ ...imgProps }: ImageProps) => (
  <NextImage {...imgProps} quality={100} />
);

export default LazyImage;
