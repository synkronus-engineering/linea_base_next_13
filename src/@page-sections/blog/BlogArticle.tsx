/* eslint-disable @next/next/no-img-element */
'use client';
import { handleSubmit } from '@/app/blog/blog_actions';
import DynamicDialog from '@/src/components/dialogs/DynamicDialog';
import { toggleSnackBar } from '@/src/components/message/SnackBar';
import {
  PaginatorCmp,
  usePaginator,
} from '@/src/components/utils/PaginatorCmp';
import { userGlobalSession, usrSsnCookieAtom } from '@/src/context/appContext';
import { first as firstAsh, indexOf, isNil, map, split } from 'lodash';
import Link from 'next/link';
import { classNames } from 'primereact/utils';
import { useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export const AvatarProCmp = ({ url_avatar }: { url_avatar: string }) => {
  const pro_avatar = isNil(url_avatar)
    ? `/assets/blog/avatar/default_avatar.svg`
    : url_avatar;

  return (
    <img
      src={pro_avatar}
      alt="vatar"
      className="w-3rem h-3rem border-circle shadow-4 mr-3"
    />
  );
};

const BtnThumbsUp = ({ blogItem }: { blogItem: any }) => {
  const [btnUp, setBtnUp] = useState(false);
  const userGlobal = useRecoilValue(userGlobalSession);
  const [btnUpFill, setBtnUpFill] = useState(
    indexOf(blogItem?.likes, userGlobal?.user?.id) > -1
  );

  return (
    <div className="flex flex-column sm:flex-row my-8 w-full gap-3">
      <button className="p-button p-component  p-button-secondary">
        <span className="p-button-icon p-button-icon-left pi pi-twitter"></span>
        Twitter
      </button>
      <button className="p-button p-component  p-button-secondary">
        <span className="p-button-icon p-button-icon-left pi pi-facebook"></span>
        Facebook
      </button>
      <span
        className={classNames(
          'p-button-icon p-button-icon-left pi md:ml-auto cursor-pointer',
          {
            'fadeoutup animation-duration-500 animation-iteration-1 ': btnUp,
            'pi-thumbs-up-fill': btnUpFill,
            'pi-thumbs-up': !btnUpFill,
          }
        )}
        style={{ fontSize: '2.5rem' }}
      ></span>
    </div>
  );
};

const BlogContentBody = ({ blogItem }: { blogItem: any }) => {
  return (
    <>
      <div className="text-center my-6">
        <img
          src={`/assets/blog/images/${blogItem?.image_src}`}
          alt="Image"
          className="w-full"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: blogItem?.content }}></div>
    </>
  );
};

const ArticlesRecentlyPosted = ({ blogList }: { blogList: any }) => {
  const { first, stepInd, onPageChange, getTotalRecords, curentPagedData } =
    usePaginator(blogList);

  return (
    <>
      <div className="font-bold text-5xl text-900 mb-3">Recent Articles</div>
      <div className="grid nogutter">
        {map(curentPagedData, (blog: any) => (
          <div className="col-12 lg:col-4 p-4" key={blog?.id}>
            <Link href={`/blog/${blog?.id}`}>
              <div className="border-top-3 border-blue-600"></div>
              <div className="text-900 font-medium text-xl line-height-3 mb-4">
                {blog?.title}
              </div>
              <div className="font-sm text-700 line-height-3">
                {blog?.sort_description}
              </div>
              <div className="flex mt-4 align-items-center">
                <img
                  src={`/assets/blog/avatar/${blog?.author?.srcImg}`}
                  alt="avatar"
                  className="w-3rem h-3rem mr-3 flex-shrink-0"
                />
                <div className="ml-2">
                  <div className="text-xs font-bold text-900 mb-1">
                    {blog?.author?.name}
                  </div>
                  <div className="text-xs flex align-items-center text-700">
                    <i className="pi pi-calendar mr-1 text-xs"></i>
                    <span>{firstAsh(split(blog?.created_at, 'T'))}</span>
                  </div>
                </div>
                <span className="text-blue-600 font-medium ml-auto">
                  {blog?.category}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <PaginatorCmp
        first={first}
        stepInd={stepInd}
        getTotalRecords={getTotalRecords}
        onPageChange={onPageChange}
      />
    </>
  );
};

const AuthorBlogHeader = ({ data }: { data: any }) => {
  const viewByUsrAnon = useRecoilValue(usrSsnCookieAtom);

  return (
    <>
      <div>
        <div className="text-3xl text-900 mb-4 mt-4 md:mt-0 text-center md:text-left font-semibold md:pr-4">
          {data?.title}
        </div>
        <div className="flex flex-wrap justify-content-center md:justify-content-start gap-1">
          <span className="inline-flex align-items-center py-2 px-1 font-medium ">
            <i className="pi pi-clock text-primary mr-1"></i>
            <span className="text-900">
              {firstAsh(split(data?.created_at, 'T'))}
            </span>
          </span>
          <span className="inline-flex align-items-center py-2 px-1 font-medium ">
            <i className="pi pi-comments text-primary mr-1"></i>
            <span className="text-900">
              {(data?.article_comments || []).length}
            </span>
          </span>
          <span className="inline-flex align-items-center py-2 px-1 font-medium ">
            <i className="pi pi-eye text-primary mr-1"></i>
            <span className="text-900">{(data?.views || []).length}</span>
          </span>
          <span className="inline-flex align-items-center py-2 px-1 font-medium ">
            <i className="pi pi-thumbs-up text-primary mr-1"></i>
            <span className="text-900">{(data?.likes || []).length}</span>
          </span>
        </div>
      </div>
      <div className="flex flex-column align-items-center justify-content-center">
        <img
          className="w-4rem h-4rem"
          src={`/assets/blog/avatar/${data?.author?.srcImg}`}
          alt="Avatar"
        />
        <span className="mt-3 font-bold text-900 text-center white-space-nowrap">
          {data?.author?.name}
        </span>
      </div>
    </>
  );
};

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
                  {firstAsh(split(reply?.created_at, 'T'))}
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

const PostFormRepliesCmp = () => {
  const [comment, setComment] = useState('');

  return (
    <form>
      <div className="mb-3 p-fluid">
        <textarea
          className="p-inputtextarea p-inputtext p-component"
          placeholder="Your comment"
          name="comment"
          onKeyUp={(e) => setComment(e.currentTarget.value)}
        ></textarea>
      </div>
      <div className="flex justify-content-end">
        <button className="p-button p-component">
          <span className="p-button-label p-c">Post Comment</span>
        </button>
      </div>
    </form>
  );
};

const ArticleComments = ({ blogItem }: { blogItem: any }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

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
                  ></span>
                </div>
                <p className="font-semibold text-600 m-0 text-sm">
                  {firstAsh(split(comment?.created_at, 'T'))}
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
        <PostFormRepliesCmp />
      </DynamicDialog>
    </>
  );
};

const PostFormCmp = ({ blogItem }: { blogItem: any }) => {
  const userGlobal = useRecoilValue(userGlobalSession);
  const setSnackbarState = useSetRecoilState(toggleSnackBar);
  const formRef = useRef() as any;

  const handleFormSubmit = async (formData: FormData) => {
    //...

    const result = (await handleSubmit(
      formData,
      userGlobal?.user?.id,
      blogItem?.id
    )) as any;

    if (result.data && !result.error) {
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
        <button className="p-button p-component" formAction={handleFormSubmit}>
          <span className="p-button-label p-c">Post Comment</span>
        </button>
      </div>
    </form>
  );
};

export default function BlogDetail({
  blogItem,
  blogList,
}: {
  blogItem: any;
  blogList: any;
}) {
  console.log('BlogDetail ***', blogItem);

  return (
    <div className="card  px-3 md:px-6 py-4 md:py-8 md:mx-8">
      <div className="flex justify-content-between flex-column-reverse md:flex-row align-items-center">
        <AuthorBlogHeader data={blogItem} />
      </div>
      <BlogContentBody blogItem={blogItem} />
      <BtnThumbsUp blogItem={blogItem} />
      <div className="mb-5">
        <ArticlesRecentlyPosted blogList={blogList} />
      </div>
      <div className="my-4 mx-0 md:mx-8">
        <PostFormCmp blogItem={blogItem} />
      </div>
      <ArticleComments blogItem={blogItem} />
    </div>
  );
}
