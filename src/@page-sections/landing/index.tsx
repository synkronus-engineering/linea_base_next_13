import BlogArticles from '@/src/components/landing-sections/BlogArticles';
import FeaturesCmp from '@/src/components/landing-sections/FeaturesCmp';
import FeatureServices from '@/src/components/landing-sections/FeatureServices';
import HeroCmp from '@/src/components/landing-sections/HeroCmp';

const LandingPageCmp = () => {
  return (
    <div className="surface-0 flex justify-content-center">
      <div className="landing-wrapper overflow-hidden">
        {/* hero bar */}
        <HeroCmp />
        <div className="surface-ground px-4 py-4 md:px-6 lg:px-8 text-center">
          {/* features services */}
          <FeatureServices />
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
};

export default LandingPageCmp;
