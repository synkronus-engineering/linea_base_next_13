'use client';
import DynamicDialog from '@/src/components/dialogs/DynamicDialog';
import { toggleSnackBar } from '@/src/components/message/SnackBar';
import { profileInfoSlctr } from '@/src/context/appContext';
import { first, isNil, split } from 'lodash';
import { useRef, useState, useTransition } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AvatarProCmp } from './BlogDetailCmp';

const ReplyComments = ({ replies }: { replies: any }) => {
  return (
    <ul className="list-none  md:ml-auto w-9">
      {replies.map((reply: any, i: number) => (
        <li key={i} className="flex p-3 mb-3  ">
          <AvatarProCmp url_avatar={reply?.avatar_url} />
          <div className="flex flex-row w-full flex-wrap gap-0 md:gap-5">
            <div className="flex flex-column">
              <div className="flex flex-column w-full flex-wrap ">
                <span className="font-semibold text-900">{reply?.name}</span>
                <p className="font-semibold text-600 m-0 text-sm">
                  {first(split(reply?.created_at, 'T'))}
                </p>
              </div>
              <p className="line-height-3 mb-0 mt-1 flex-grow-1">
                {reply?.comment}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const PostFormRepliesCmp = ({
  handleSubmit,
  formRef,
}: {
  handleSubmit: any;
  formRef: any;
}) => {
  const [comment, setComment] = useState('');
  const [isPending, startTransition] = useTransition();

  return (
    <form ref={formRef}>
      <div className="mb-3 p-fluid">
        <textarea
          className="p-inputtextarea p-inputtext p-component"
          placeholder="Your comment"
          name="comment"
          onKeyUp={(e) => setComment(e.currentTarget.value)}
        ></textarea>
      </div>
      <div className="flex justify-content-end">
        <button
          onClick={() => startTransition(() => handleSubmit(comment))}
          className="p-button p-component"
          disabled={isPending}
        >
          {isPending ? (
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
};

export default function ArticleComments({
  blogItem,
  handleFormServerAction,
}: {
  blogItem: any;
  handleFormServerAction: any;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [articleSelected, setArticleSelected] = useState(null) as any;
  const userGlobal = useRecoilValue(profileInfoSlctr);
  const formRef = useRef() as any;
  const setSnackbarState = useSetRecoilState(toggleSnackBar);

  const handleFormAction = async (comment: string) => {
    if (isNil(userGlobal)) {
      setSnackbarState({
        show: true,
        msg: 'Requiere usuario registrado',
        title: 'Required',
        type: 'warn',
      });
      setDialogOpen(false);
      return;
    }
    const result = await handleFormServerAction(
      { comment, article_id: articleSelected?.id },
      userGlobal,
      blogItem?.id,
      false
    );
    if (!result.error) {
      formRef?.current?.reset();
      setDialogOpen(false);
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
  };

  return (
    <>
      <ul className="list-none p-0 mx-0 md:mx-8">
        {(blogItem?.article_comments || []).map((comment: any, i: number) => (
          <>
            <li
              key={i}
              className="flex p-3 mb-3 border-top-1 surface-border border-round"
            >
              <AvatarProCmp url_avatar={comment?.user_info?.avatar_url} />
              <div className=" w-full">
                <div className="flex flex-row justify-content-between w-full">
                  <span className="font-semibold text-900">
                    {comment?.user_info?.name}
                  </span>
                  <span
                    className="p-button-icon p-button-icon-left pi pi-comment md:ml-auto cursor-pointer"
                    style={{ fontSize: '1rem' }}
                    onClick={() => {
                      setArticleSelected(comment);
                      setDialogOpen(true);
                    }}
                  ></span>
                </div>
                <p className="font-semibold text-600 m-0 text-sm">
                  {first(split(comment?.created_at, 'T'))}
                </p>
                <p className="line-height-3 mb-0 mt-1">{comment?.comment}</p>
              </div>
            </li>
            {(comment?.replies || []).length > 0 && (
              <ReplyComments replies={comment?.replies} />
            )}
          </>
        ))}
      </ul>
      <DynamicDialog
        title="Reply"
        dialogOpen={dialogOpen}
        setToggleDialog={setDialogOpen}
      >
        <PostFormRepliesCmp handleSubmit={handleFormAction} formRef={formRef} />
      </DynamicDialog>
    </>
  );
}
