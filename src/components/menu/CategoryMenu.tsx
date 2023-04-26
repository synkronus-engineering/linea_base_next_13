'use client';
import { map, toLower } from 'lodash';

type TypePropsCategory = {
  categoryColorList: any;
  categoryList: any;
  categoryBrandList: any;
};

const CategoryMenu = ({
  categoryColorList,
  categoryList,
  categoryBrandList,
}: TypePropsCategory) => {
  const CategoryCmp = ({ title }: { title: any }) => {
    return (
      <a className="cursor-pointer text-900 font-medium mb-3 hover:text-primary transition-duration-150">
        {title}
      </a>
    );
  };

  const CategoryBrandCmp = ({
    item,
  }: {
    item: { title: string; value: number };
  }) => {
    const { title, value } = item;
    return (
      <div className="flex w-full justify-content-between">
        <div className="field-checkbox">
          <div className="p-checkbox p-component">
            <div className="p-hidden-accessible">
              <input type="checkbox" id={title} />
            </div>
            <div className="p-checkbox-box">
              <span className="p-checkbox-icon p-c"></span>
            </div>
          </div>
          <label className="text-900"> {title} </label>
        </div>
        <span className="p-badge p-component mr-2 bg-gray-200 text-gray-900 p-0 border-circle">
          {value}
        </span>
      </div>
    );
  };

  const CategoryColorCmp = ({ title }: { title: any }) => {
    return (
      <div className="col-4 flex flex-column align-items-center">
        <div
          className={`w-3rem h-3rem border-circle bg-${toLower(
            title
          )}-400 cursor-pointer border-none flex justify-content-center align-items-center`}
        ></div>
        <p className="text-900 text-sm text-center mt-1"> {title}</p>
      </div>
    );
  };

  return (
    <div className="col-fixed lg:col-2 mr-4 flex p-0 flex-column w-full lg:w-2 ">
      <div className="flex flex-column p-0">
        {map(categoryList, (item, i) => (
          <CategoryCmp title={item} key={i} />
        ))}
      </div>
      <div
        className="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full m-0 p-0"
        role="separator"
      >
        <div className="p-divider-content"></div>
      </div>
      <div id="pr_id_1" className="p-accordion p-component -mb-1 mt-3">
        <div className="p-accordion-tab p-accordion-tab-active">
          <div className="p-accordion-header p-highlight">
            <a
              href="#pr_id_1_content_0"
              id="pr_id_1_header_0"
              className="p-accordion-header-link"
              aria-controls="pr_id_1_content_0"
              role="tab"
              aria-label="Collapse"
              aria-expanded="true"
            >
              <span className="p-accordion-header-text">Brand</span>
            </a>
          </div>
          <div
            id="pr_id_1_content_0"
            className="p-toggleable-content p-toggleable-content-enter-done"
            role="region"
            aria-labelledby="pr_id_1_header_0"
          >
            <div className="p-accordion-content">
              <div className="transition-all transition-duration-400 transition-ease-in-out">
                <div className="mb-3">
                  <span className="p-input-icon-right w-full">
                    <i className="pi pi-search"></i>
                    <input
                      placeholder="Search"
                      className="p-inputtext p-component w-full"
                    />
                  </span>
                </div>
                {map(categoryBrandList, (item) => (
                  <CategoryBrandCmp item={item} />
                ))}

                <a className="block cursor-pointer my-3 text-primary font-medium">
                  Show all...
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-accordion-tab p-accordion-tab-active">
          <div className="p-accordion-header p-highlight">
            <a
              href="#pr_id_1_content_1"
              id="pr_id_1_header_1"
              className="p-accordion-header-link"
              aria-controls="pr_id_1_content_1"
              role="tab"
              aria-label="Collapse"
              aria-expanded="true"
            >
              <span className="p-accordion-header-text">Price Range</span>
            </a>
          </div>
          <div
            id="pr_id_1_content_1"
            className="p-toggleable-content p-toggleable-content-enter-done"
            role="region"
            aria-labelledby="pr_id_1_header_1"
          >
            <div className="p-accordion-content">
              <div className="transition-all transition-duration-400 transition-ease-in-out">
                <div
                  className="p-slider p-component mt-3 mx-auto p-slider-horizontal"
                  style={{ maxWidth: '93%' }}
                >
                  <span
                    className="p-slider-range"
                    style={{ left: '20%', width: '60%' }}
                  ></span>
                  <span
                    className="p-slider-handle p-slider-handle-start p-slider-handle-active"
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={20}
                    aria-orientation="horizontal"
                    style={{ left: '20%' }}
                  ></span>
                  <span
                    className="p-slider-handle p-slider-handle-end"
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={80}
                    aria-orientation="horizontal"
                    style={{ left: '80%' }}
                  ></span>
                </div>
                <div className="flex my-4">
                  <span className="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled">
                    <input
                      className="p-inputtext p-component p-filled p-input w-full mr-3"
                      type="text"
                      placeholder="$10"
                    />
                  </span>
                  <span className="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled">
                    <input
                      className="p-inputtext p-component p-filled p-input w-full"
                      type="text"
                      placeholder="$10000"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-accordion-tab p-accordion-tab-active">
          <div className="p-accordion-header p-highlight">
            <a
              href="#pr_id_1_content_2"
              id="pr_id_1_header_2"
              className="p-accordion-header-link"
              aria-controls="pr_id_1_content_2"
              role="tab"
              aria-label="Collapse"
              aria-expanded="true"
            >
              <span className="p-accordion-header-text">Color</span>
            </a>
          </div>
          <div
            id="pr_id_1_content_2"
            className="p-toggleable-content p-toggleable-content-enter-done"
            role="region"
            aria-labelledby="pr_id_1_header_2"
          >
            <div className="p-accordion-content">
              <div className="transition-all transition-duration-400 transition-ease-in-out">
                <div className="grid mb-3">
                  {map(categoryColorList, (item) => (
                    <CategoryColorCmp title={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
