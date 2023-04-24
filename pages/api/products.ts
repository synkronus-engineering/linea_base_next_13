import {
  API_STATUS,
  RESPONSE_APIREST,
  RESPONSE_ERRORS,
  REST_VERBS,
} from '@/src/lib/res_definitions';
import { createApiServerClient } from '@/src/lib/supabase';
import { get, groupBy } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';

const getInfoProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  let result = {} as RESPONSE_APIREST;
  const supabaseServerClient = createApiServerClient(req, res);

  try {
    const productDealTable = supabaseServerClient.from('product_deals');
    switch (req.method) {
      case REST_VERBS.GET:
        {
          const { data, error, status } = await productDealTable.select(
            '*, products(*)'
          );
          if (data && !error) {
            result = { data: groupBy(data, 'deals'), error, status };
          }
        }
        break;

      default:
        result = {
          data: null,
          status: API_STATUS.NOT_FOUND,
          error: RESPONSE_ERRORS.BAD_REQUEST,
        };

        break;
    }
  } catch (err) {
    result = {
      data: null,
      status: API_STATUS.SERVER_ERROR,
      error: get(err, 'message', 'server error'),
    };
  }

  return res.status(result.status).json(result);
};

export default getInfoProducts;
