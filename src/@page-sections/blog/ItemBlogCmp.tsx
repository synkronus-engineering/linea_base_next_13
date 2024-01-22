/* eslint-disable @next/next/no-img-element */
'use client';
import ImageElm from '@/src/components/image/ImageElm';
import {
  PaginatorCmp,
  usePaginator,
} from '@/src/components/utils/PaginatorCmp';
import { first as firstAsh, map, split } from 'lodash';
import Link from 'next/link';

const ItemBlogCmp = ({ dataSet }: { dataSet: any }) => {
  const { first, stepInd, onPageChange, getTotalRecords, curentPagedData } =
    usePaginator(dataSet);

  console.log('ItemBlogCmp ***', curentPagedData);

  return (
    <>
      <div className="grid nogutter">
        {map(curentPagedData, (blog: any) => (
          <div className="col-12 md:col-4 ">
            <Link href={`/blog/${blog?.id}`}>
              <div
                className="shadow-2 border-round h-full surface-card"
                key={blog?.id}
              >
                <ImageElm
                  src={`/assets/blog/images/${blog?.image_src}`}
                  alt="blog-1"
                  className="block w-full border-round-top h-10rem"
                />

                <div className="p-4">
                  <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                    {blog?.title}
                  </div>
                  <div className="line-height-3 mb-3 text-700 text-align-start">
                    {blog?.sort_description}
                  </div>
                  <div className="flex align-items-center ">
                    <div className="p-avatar p-component p-avatar-image p-avatar-circle">
                      <ImageElm
                        src={`/assets/blog/avatar/${blog?.author?.srcImg}`}
                        alt="avatar"
                      />
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-bold text-900 mb-1">
                        {blog?.author?.name}
                      </div>
                      <div className="text-sm flex align-items-center text-700">
                        <i className="pi pi-calendar mr-1 text-sm"></i>
                        <span>{firstAsh(split(blog?.created_at, 'T'))}</span>
                      </div>
                    </div>

                    <span className="block font-medium text-blue-600 ml-auto">
                      {blog?.category}
                    </span>
                  </div>
                </div>
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

export default ItemBlogCmp;
