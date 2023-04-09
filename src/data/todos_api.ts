import { createGenericFetcher, fetcher } from '@/lib/fetcher';
import { APP_CFG_REST_URLS, REST_VERBS } from '@/lib/res_definitions';
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

const addTodo = async (obj_data: any) => {
  return await fetcher<ITodoList>(baseUrl, REST_VERBS.POST, {
    obj_data: { ...obj_data },
  }).then((_) => mutate(baseUrl));
};

const deleteTodo = async (obj_data: any) => {
  return await fetcher<ITodoList>(baseUrl, REST_VERBS.DELETE, {
    obj_data: { ...obj_data },
  }).then((_) => mutate(baseUrl));
};

export { useTodoListData, addTodo, deleteTodo };
export type { ITodoList, Data };
