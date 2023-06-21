import { createGenericFetcher, fetcher } from '@/src/lib/fetcher';
import { APP_CFG_REST_URLS } from '@/src/lib/res_definitions';
import { filter } from 'lodash';
import { atom, selector } from 'recoil';
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

const todoMutations = async (
  action: string,
  obj_data: any,
  searchParams?: any
) => {
  return await fetcher<ITodoList>(
    `${searchParams ? baseUrl + '?' + searchParams : baseUrl}`,
    action,
    { obj_data: { ...obj_data } }
  ).then((_) => mutate(baseUrl));
};

const todoDataListAtom = atom({
  key: 'todoDataListAtom',
  default: [] as ITodoList[],
});

const getTodoStatsSelector = selector({
  key: 'getTodoStatsSlctr',
  get: ({ get }) => {
    const todoList = get(todoDataListAtom);
    if ((todoList || []).length > 0) {
      return {
        numTodos: todoList.length,
        completed: filter(todoList, 'is_complete').length,
      };
    }

    return {
      numTodos: 0,
      completed: 0,
    };
  },
});

export {
  useTodoListData,
  todoMutations,
  todoDataListAtom,
  getTodoStatsSelector,
};
export type { ITodoList, Data };
