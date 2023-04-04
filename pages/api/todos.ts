import {
  API_STATUS,
  RESPONSE_APIREST,
  RESPONSE_ERRORS,
  REST_VERBS,
} from '@/lib/res_definitions';
import { createApiServerClient } from '@/lib/supabase';
import { get } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';

const getInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  const { obj_data } = req.body;
  let result = {} as RESPONSE_APIREST;
  const supabaseServerClient = createApiServerClient(req, res);

  try {
    const todosTable = supabaseServerClient.from('todos');
    switch (req.method) {
      case REST_VERBS.GET:
        result = await todosTable.select('*').order('id', { ascending: true });
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

export default getInfo;
