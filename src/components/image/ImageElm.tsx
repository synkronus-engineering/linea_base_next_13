/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
type ImgProps = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: any;
  style?: any;
  onClick?: any;
};

const ImageElm = ({ ...imgProps }: ImgProps) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img {...imgProps} />
);

export default ImageElm;
