
import { KTCard } from '../../../../_metronic/helpers'
import { PageTitle } from '../../../../_metronic/layout/core'
import { UsersListHeader } from '../../../modules/apps/user-management/users-list/components/header/UsersListHeader'
import { ListViewProvider, useListView } from '../../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../../modules/apps/user-management/users-list/table/UsersTable'
import {  sellerColumns, userColumns } from '../../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const SuplierList = () => {
  const {itemIdForUpdate} = useListView()

  const Data = Array.from({ length: 20 }, (_, index) => ({
    name: `Seller Name ${index + 1}`,
    email: `seller${index + 1}@example.com`,
    mobile: `123456789${index % 10}`, // Simple pattern for demonstration
    role: `Role ${index % 4 === 0 ? 'Admin' : 'User'}`, // Alternates between Admin and User
  }));
  
  return (
    <>
      <KTCard>
        <UsersTable column={sellerColumns} Data={Data} Title={'Seller'} />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const CustomerListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <SuplierList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {CustomerListWrapper}


const Sellers = () => {
  return (
    <div>
        <PageTitle>Sales Excecutive</PageTitle><CustomerListWrapper /></div>
  )
}

export default Sellers