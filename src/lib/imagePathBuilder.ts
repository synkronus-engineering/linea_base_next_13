import {
  APP_CFG_BUCKET_ATTACHMENTS,
  APP_CFG_REST_URLS,
} from './res_definitions';

export const buildPathProduct = (path: string, imgName: string): string => {
  if (!path || !imgName) return '/assets/products/default/img_shop_404.png';

  return `${APP_CFG_REST_URLS.BASE_URL_BUCKET}/${APP_CFG_BUCKET_ATTACHMENTS.BASE_STORAGE}/${APP_CFG_BUCKET_ATTACHMENTS.PRODUCTS_BUCKET}/${path}/${imgName}`;
};

// https://vcuonjyqailydlqkjteh.supabase.co/storage/v1/object/public/products/items/13.LGProducts.png
