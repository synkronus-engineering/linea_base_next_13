import { fetcher } from '../lib/fetcher';
import { APP_CFG_REST_URLS } from '../lib/res_definitions';

const baseProductsUrl = `${APP_CFG_REST_URLS.BASE_URL}/api/profile`;

const getProfileInfo_ClientEndPoint = async (
  action: string,
  path_switch: string,
  params: any
) => {
  return await fetcher(
    `${baseProductsUrl}?path_switch=${path_switch}`,
    action,
    { obj_body: { ...params } }
  );
};

export { getProfileInfo_ClientEndPoint };
