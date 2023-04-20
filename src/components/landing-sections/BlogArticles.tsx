const BlogArticles = () => {
  return (
    <div className=" px-4 py-8 md:px-6 lg:px-8">
      <div className="font-bold text-5xl text-900 mb-5 text-center">
        Featured Articles
      </div>
      <div className="grid nogutter">
        <div className="col-12 lg:col-4 p-3">
          <div className="shadow-2 border-round h-full surface-card">
            <img
              src="/assets/layout/blog/blog-1.jpeg"
              alt="blog-1"
              className="block w-full border-round-top"
            />
            <div className="p-4">
              <span className="block font-medium text-blue-600 mb-3">
                Crime
              </span>
              <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                Fugitive flamingo spotted in Florida
              </div>
              <div className="line-height-3 mb-3 text-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="flex">
                <div className="p-avatar p-component p-avatar-image p-avatar-circle">
                  <img
                    src="/assets/layout/avatar/avatar-f-1.png"
                    alt="avatar"
                  />
                </div>
                <div className="ml-2">
                  <div className="text-sm font-bold text-900 mb-1">
                    Anna Lane
                  </div>
                  <div className="text-sm flex align-items-center text-700">
                    <i className="pi pi-calendar mr-1 text-sm"></i>
                    <span>Apr 5, 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
          <div className="shadow-2 border-round h-full surface-card">
            <img
              src="/assets/layout/blog/blog-2.jpeg"
              alt="blog-2"
              className="block w-full border-round-top"
            />
            <div className="p-4 flex flex-column">
              <span className="block font-medium text-pink-600 mb-3">
                Wildlife
              </span>
              <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                Journey to the Ends of the Earth
              </div>
              <div className="line-height-3 mb-3 text-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="flex">
                <div className="p-avatar p-component p-avatar-image p-avatar-circle">
                  <img
                    src="/assets/layout/avatar/avatar-f-2.png"
                    alt="avatar"
                  />
                </div>
                <div className="ml-2">
                  <div className="text-sm font-bold text-900 mb-1">
                    Arlene McCoy
                  </div>
                  <div className="text-sm flex align-items-center text-700">
                    <i className="pi pi-calendar mr-1 text-sm"></i>
                    <span>Apr 6, 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 lg:col-4 p-3">
          <div className="shadow-2 border-round h-full surface-card">
            <img
              src="/assets/layout/blog/blog-3.jpeg"
              alt="blog-3"
              className="block w-full border-round-top"
            />
            <div className="p-4">
              <span className="block font-medium text-orange-600 mb-3">
                Marine
              </span>
              <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                Real and imminent extinction risk
              </div>
              <div className="line-height-3 mb-3 text-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="flex">
                <div className="p-avatar p-component p-avatar-image p-avatar-circle">
                  <img
                    src="/assets/layout/avatar/avatar-f-3.png"
                    alt="avatar"
                  />
                </div>
                <div className="ml-2">
                  <div className="text-sm font-bold text-900 mb-1">
                    Diane Miles
                  </div>
                  <div className="text-sm flex align-items-center text-700">
                    <i className="pi pi-calendar mr-1 text-sm"></i>
                    <span>Apr 9, 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
