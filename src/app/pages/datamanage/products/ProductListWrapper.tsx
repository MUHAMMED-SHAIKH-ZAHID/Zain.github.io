import { KTCard } from '../../../../_metronic/helpers'
import { ListViewProvider, useListView } from '../../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../../modules/apps/user-management/users-list/table/UsersTable'
import { productColumns } from '../../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const SuplierList = () => {

const Data = [
    {
      purchaseID: 'PID001',
      generatedDate: '2022-01-01',
      suppliername: 'Product A',
      purchasestatus: 'Completed',
    },
    {
      purchaseID: 'PID002',
      generatedDate: '2022-02-15',
      suppliername: 'Product B',
      purchasestatus: 'Pending',
    },
    {
      purchaseID: 'PID003',
      generatedDate: '2022-03-20',
      suppliername: 'Product C',
      purchasestatus: 'In Progress',
    },
    {
      purchaseID: 'PID004',
      generatedDate: '2022-04-05',
      suppliername: 'Product D',
      purchasestatus: 'Completed',
    },
    {
      purchaseID: 'PID005',
      generatedDate: '2022-05-10',
      suppliername: 'Product E',
      purchasestatus: 'Cancelled',
    },
    {
      purchaseID: 'PID006',
      generatedDate: '2022-06-15',
      suppliername: 'Product F',
      purchasestatus: 'Pending',
    },
    {
      purchaseID: 'PID007',
      generatedDate: '2022-07-22',
      suppliername: 'Product G',
      purchasestatus: 'In Progress',
    },
    {
      purchaseID: 'PID008',
      generatedDate: '2022-08-30',
      suppliername: 'Product H',
      purchasestatus: 'Completed',
    },
    {
      purchaseID: 'PID009',
      generatedDate: '2022-09-12',
      suppliername: 'Product I',
      purchasestatus: 'Pending',
    },
    {
      purchaseID: 'PID010',
      generatedDate: '2022-10-25',
      suppliername: 'Product J',
      purchasestatus: 'In Progress',
    },
    {
      purchaseID: 'PID011',
      generatedDate: '2022-11-05',
      suppliername: 'Product K',
      purchasestatus: 'Completed',
    },
    {
      purchaseID: 'PID012',
      generatedDate: '2022-12-17',
      suppliername: 'Product L',
      purchasestatus: 'Cancelled',
    },
    {
        purchaseID: 'PID013',
        generatedDate: '2023-01-09',
        suppliername: 'Product M',
        purchasestatus: 'Pending',
      },
      {
        purchaseID: 'PID014',
        generatedDate: '2023-02-13',
        suppliername: 'Product N',
        purchasestatus: 'In Progress',
      },
      {
        purchaseID: 'PID015',
        generatedDate: '2023-03-20',
        suppliername: 'Product O',
        purchasestatus: 'Completed',
      }
    ];
  
  return (
    <>
      <KTCard>
        <UsersTable column={productColumns} Data={Data} Title={'Product'} />
      </KTCard>
    </>
  )
}

const ProductListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <SuplierList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ProductListWrapper}

