'use client';
import { toggleSnackBar } from '@/src/components/message/SnackBar';
import { profileInfoSlctr } from '@/src/context/appContext';
import { isNil } from 'lodash';
import { useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function PostFormCmp({
  blogItem,
  handleFormServerAction,
}: {
  blogItem: any;
  handleFormServerAction: any;
}) {
  const userGlobal = useRecoilValue(profileInfoSlctr);
  const setSnackbarState = useSetRecoilState(toggleSnackBar);
  const formRef = useRef() as any;
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (formData: FormData) => {
    if (isNil(userGlobal)) {
      setSnackbarState({
        show: true,
        msg: 'Requiere usuario registrado',
        title: 'Required',
        type: 'warn',
      });
      return;
    }
    if (isLoading) return;
    setIsLoading(true);
    const result = (await handleFormServerAction(
      formData,
      userGlobal,
      blogItem?.id,
      true
    )) as any;

    if (!result.error) {
      formRef?.current?.reset();
      setSnackbarState({
        show: true,
        msg: 'Success',
        title: 'Confirm Update',
        type: 'success',
      });
    } else {
      setSnackbarState({
        show: true,
        msg: `${result.error?.message}`,
        title: 'Action error',
        type: 'error',
      });
    }
    setIsLoading(false);
  };

  return (
    <form ref={formRef}>
      <div className="text-xl text-900 mb-4 font-bold mt-8">Post a Comment</div>
      <div className="mb-3 p-fluid">
        <textarea
          className="p-inputtextarea p-inputtext p-component"
          placeholder="Your comment"
          name="comment"
        ></textarea>
      </div>
      <div className="flex justify-content-end">
        <button
          formAction={handleFormSubmit}
          className="p-button p-component"
          disabled={isLoading}
        >
          {isLoading ? (
            <i
              className="pi pi-spin pi-spinner mr-2"
              style={{ fontSize: '1rem' }}
            />
          ) : null}
          <span className="p-button-label p-c">Post Comment</span>
        </button>
      </div>
    </form>
  );
}
