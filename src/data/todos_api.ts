import { APP_CFG_REST_URLS } from '@/lib/res_definitions';
import useSWR from 'swr';

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

async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
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

export { useTodoListData };
export type { ITodoList, Data };
