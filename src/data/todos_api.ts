import { APP_CFG_REST_URLS, REST_VERBS } from '@/lib/res_definitions';
import useSWR, { mutate } from 'swr';

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

async function fetcher<T>(
  url: string,
  res_verb?: string,
  obj_data?: any
): Promise<T> {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    method: res_verb ?? REST_VERBS.GET,
    body: obj_data ? JSON.stringify(obj_data) : null,
  });
  if (!res.ok) {
    throw new Error('Network response was not ok.');
  }
  return await res.json();
}

const useTodoListData = <T>() => {
  const { data, error } = useSWR<T, Error>(baseUrl, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

const addTodo = async (obj_data: any) => {
  return await fetcher<ITodoList>(baseUrl, REST_VERBS.POST, {
    obj_data: { ...obj_data },
  }).then((_) => mutate(baseUrl));
};

export { useTodoListData, addTodo };
export type { ITodoList, Data };
