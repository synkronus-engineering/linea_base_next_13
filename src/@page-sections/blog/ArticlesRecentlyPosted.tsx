'use client';
import ImageElm from '@/src/components/image/ImageElm';
import {
  PaginatorCmp,
  usePaginator,
} from '@/src/components/utils/PaginatorCmp';
import { first as firstAsh, map, slice, split } from 'lodash';
import Link from 'next/link';
import { useEffect, useState, useTransition } from 'react';

export default function ArticlesRecentlyPosted({
  blogItem,
  fetchBlogListSrvrFn,
}: {
  blogItem: any;
  fetchBlogListSrvrFn: any;
}) {
  const [blogList, setBlogList] = useState([]);
  const {
    first,
    stepInd,
    onPageChange,
    getTotalRecords,
    curentPagedData,
    setCurentPagedData,
  } = usePaginator(blogList);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    (() => {
      startTransition(async () => {
        const result = (await fetchBlogListSrvrFn(blogItem?.id)) as any;
        setBlogList(result);
        setCurentPagedData(slice(result, first.from, first.to));
      });
    })();
  }, []);

  return (
    <>
      <div className="font-bold text-5xl text-900 mb-3">Recent Articles</div>
      <div className="grid nogutter">
        {isPending ? (
          <div className="flex col-12 lg:col-4 p-4 align-content-center justify-content-center">
            Loading Recent Articless...
          </div>
        ) : (
          map(curentPagedData, (blog: any) => (
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
                  <ImageElm
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
          ))
        )}
      </div>
      {isPending ? null : (
        <PaginatorCmp
          first={first}
          stepInd={stepInd}
          getTotalRecords={getTotalRecords}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}
