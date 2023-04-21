'use client';
import { lowerCase } from 'lodash';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { useState } from 'react';

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventory_status: string;
  rating: number;
}

type layoutGrid =
  | 'grid'
  | 'list'
  | (string & Record<string, unknown>)
  | undefined;

export default function BasicDemo({
  dataViewValue,
}: {
  dataViewValue: Product[];
}) {
  const [layout, setLayout] = useState('grid' as layoutGrid);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [sortKey, setSortKey] = useState(null as any);
  const [sortOrder, setSortOrder] = useState(null as any);
  const [sortField, setSortField] = useState(null as any);
  const [filteredValue, setFilteredValue] = useState(null as any);

  const sortOptions = [
    { label: 'Price High to Low', value: '!price' },
    { label: 'Price Low to High', value: 'price' },
  ];

  const onFilter = (e: any) => {
    const value = e.target.value;
    setGlobalFilterValue(value);
    if (value.length === 0) {
      setFilteredValue(null);
    } else {
      const filtered = dataViewValue.filter((product: any) => {
        return lowerCase(product.name).includes(value);
      });
      setFilteredValue(filtered);
    }
  };

  const onSortChange = (event: any) => {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const getSeverity = (product: Product) => {
    switch (product.inventory_status) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  const listItem = (product: Product) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={`/assets/products/items/${product.image}`}
            alt={product.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <Rating value={product.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span>
                <Tag
                  value={product.inventory_status}
                  severity={getSeverity(product)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                disabled={product.inventory_status === 'OUTOFSTOCK'}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const gridItem = (product: Product) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{product.category}</span>
            </div>
            <Tag
              value={product.inventory_status}
              severity={getSeverity(product)}
            ></Tag>
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <Link href={`/products/${product?.id}`}>
              <img
                className="w-9 shadow-2 border-round"
                src={`/assets/products/items/${product.image}`}
                alt={product.name}
              />
            </Link>
            <div className="text-2xl font-bold">{product.name}</div>
            <Rating value={product.rating} readOnly cancel={false}></Rating>
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="text-2xl font-semibold">${product.price}</span>
            <Button
              icon="pi pi-shopping-cart"
              className="p-button-rounded"
              disabled={product.inventory_status === 'OUTOFSTOCK'}
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product: Product, layout: string) => {
    if (!product) {
      return;
    }

    if (layout === 'list') return listItem(product);
    else if (layout === 'grid') return gridItem(product);
  };

  const dataViewHeader = (
    <div className="flex flex-column md:flex-row md:justify-content-between gap-2">
      <Dropdown
        value={sortKey}
        options={sortOptions}
        optionLabel="label"
        placeholder="Sort By Price"
        onChange={onSortChange}
      />
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={globalFilterValue}
          onChange={onFilter}
          placeholder="Search by Name"
        />
      </span>
      <DataViewLayoutOptions
        layout={layout}
        onChange={(e) => setLayout(e.value)}
      />
    </div>
  );

  return (
    <div className="card">
      <DataView
        value={filteredValue || dataViewValue}
        itemTemplate={itemTemplate}
        layout={layout}
        header={dataViewHeader}
        paginator
        rows={9}
        sortOrder={sortOrder}
        sortField={sortField}
      />
    </div>
  );
}
