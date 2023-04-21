import DataGridCmp from '@/src/components/dataview/DataGridCmp';

const ProductListCmp = ({ dataSet }: { dataSet: any[] }) => {
  return (
    <div className="grid list-demo">
      <div className="col-12">
        <DataGridCmp dataViewValue={dataSet} />
      </div>
    </div>
  );
};

export default ProductListCmp;
