'use client';
import CategoryMenu from '@/src/components/menu/CategoryMenu';
import { SideBarMenu, siteBarToggleAtom } from '@/src/components/menu/SideBar';
import { isMobileView } from '@/src/providers/MobileViewListener';
import { Button } from 'primereact/button';
import { ReactNode } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

type CatFilterProps = { children: ReactNode };

const categoryBrandList = [
  {
    title: 'Apple',
    value: 42,
  },
  {
    title: 'Hyper',
    value: 18,
  },
  {
    title: 'Bastion',
    value: 7,
  },
  {
    title: 'Zara',
    value: 36,
  },
];

const categoryList = [
  'Denim',
  'Sweaters',
  'T-Shirt',
  'Pants & Shorts',
  'Outwear',
  'Shoes',
  'Accessories',
];

const categoryColorList = [
  'Yellow',
  'Orange',
  'Indigo',
  'Gray',
  'Cyan',
  'Pink',
];

const CategoryFilterLayout = ({ children }: CatFilterProps) => {
  const mediaQuerySize = useRecoilValue(isMobileView);
  const setVisibleLeft = useSetRecoilState(siteBarToggleAtom);

  const getCatMenu = () => (
    <CategoryMenu
      categoryColorList={categoryColorList}
      categoryList={categoryList}
      categoryBrandList={categoryBrandList}
    />
  );

  return (
    <div className="surface-section px-4 py-2 md:px-4 lg:px-4">
      <div className="flex justify-content-between w-full align-items-center">
        <span className="text-700 font-bold text-2xl">Category Filters</span>
        <Button
          aria-label="Filters"
          icon="pi pi-sliders-h"
          className="align-self-end is-mobile-inactive"
          onClick={() => setVisibleLeft(true)}
        />
      </div>
      <div
        className="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full"
        role="separator"
      ></div>
      <div className="flex flex-wrap lg:flex-nowrap">
        {mediaQuerySize.isMobile ? (
          <SideBarMenu>{getCatMenu()}</SideBarMenu>
        ) : (
          <> {getCatMenu()}</>
        )}
        <div
          className="w-full  border-round surface-border surface-section mt-3 lg:mt-0"
          style={{ minHeight: '25rem' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterLayout;
