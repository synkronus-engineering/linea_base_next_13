import { isMobileView } from '@/src/providers/MobileViewListener';
import { slice } from 'lodash';
import { Paginator } from 'primereact/paginator';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const usePaginator = (dataSet: any, steps: number = 3) => {
  const mediaQuerySize = useRecoilValue(isMobileView);
  const [stepInd, setStepInd] = useState(mediaQuerySize?.isMobile ? 1 : steps);
  const [first, setFirst] = useState({ from: 0, to: stepInd });
  const [curentPagedData, setCurentPagedData] = useState(
    slice(dataSet, first.from, first.to)
  );

  const onPageChange = (event: { first: number }) => {
    const from = event.first;
    const to = event.first + stepInd;
    setFirst({ from, to });
    setCurentPagedData(slice(dataSet, from, to));
  };

  useEffect(() => {
    (() => {
      setStepInd(mediaQuerySize?.isMobile ? 1 : steps);
      if (!mediaQuerySize?.isMobile) {
        setFirst({ from: 0, to: steps });
        setCurentPagedData(slice(dataSet, 0, steps));
      }
    })();
  }, [mediaQuerySize]);

  const getTotalRecords = (dataSet || []).length;

  return { first, stepInd, onPageChange, getTotalRecords, curentPagedData };
};

type CmpProps = {
  first: any;
  stepInd: number;
  getTotalRecords: any;
  onPageChange: any;
};

const PaginatorCmp = ({
  first,
  stepInd,
  getTotalRecords,
  onPageChange,
}: CmpProps) => {
  return (
    <Paginator
      first={first.from}
      rows={stepInd}
      totalRecords={getTotalRecords}
      onPageChange={onPageChange}
      template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }}
    />
  );
};

export { PaginatorCmp, usePaginator };

// 'use client';
// import CarProductNewArrivals from 'components/cards/ProductCardNewArrivals';
// import { PaginatorCmp, usePaginator } from 'components/utils/PaginatorCmp';
// import { userRecentlyViewProdsSlctr } from 'context/CtxProduct';
// import { map } from 'lodash';
// import { useEffect } from 'react';
// import { useRecoilState } from 'recoil';

// const RecentlyViewedProd = async ({ productViewed }: { productViewed: any }) => {
//   const [userRecentlyViewProds, setUserRecentlyViewProd] = useRecoilState(userRecentlyViewProdsSlctr);
//   const { first, stepInd, onPageChange, getTotalRecords, curentPagedData } = usePaginator(userRecentlyViewProds);

//   useEffect(() => {
//     (() => {
//       if (productViewed) setUserRecentlyViewProd(productViewed);
//     })();
//   }, [productViewed]);

//   //TODO: check i ftheres's posible include skeleton when switching page
//   return (
//     <div className="flex grid flex-column mx-5">
//       <div className="flex flex-column md:flex-row">
//         {map(curentPagedData, (item: any, i) => (
//           <CarProductNewArrivals product={item} key={item?.id} />
//         ))}
//       </div>
//       {(userRecentlyViewProds || []).length > 1 && <PaginatorCmp first={first} stepInd={stepInd} getTotalRecords={getTotalRecords} onPageChange={onPageChange} />}
//     </div>
//   );
// };

// export default RecentlyViewedProd;
