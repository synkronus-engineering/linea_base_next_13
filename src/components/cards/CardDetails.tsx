'use client';
import Link from 'next/link';

const CardDetails = ({ data }: { data: any }) => {
  return (
    <>
      <div className="flex align-items-center text-xl font-medium text-900 mb-4 justify-content-between ">
        <span className="text-900 font-medium text-3xl block">
          {data?.name}
        </span>
        <i className="pi text-2xl cursor-pointer pi-heart text-600"></i>
      </div>
      <div className="flex align-items-center justify-content-between mb-5">
        <span className="text-900 font-medium text-3xl block">
          ${data?.price}
        </span>
        <div className="flex align-items-center">
          <span className="mr-3">
            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
            <i className="pi pi-star text-700 mr-1"></i>
          </span>
          <span className="text-sm">
            <b className="text-900 mr-1">24</b>
            <span className="text-500"></span>reviews
          </span>
        </div>
      </div>

      <div className="font-bold text-900 mb-3">Color</div>
      <div className="flex align-items-center mb-5">
        <div
          className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
          style={{ boxShadow: '0 0 0 0.2rem var(--bluegray-500)' }}
        ></div>
        <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-green-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"></div>
        <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"></div>
      </div>

      <div className="mb-3 flex align-items-center justify-content-between">
        <span className="font-bold text-900">Size</span>
        <a className="cursor-pointer text-600 text-sm flex align-items-center">
          Size Guide <i className="ml-1 pi pi-angle-right"></i>
        </a>
      </div>

      <div className="grid grid-nogutter align-items-center mb-5">
        <div className="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
          XS
        </div>
        <div className="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
          S
        </div>
        <div className="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors border-blue-500 border-2 text-blue-500">
          M
        </div>
        <div className="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
          L
        </div>
        <div className="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
          XL
        </div>
      </div>

      <div className="font-bold text-900 mb-3">Quantity</div>

      <div className="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between">
        <span className="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal">
          <input
            className="p-inputtext p-component p-filled  w-3rem text-center"
            type="text"
            placeholder="1"
          />
          <button
            type="button"
            className="p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component p-button-text"
          >
            <span className="p-button-icon pi pi-plus"></span>
            <span role="presentation" className="p-ink"></span>
          </button>
          <button
            type="button"
            className="p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component p-button-text"
          >
            <span className="p-button-icon pi pi-minus"></span>
            <span role="presentation" className="p-ink"></span>
          </button>
        </span>
        <div className="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
          <button
            aria-label="Add to Cart"
            className="p-button p-component flex-1 mr-5"
          >
            <span className="p-button-label p-c">Add to Cart</span>
            <span role="presentation" className="p-ink"></span>
          </button>
          <Link href={'/products'}>
            <div className="p-button p-component flex-1 mr-5">
              <span className="p-button-label p-c">Keep Looking</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
