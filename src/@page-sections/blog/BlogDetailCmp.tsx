/* eslint-disable @next/next/no-img-element */
'use client';
import ImageElm from '@/src/components/image/ImageElm';
import { usrSsnCookieAtom } from '@/src/context/appContext';
import { findIndex, first as firstAsh, isNil, split } from 'lodash';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export const AvatarProCmp = ({ url_avatar }: { url_avatar: string }) => {
  const pro_avatar = isNil(url_avatar)
    ? `/assets/blog/avatar/default_avatar.svg`
    : url_avatar;

  return (
    <ImageElm
      src={pro_avatar}
      alt="vatar"
      className="w-3rem h-3rem border-circle shadow-4 mr-3"
    />
  );
};

const BlogContentBody = ({ blogItem }: { blogItem: any }) => {
  return (
    <>
      <div className="text-center my-6">
        <ImageElm
          src={`/assets/blog/images/${blogItem?.image_src}`}
          alt="Image"
          className="w-full"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: blogItem?.content }}></div>
    </>
  );
};

const AuthorBlogHeader = ({
  blogItem,
  handleArticleViews,
}: {
  blogItem: any;
  handleArticleViews: any;
}) => {
  const viewByUsrAnon = useRecoilValue(usrSsnCookieAtom);

  useEffect(() => {
    (async () => {
      if (findIndex(blogItem?.views, ['anon_ssn', viewByUsrAnon]) == -1) {
        await handleArticleViews(blogItem?.id, viewByUsrAnon);
      }
    })();
  }, []);

  return (
    <>
      <div>
        <div className="text-3xl text-900 mb-4 mt-4 md:mt-0 text-center md:text-left font-semibold md:pr-4">
          {blogItem?.title}
        </div>
        <div className="flex flex-wrap justify-content-center md:justify-content-start gap-1">
          <span className="inline-flex align-items-center py-2 px-1 font-medium ">
            <i className="pi pi-clock text-primary mr-1"></i>
            <span className="text-900">
              {firstAsh(split(blogItem?.created_at, 'T'))}
            </span>
          </span>
          <span className="inline-flex align-items-center py-2 px-1 font-medium ">
            <i className="pi pi-comments text-primary mr-1"></i>
            <span className="text-900">
              {(blogItem?.article_comments || []).length}
            </span>
          </span>
          <span className="inline-flex align-items-center py-2 px-1 font-medium ">
            <i className="pi pi-eye text-primary mr-1"></i>
            <span className="text-900">{(blogItem?.views || []).length}</span>
          </span>
          <span className="inline-flex align-items-center py-2 px-1 font-medium ">
            <i className="pi pi-thumbs-up text-primary mr-1"></i>
            <span className="text-900">{(blogItem?.likes || []).length}</span>
          </span>
        </div>
      </div>
      <div className="flex flex-column align-items-center justify-content-center">
        <ImageElm
          className="w-4rem h-4rem"
          src={`/assets/blog/avatar/${blogItem?.author?.srcImg}`}
          alt="Avatar"
        />
        <span className="mt-3 font-bold text-900 text-center white-space-nowrap">
          {blogItem?.author?.name}
        </span>
      </div>
    </>
  );
};

export { AuthorBlogHeader, BlogContentBody };
