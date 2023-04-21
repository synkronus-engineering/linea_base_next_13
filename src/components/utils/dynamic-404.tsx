import Link from 'next/link';

type ItemProps = { title: string; urlRedirect: string };

const ItemNotFound = ({ title, urlRedirect }: ItemProps) => {
  return (
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div
        className="text-center"
        style={{
          background:
            'radial-gradient(50% 109138% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%)',
        }}
      >
        <span className="bg-white text-pink-500 font-bold text-2xl inline-block px-3">
          404
        </span>
      </div>
      <div className="mt-6 mb-5 font-bold text-6xl text-900 text-center">
        {title}
      </div>
      <p className="text-700 text-3xl mt-0 mb-6 text-center">
        Sorry, we couldnt find this resource.
      </p>
      <div className="text-center">
        <Link href={`${urlRedirect}`}>
          <div className="p-button p-component p-button-text mr-2">
            <span className="p-button-icon p-c p-button-icon-left pi pi-arrow-left"></span>
            <span className="p-button-label p-c">Go Back</span>
          </div>
        </Link>
        <Link href="/">
          <div className="p-button p-component">
            <span className="p-button-icon p-c p-button-icon-left pi pi-home"></span>
            <span className="p-button-label p-c">Go to home</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ItemNotFound;
