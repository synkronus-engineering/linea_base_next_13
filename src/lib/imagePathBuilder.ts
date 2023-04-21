export const buildPathProduct = (path: string, imgName: string): string => {
  if (!path || !imgName) return '/assets/products/default/img_shop_404.png';

  return `/assets/products/items/${imgName}`;
};
