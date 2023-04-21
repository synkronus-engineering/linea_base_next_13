import {
  API_STATUS,
  RESPONSE_APIREST,
  RESPONSE_ERRORS,
  REST_VERBS,
} from '@/src/lib/res_definitions';
import { createApiServerClient } from '@/src/lib/supabase';
import { get } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';

const getInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  const { obj_data } = req.body;
  let result = {} as RESPONSE_APIREST;
  const supabaseServerClient = createApiServerClient(req, res);

  try {
    const todosTable = supabaseServerClient.from('todos');
    switch (req.method) {
      case REST_VERBS.PUT:
        result = await todosTable
          .update({ ...obj_data })
          .eq('id', obj_data.id)
          .select();
        break;
      case REST_VERBS.DELETE:
        result = await todosTable.delete().eq('id', obj_data?.id).select();
        break;
      case REST_VERBS.POST:
        result = await todosTable.insert({ ...obj_data }).select();
        break;

      case REST_VERBS.GET:
        result = await todosTable.select('*').order('id', { ascending: false });
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
