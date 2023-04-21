'use client';
import { TabPanel, TabView } from 'primereact/tabview';

export default function TabViewCmp() {
  return (
    <TabView>
      <TabPanel header="Details">
        <div
          id="pr_id_1_content_0"
          aria-labelledby="pr_id_1_header_0"
          aria-hidden="false"
          className="p-tabview-panel"
          role="tabpanel"
        >
          <div className="text-900 font-medium text-3xl mb-4 mt-2">
            Product Details
          </div>
          <p className="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">
            Volutpat maecenas volutpat blandit aliquam etiam erat velit
            scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed
            tempus urna et pharetra. Metus vulputate eu scelerisque felis
            imperdiet proin fermentum. Venenatis urna cursus eget nunc
            scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien
            eget mi proin. Laoreet suspendisse interdum consectetur libero id
            faucibus.
          </p>
          <div className="grid">
            <div className="col-12 lg:col-4">
              <span className="text-900 block font-medium mb-3">
                Highlights
              </span>
              <ul className="py-0 pl-3 m-0 text-700 mb-3">
                <li className="mb-2">Vulputate sapien nec.</li>
                <li className="mb-2">Purus gravida quis blandit.</li>
                <li className="mb-2">Nisi quis eleifend quam adipiscing.</li>
                <li>Imperdiet proin fermentum.</li>
              </ul>
            </div>

            <div className="col-12 lg:col-4">
              <span className="text-900 block font-medium mb-3">
                Size and Fit
              </span>
              <ul className="list-none p-0 m-0 text-700 mb-4">
                <li className="mb-3">
                  <span className="font-medium">Leo vel:</span>
                  Egestas congue.
                </li>
                <li className="mb-3">
                  <span className="font-medium">Sociis natoque:</span>{' '}
                  Parturient montes nascetur.
                </li>
                <li>
                  <span className="font-medium">Suspendisse in:</span> Purus sit
                  amet volutpat.
                </li>
              </ul>
            </div>

            <div className="col-12 lg:col-4">
              <span className="text-900 block font-medium mb-3">
                Material &amp; Care
              </span>
              <ul className="p-0 m-0 text-700 flex flex-wrap flex-column xl:flex-row">
                <li className="flex align-items-center white-space-nowrap w-10rem block mr-2 mb-3">
                  <i className="pi pi-sun mr-2"></i>
                  <span>Not dryer safe</span>
                </li>
                <li className="flex align-items-center white-space-nowrap w-10rem block mb-3">
                  <i className="pi pi-times-circle mr-2"></i>
                  <span>No chemical wash</span>
                </li>
                <li className="flex align-items-center white-space-nowrap w-10rem block mb-3 mr-2">
                  <i className="pi pi-sliders-h mr-2"></i>
                  <span>Iron medium heat</span>
                </li>
                <li className="flex align-items-center white-space-nowrap w-10rem block mb-3">
                  <i className="pi pi-minus-circle mr-2"></i>
                  <span>Dry flat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Reviews">
        <div
          id="pr_id_1_content_1"
          aria-labelledby="pr_id_1_header_1"
          aria-hidden="false"
          className="p-tabview-panel"
          role="tabpanel"
        >
          <div className="text-900 font-medium text-3xl mb-4 mt-2">
            Customer Reviews
          </div>
          <ul className="list-none p-0 m-0">
            <li className="pb-5 border-bottom-1 surface-border">
              <span>
                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i className="pi pi-star-fill text-gray-500"></i>
              </span>
              <div className="text-900 font-medium text-xl my-3">
                Absolute Perfection!
              </div>
              <p className="mx-0 mt-0 mb-3 text-700 line-height-3">
                Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu
                dictum varius duis at consectetur lorem donec massa. Imperdiet
                proin fermentum leo vel orci porta non. Porttitor rhoncus dolor
                purus non.
              </p>
              <span className="text-600 font-medium">
                Darlene Robertson, 2 days ago
              </span>
            </li>
            <li className="py-5 border-bottom-1 surface-border">
              <span>
                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                <i className="pi pi-star-fill text-yellow-500"></i>
              </span>
              <div className="text-900 font-medium text-xl my-3">Classy</div>
              <p className="mx-0 mt-0 mb-3 text-700 line-height-3">
                Venenatis cras sed felis eget. Proin nibh nisl condimentum id
                venenatis a condimentum.
              </p>
              <span className="text-600 font-medium">
                Kristin Watson, 2 days ago
              </span>
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel header="Shipping">
        <div
          id="pr_id_1_content_2"
          aria-labelledby="pr_id_1_header_2"
          aria-hidden="false"
          className="p-tabview-panel"
          role="tabpanel"
        >
          <div className="text-900 font-medium text-3xl mb-4 mt-2">
            Shipping Placeholder
          </div>
          <p className="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">
            Mattis aliquam faucibus purus in massa tempor nec feugiat nisl.
            Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed
            risus. Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet
            enim tortor at auctor urna nunc. Habitant morbi tristique senectus
            et. Facilisi nullam vehicula ipsum.
          </p>
          <div className="grid">
            <div className="col-12 md:col-6">
              <span className="text-900 block font-medium mb-3">
                Shipping Costs
              </span>
              <ul className="py-0 pl-3 m-0 text-700 mb-3">
                <li className="mb-2">Japan - JPY 2,500.</li>
                <li className="mb-2">Europe – EUR 10</li>
                <li className="mb-2">Switzerland – CHF 10</li>
                <li className="mb-2">Canada – CAD 25</li>
                <li className="mb-2">USA – USD 20</li>
                <li className="mb-2">Australia – AUD 30</li>
                <li className="mb-2">United Kingdom – GBP 10</li>
              </ul>
            </div>
            <div className="col-12 md:col-6">
              <span className="text-900 block font-medium mb-3">
                Return Policy
              </span>
              <p className="line-height-3 text-700 p-0 m-0">
                Pharetra et ultrices neque ornare aenean euismod elementum nisi.
                Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis
                at.{' '}
              </p>
            </div>
          </div>
        </div>
      </TabPanel>
    </TabView>
  );
}
