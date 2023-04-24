'use client';
import { map } from 'lodash';
import { Skeleton } from 'primereact/skeleton';

const SkeletonCmp = ({ gridView }: { gridView: number[] }) => {
  return (
    <div className="grid">
      {map(gridView, (colW, i) => (
        <div className={`col-12 sm:col-${colW}`} key={i}>
          <div className="border-round border-1 surface-border ">
            <Skeleton width="100%" height="200px"></Skeleton>
            <div className="flex justify-content-center mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCmp;
