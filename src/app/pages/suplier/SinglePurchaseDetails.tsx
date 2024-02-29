import { PageTitle } from '../../../_metronic/layout/core'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { KTCard } from '../../../_metronic/helpers'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'
import { itemPurchaseColumns } from '../../modules/apps/user-management/users-list/table/columns/_columns'


const InvoiceList = () => {
    const {itemIdForUpdate} = useListView()
    const Data = Array.from({ length: 20 }, (_, index) => ({
      item: `Item ${index + 1}`,
      price: Math.random() * 100 + 1, // Random price between 1 and 100
      quantity: Math.floor(Math.random() * 10) + 1, // Random quantity between 1 and 10
      total: 0, // Initialized to 0, can be calculated dynamically if preferred
    })).map(item => ({
      ...item,
      total: item.price * item.quantity, // Calculating total based on price and quantity
    }));
      
    return (
      <>
        <KTCard>
          <UsersTable column={itemPurchaseColumns} Data={Data} Title={'Download'} />
        </KTCard>
        {itemIdForUpdate !== undefined && <UserEditModal />}
      </>
    )
  }

const InvoiceListWrapper = () => (
    <QueryRequestProvider>
      <QueryResponseProvider >
        <ListViewProvider>
          <InvoiceList />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  )

const SinglePurchaseDetails = () => {
  return (
    <div>
         <PageTitle breadcrumbs={[]}>Purchase No : PN 288</PageTitle>
      <InvoiceListWrapper />
    </div>
  )
}

export default SinglePurchaseDetails