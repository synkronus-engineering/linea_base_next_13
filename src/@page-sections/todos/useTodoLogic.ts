import { toggleConfirmDialog } from '@/components/dialogs/DialogConfirm';
import { blockUiAtom } from '@/components/loader/BlockUI';
import { toggleSnackBar } from '@/components/message/SnackBar';
import { userGlobalSession } from '@/context/appContext';
import { ITodoList, todoMutations, useTodoListData } from '@/data/todos_api';
import { REST_VERBS } from '@/lib/res_definitions';
import { get, map } from 'lodash';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export default function useTodoLogic() {
  const { data, isLoading, isError } = useTodoListData();
  const [dialogOpen, setDialogOpen] = useState(false);
  const userGlobal = useRecoilValue(userGlobalSession);
  const [confirmDialogState, setConfirmDialogState] =
    useRecoilState(toggleConfirmDialog);
  const setSnackbarState = useSetRecoilState(toggleSnackBar);
  const [loadingSaveBtn, setLoadingBtn] = useState(false);
  const setBlockView = useSetRecoilState(blockUiAtom);

  const handleCountRows = (data: ITodoList[] | undefined) => {
    return map(data, (item, i) => ({ ...item, count: i + 1 }));
  };

  const showToastMesg = (type: any, title: string) => {
    setSnackbarState({
      show: true,
      msg: 'Success',
      title,
      type,
    });
  };

  const handleAction = async (item: any, action: string) => {
    switch (action) {
      case 'is_done':
        {
          setBlockView(true);
          const { data: dtUpdate, error: errUpdate } = await todoMutations(
            REST_VERBS.PUT,
            {
              is_complete: !item.is_complete,
              id: item.id,
            }
          );
          setBlockView(false);
          if (dtUpdate && !errUpdate) {
            setConfirmDialogState({
              show: false,
              action: false,
              data: null,
              loading: false,
            });
            showToastMesg('success', 'Item updated');
          } else showToastMesg('error', 'Something went wrong');
        }

        break;
      case 'confirm_delete':
        {
          const { data: dtDel, error: errDel } = await todoMutations(
            REST_VERBS.DELETE,
            {
              id: item.id,
            }
          );
          if (dtDel && !errDel) {
            setConfirmDialogState({
              show: false,
              action: false,
              data: null,
              loading: false,
            });
            showToastMesg('success', 'Item deleted');
          } else showToastMesg('error', 'Something went wrong');
        }
        break;
      case 'delete':
        setConfirmDialogState({
          show: true,
          action: false,
          data: item,
          loading: false,
        });
        break;
      case 'new':
        {
          setLoadingBtn(true);
          const { data: dtNew, error: errNew } = await todoMutations(
            REST_VERBS.POST,
            {
              ...item,
              user_id: get(userGlobal, 'user.id', null),
            }
          );
          setLoadingBtn(false);
          if (dtNew && !errNew) {
            showToastMesg('success', 'New item added');
            setDialogOpen(false);
          } else showToastMesg('error', 'Something went wrong');
        }
        break;

      default:
        setDialogOpen(false);
        break;
    }
  };

  useEffect(() => {
    if (confirmDialogState.action && confirmDialogState.data)
      handleAction(confirmDialogState.data, 'confirm_delete');
  }, [confirmDialogState]);

  return {
    data: handleCountRows(data?.data),
    handleCountRows,
    dialogOpen,
    setDialogOpen,
    isLoading,
    handleAction,
    loadingSaveBtn,
  };
}
