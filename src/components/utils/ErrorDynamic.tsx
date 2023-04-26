import Link from 'next/link';

type ItemProps = { errorMsg: string; urlRedirect: any; title?: string };

const ErrorDynamic = ({ errorMsg, urlRedirect, title }: ItemProps) => {
  return (
    <div className="flex flex-column align-items-center justify-content-center mt-1">
      <div
        style={{
          borderRadius: '56px',
          padding: '0.3rem',
          background:
            'linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%)',
        }}
      >
        <div
          className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center"
          style={{ borderRadius: '53px' }}
        >
          <div
            className="flex justify-content-center align-items-center bg-pink-500 border-circle"
            style={{ height: '3.2rem', width: '3.2rem' }}
          >
            <i className="pi pi-fw pi-exclamation-circle text-2xl text-white"></i>
          </div>
          <h1 className="text-900 font-bold text-5xl mb-2">
            {title || 'Error Occured'}
          </h1>
          <div className="text-600 mb-5">{errorMsg}</div>
          <img
            src={`/assets/error/asset-error.svg`}
            alt="Error"
            className="mb-5"
            width="80%"
          />
          <div className="text-center">
            <Link href={urlRedirect}>
              <div className="p-button p-component">
                <span className="p-button-icon p-c p-button-icon-left pi pi-home"></span>
                <span className="p-button-label p-c">Try Again</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorDynamic;
