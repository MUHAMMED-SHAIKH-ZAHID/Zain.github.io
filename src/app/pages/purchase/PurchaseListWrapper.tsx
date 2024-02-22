
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
    {name: "Product A", sku: "SKU001", salePrice: "15.00", purchasePrice: "10.00", tax: "5%", category: "Electronics", supplier: "Supplier A", brand: "Brand A", unitsPerPack: 10, StockCount: 100, stockStatus: "In Stock"},
    {name: "Product B", sku: "SKU002", salePrice: "25.00", purchasePrice: "20.00", tax: "5%", category: "Home Appliances", supplier: "Supplier B", brand: "Brand B", unitsPerPack: 5, StockCount: 50, stockStatus: "In Stock"},
    {name: "Product C", sku: "SKU003", salePrice: "30.00", purchasePrice: "25.00", tax: "10%", category: "Computers", supplier: "Supplier C", brand: "Brand C", unitsPerPack: 20, StockCount: 75, stockStatus: "Low Stock"},
    {name: "Product D", sku: "SKU004", salePrice: "40.00", purchasePrice: "30.00", tax: "7%", category: "Mobile Phones", supplier: "Supplier D", brand: "Brand D", unitsPerPack: 15, StockCount: 60, stockStatus: "In Stock"},
    {name: "Product E", sku: "SKU005", salePrice: "50.00", purchasePrice: "35.00", tax: "8%", category: "Gaming", supplier: "Supplier E", brand: "Brand E", unitsPerPack: 10, StockCount: 40, stockStatus: "In Stock"},
    {name: "Product F", sku: "SKU006", salePrice: "55.00", purchasePrice: "45.00", tax: "9%", category: "Furniture", supplier: "Supplier F", brand: "Brand F", unitsPerPack: 8, StockCount: 30, stockStatus: "Low Stock"},
    {name: "Product G", sku: "SKU007", salePrice: "60.00", purchasePrice: "50.00", tax: "5%", category: "Outdoor", supplier: "Supplier G", brand: "Brand G", unitsPerPack: 20, StockCount: 25, stockStatus: "In Stock"},
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