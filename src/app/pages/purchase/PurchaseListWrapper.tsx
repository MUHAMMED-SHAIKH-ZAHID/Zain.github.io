
import { KTCard } from '../../../_metronic/helpers'
import { UsersListHeader } from '../../modules/apps/user-management/users-list/components/header/UsersListHeader'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { productsColumns, suplierColumns } from '../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const ProductList = () => {
  const {itemIdForUpdate} = useListView()
  const Data = [
    { id: '1', supliername: 'Supplier A', purchasePrice: '100', category: 'Electronics', Quantity: '50' },
    { id: '2', supliername: 'Supplier B', purchasePrice: '150', category: 'Clothing', Quantity: '70' },
    { id: '3', supliername: 'Supplier C', purchasePrice: '200', category: 'Groceries', Quantity: '30' },
    { id: '4', supliername: 'Supplier D', purchasePrice: '250', category: 'Electronics', Quantity: '40' },
    { id: '5', supliername: 'Supplier E', purchasePrice: '300', category: 'Toys', Quantity: '90' },
    { id: '6', supliername: 'Supplier F', purchasePrice: '350', category: 'Books', Quantity: '120' },
    { id: '7', supliername: 'Supplier G', purchasePrice: '400', category: 'Clothing', Quantity: '60' },
    { id: '8', supliername: 'Supplier H', purchasePrice: '450', category: 'Electronics', Quantity: '80' },
    { id: '9', supliername: 'Supplier I', purchasePrice: '500', category: 'Groceries', Quantity: '20' },
    { id: '10', supliername: 'Supplier J', purchasePrice: '550', category: 'Toys', Quantity: '110' },
    { id: '11', supliername: 'Supplier K', purchasePrice: '600', category: 'Books', Quantity: '130' },
    { id: '12', supliername: 'Supplier L', purchasePrice: '650', category: 'Clothing', Quantity: '55' },
    { id: '13', supliername: 'Supplier M', purchasePrice: '700', category: 'Electronics', Quantity: '45' },
    { id: '14', supliername: 'Supplier N', purchasePrice: '750', category: 'Groceries', Quantity: '35' },
    { id: '15', supliername: 'Supplier O', purchasePrice: '800', category: 'Toys', Quantity: '95' },
    { id: '16', supliername: 'Supplier P', purchasePrice: '850', category: 'Books', Quantity: '125' },
    { id: '17', supliername: 'Supplier Q', purchasePrice: '900', category: 'Clothing', Quantity: '65' },
    { id: '18', supliername: 'Supplier R', purchasePrice: '950', category: 'Electronics', Quantity: '85' },
    { id: '19', supliername: 'Supplier S', purchasePrice: '1000', category: 'Groceries', Quantity: '25' },
    { id: '20', supliername: 'Supplier T', purchasePrice: '1050', category: 'Toys', Quantity: '115' },
  ];
  

  
  return (
    <>
      <KTCard>
        <UsersTable column={productsColumns} Data={Data} Title={'Purchase'}/>
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const PurchaseListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <ProductList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {PurchaseListWrapper}