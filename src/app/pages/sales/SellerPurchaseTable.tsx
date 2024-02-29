import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { KTCard } from '../../../_metronic/helpers'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'
import { sellerpurchaseColumns, suplierColumns, suplierpurchaseColumns } from '../../modules/apps/user-management/users-list/table/columns/_columns'


const SuplierList = () => {
    const {itemIdForUpdate} = useListView()
  
    const Data = Array.from({ length: 20 }, (_, index) => ({
        date: new Date(2021, 0, index + 1).toLocaleDateString("en-US"),
        purchaseNo: `PN${1000 + index}`,
        purchaseAmount: Math.round(Math.random() * 1000 + 100), // Random amount between 100 and 1100
      }));
    
    return (
      <>
        <KTCard>
          <UsersTable column={sellerpurchaseColumns} Data={Data} Title={''} />
        </KTCard>
        {itemIdForUpdate !== undefined && <UserEditModal />}
      </>
    )
  }




const SellerPurchaseTable = () => {
  return (
    <div> <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <SuplierList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
  </div>
  )
}

export default SellerPurchaseTable