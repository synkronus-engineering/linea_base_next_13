import CarouselProductCmp from '@/src/@page-sections/landing/CarouselProductCmp';
import DividerCmp from '@/src/components/divider/DividerCmp';
import BlogArticles from '@/src/components/landing-sections/BlogArticles';
import FeatureServices from '@/src/components/landing-sections/FeatureServices';
import FeaturesCmp from '@/src/components/landing-sections/FeaturesCmp';
import HeroCmp from '@/src/components/landing-sections/HeroCmp';
import SkeletonCmp from '@/src/components/utils/SkeletonCmp';
import { APP_CFG_REST_URLS } from '@/src/lib/res_definitions';
import { Suspense } from 'react';

const baseUrl = `${APP_CFG_REST_URLS.BASE_URL}/api/products`;

export default async function Page() {
  return (
    <div className="surface-0 flex justify-content-center">
      <div className="landing-wrapper overflow-hidden">
        {/* hero bar */}
        <HeroCmp />
        <div className="surface-ground px-4 py-4 md:px-6 lg:px-8 text-center">
          {/* features services */}
          <FeatureServices />
        </div>
        <div className="surface-section  py-2 md:px-6 lg:px-8 ">
          <DividerCmp title="Flash deals" />
          <Suspense fallback={<SkeletonCmp gridView={[3, 3, 3, 3]} />}>
            {/* @ts-expect-error Async Server Component */}
            <CarouselProductCmp dataSet={fetch(baseUrl)} />
          </Suspense>
        </div>
        <div className="surface-section py-2 text-center">
          {/* Blog Articles */}
          <BlogArticles />
        </div>
        <div className="surface-ground px-4 py-8 md:px-6 lg:px-8 text-center">
          {/* Features.. */}
          <FeaturesCmp />
        </div>
      </div>
    </div>
  );
}
