import { createGenericFetcher, fetcher } from '@/lib/fetcher';
import { APP_CFG_REST_URLS } from '@/lib/res_definitions';
import { mutate } from 'swr';

const baseUrl = `${APP_CFG_REST_URLS.BASE_URL}/api/todos`;

interface ITodoList {
  id: number;
  is_complete: boolean;
  task: string;
}

interface Data {
  data: ITodoList[];
  error: any;
}

const useTodoListData = createGenericFetcher<Data>(baseUrl);

const todoMutations = async (action: string, obj_data: any) => {
  return await fetcher<ITodoList>(baseUrl, action, {
    obj_data: { ...obj_data },
  }).then((_) => mutate(baseUrl));
};

export { useTodoListData, todoMutations };
export type { ITodoList, Data };
