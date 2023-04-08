import { map } from 'lodash';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

type ColumnMeta = {
  field: string;
  header: string;
  body?: any;
};

type DataTableProps = {
  dataSet: any;
  columns: ColumnMeta[];
  isLoading?: boolean;
  header: any;
};

const DynamicTable = ({
  dataSet,
  columns,
  isLoading,
  header,
}: DataTableProps) => {
  const dynamicColumns = map(columns, (col, i) => <Column key={i} {...col} />);

  return (
    <DataTable
      value={dataSet}
      header={header}
      loading={isLoading ?? false}
      scrollable
      responsiveLayout="scroll"
      scrollHeight="300px"
    >
      {dynamicColumns}
    </DataTable>
  );
};

export { DynamicTable };
export type { ColumnMeta };
