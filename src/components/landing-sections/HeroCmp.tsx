import LazyImage from '../image/LazyImage';

export default function HeroBar() {
  return (
    <div className="flex grid grid-nogutter surface-section text-800 px-6">
      <div className="col-12 md:col-7 p-6 text-center md:text-left align-items-center is-mobile-active">
        <section className="pt-6">
          <span className="block text-6xl font-bold mb-1">
            Create the screens your
          </span>
          <div className="text-6xl text-primary font-bold mb-3">
            your visitors deserve to see
          </div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            type="button"
            className="p-button p-button-rounded p-button-raised text-xl border-none mt-3 bg-blue-500 font-normal line-height-3 px-3 text-white"
          >
            Learn More
          </button>
          <button
            type="button"
            className="p-button p-button-rounded p-button-raised text-xl border-none mt-3 bg-blue-500 font-normal line-height-3 px-3 text-white ml-1"
          >
            Live Demo
          </button>
        </section>
      </div>
      <div className="col-12 md:col-5 overflow-hidden flex justify-content-end ">
        <LazyImage
          src="/assets/layout/hero/banner_hero.png"
          alt="hero-1"
          height={500}
          width={400}
          priority
        />
      </div>
    </div>
  );
}
