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
};

const DynamicTable = ({ dataSet, columns, isLoading }: DataTableProps) => {
  const dynamicColumns = map(columns, (col, i) => <Column key={i} {...col} />);

  return (
    <DataTable
      value={dataSet}
      tableStyle={{ minWidth: '50rem' }}
      scrollable
      responsiveLayout="scroll"
      scrollHeight="350px"
      loading={isLoading ?? false}
    >
      {dynamicColumns}
    </DataTable>
  );
};

export { DynamicTable };
export type { ColumnMeta };
