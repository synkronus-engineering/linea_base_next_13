const FeatureServices = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-pink-500">
        <i className="pi pi-arrow-right text-pink-500 text-4xl mr-5"></i>
        <div>
          <span className="text-900 font-medium text-xl">
            Pay Later in 30 Days
          </span>
          <p className="text-600 line-height-3 p-0 mt-3 mb-0">
            Ullamcorper sit amet risus nullam eget felis eget nunc.
          </p>
        </div>
      </div>
      <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-blue-500">
        <i className="pi pi-shopping-cart text-blue-500 text-4xl mr-5"></i>
        <div>
          <span className="text-900 font-medium text-xl">Free Shipping</span>
          <p className="text-600 line-height-3 p-0 mt-3 mb-0">
            Ullamcorper sit amet risus nullam eget felis eget nunc.
          </p>
        </div>
      </div>
      <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-orange-500">
        <i className="pi pi-shield text-orange-500 text-4xl mr-5"></i>
        <div>
          <span className="text-900 font-medium text-xl">Secure Payment</span>
          <p className="text-600 line-height-3 p-0 mt-3 mb-0">
            Ullamcorper sit amet risus nullam eget felis eget nunc.
          </p>
        </div>
      </div>
      <div className="flex md:col-6 xl:col-3 align-items-center flex-auto p-5 border-left-2 xl:border-left-none xl:border-top-2 border-cyan-500">
        <i className="pi pi-refresh text-cyan-500 text-4xl mr-5"></i>
        <div>
          <span className="text-900 font-medium text-xl">
            Money Back Guarantee
          </span>
          <p className="text-600 line-height-3 p-0 mt-3 mb-0">
            Ullamcorper sit amet risus nullam eget felis eget nunc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureServices;
