import { get } from 'lodash';

export interface RESPONSE_APIREST {
  data: any;
  status: any;
  error: any;
}

export const REST_VERBS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const API_STATUS = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  SERVER_ERROR: 500,
  RSC_CREATE: 201,
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  PROHIBITED: 402,
};

export const RESPONSE_ERRORS = {
  BAD_REQUEST: 'Bad Request',
  SERVER_ERROR: 'Server Error',
  METHOD_NOT_ALLOW: 'Method not allow',
};

const getBaseUrlByEnv = () =>
  process.env.NEXT_PUBLIC_DEV_ENV == 'local'
    ? process.env.NEXT_PUBLIC_BASE_API_URL
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

export const APP_CFG_REST_URLS = {
  BASE_URL: getBaseUrlByEnv(),
  BASE_URL_BUCKET: process.env.NEXT_PUBLIC_SUPABASE_URL,
};

export const APP_CFG_BUCKET_ATTACHMENTS = {
  BASE_STORAGE: 'storage/v1/object/public',
  PRODUCTS_BUCKET: 'products',
};

export const handleError = (error: any): RESPONSE_APIREST => {
  return {
    data: null,
    status: API_STATUS.SERVER_ERROR,
    error: get(error, 'message', 'server error'),
  };
};
