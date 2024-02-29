import { ListViewProvider, useListView } from '../../../modules/apps/user-management/users-list/core/ListViewProvider';
import { salesColumns } from '../../../modules/apps/user-management/users-list/table/columns/_columns';
import { KTCard } from '../../../../_metronic/helpers';
import { UsersTable } from '../../../modules/apps/user-management/users-list/table/UsersTable';
import { UserEditModal } from '../../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal';
import { QueryRequestProvider } from '../../../modules/apps/user-management/users-list/core/QueryRequestProvider';
import { QueryResponseProvider } from '../../../modules/apps/user-management/users-list/core/QueryResponseProvider';




const SuplierList = () => {
  const {itemIdForUpdate} = useListView()

  const Data = [
    {
      orderID: 'PID001',
      generatedDate: '2022-01-01',
      suppliername: 'Supplier A',
      orderStatus: 'Completed',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID002',
      generatedDate: '2022-02-15',
      suppliername: 'Supplier B',
      orderStatus: 'Pending',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID003',
      generatedDate: '2022-03-20',
      suppliername: 'Supplier C',
      orderStatus: 'In Progress',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID004',
      generatedDate: '2022-04-05',
      suppliername: 'Supplier D',
      orderStatus: 'Completed',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID005',
      generatedDate: '2022-05-10',
      suppliername: 'Supplier E',
      orderStatus: 'Cancelled',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID006',
      generatedDate: '2022-06-15',
      suppliername: 'Supplier F',
      orderStatus: 'Pending',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID007',
      generatedDate: '2022-07-22',
      suppliername: 'Supplier G',
      orderStatus: 'In Progress',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID008',
      generatedDate: '2022-08-30',
      suppliername: 'Supplier H',
      orderStatus: 'Completed',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID009',
      generatedDate: '2022-09-12',
      suppliername: 'Supplier I',
      orderStatus: 'Pending',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID010',
      generatedDate: '2022-10-25',
      suppliername: 'Supplier J',
      orderStatus: 'In Progress',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID011',
      generatedDate: '2022-11-05',
      suppliername: 'Supplier K',
      orderStatus: 'Completed',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID012',
      generatedDate: '2022-12-17',
      suppliername: 'Supplier L',
      orderStatus: 'Cancelled',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID013',
      generatedDate: '2023-01-09',
      suppliername: 'Supplier M',
      orderStatus: 'Pending',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID014',
      generatedDate: '2023-02-13',
      suppliername: 'Supplier N',
      orderStatus: 'In Progress',
      actions: 'Placeholder Action', // Added action
    },
    {
      orderID: 'PID015',
      generatedDate: '2023-03-20',
      suppliername: 'Supplier O',
      orderStatus: 'Completed',
      actions: 'Placeholder Action', // Added action
    },
  ];
  
  const actionClickHandler = (rowData) => {
    console.log("Button clicked for row:", rowData);  };

  const columns = salesColumns(actionClickHandler);

  return (
    <>
      <KTCard>
        <UsersTable column={columns} Data={Data} Title={'Sales'} />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const SalesListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <SuplierList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {SalesListWrapper}
