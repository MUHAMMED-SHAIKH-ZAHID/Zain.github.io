
import { KTCard } from '../../../_metronic/helpers'
import { PageTitle } from '../../../_metronic/layout/core'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { purchaseQuoteColumns} from '../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'


  

  

const ProductList = () => {
  const {itemIdForUpdate} = useListView()

  const Data = [
    {quoteId: "Q1001", supplierName: "Fresh Farms Ltd.", quantity: 120, quoteValues: "$950.00", salesPerson: "John Doe", quoteStatus: "Shared"},
    {quoteId: "Q1002", supplierName: "Organic Goods Co.", quantity: 80, quoteValues: "$720.00", salesPerson: "Jane Smith", quoteStatus: "On Hold"},
    {quoteId: "Q1003", supplierName: "Daily Dairy Inc.", quantity: 150, quoteValues: "$450.00", salesPerson: "Emily White", quoteStatus: "Rejected"},
    {quoteId: "Q1004", supplierName: "Bakery Bites", quantity: 200, quoteValues: "$600.00", salesPerson: "Mike Brown", quoteStatus: "Converted"},
    {quoteId: "Q1005", supplierName: "Meat Masters", quantity: 90, quoteValues: "$1100.00", salesPerson: "Olivia Green", quoteStatus: "Shared"},
    {quoteId: "Q1006", supplierName: "Green Veggies", quantity: 160, quoteValues: "$320.00", salesPerson: "Daniel Blue", quoteStatus: "On Hold"},
    {quoteId: "Q1007", supplierName: "Fruit Fusion", quantity: 140, quoteValues: "$560.00", salesPerson: "Chloe Grey", quoteStatus: "Rejected"},
    {quoteId: "Q1008", supplierName: "Spice Island", quantity: 75, quoteValues: "$375.00", salesPerson: "Lucas Yellow", quoteStatus: "Converted"},
    {quoteId: "Q1009", supplierName: "Seafood City", quantity: 65, quoteValues: "$1300.00", salesPerson: "Mia Black", quoteStatus: "Shared"},
    {quoteId: "Q1010", supplierName: "Poultry People", quantity: 180, quoteValues: "$900.00", salesPerson: "Noah Purple", quoteStatus: "On Hold"},
    {quoteId: "Q1011", supplierName: "Cereal Solutions", quantity: 110, quoteValues: "$220.00", salesPerson: "Isabella Red", quoteStatus: "Rejected"},
    {quoteId: "Q1012", supplierName: "Snack Savvy", quantity: 130, quoteValues: "$390.00", salesPerson: "Liam Pink", quoteStatus: "Converted"},
    {quoteId: "Q1013", supplierName: "Beverage Barn", quantity: 170, quoteValues: "$850.00", salesPerson: "Sophia Orange", quoteStatus: "Shared"},
    {quoteId: "Q1014", supplierName: "Frozen Feasts", quantity: 50, quoteValues: "$250.00", salesPerson: "Jacob Maroon", quoteStatus: "On Hold"},
    {quoteId: "Q1015", supplierName: "Candy Corner", quantity: 95, quoteValues: "$475.00", salesPerson: "Ava Violet", quoteStatus: "Rejected"},
    {quoteId: "Q1016", supplierName: "Nutty Nuts", quantity: 105, quoteValues: "$525.00", salesPerson: "William Indigo", quoteStatus: "Converted"},
    {quoteId: "Q1017", supplierName: "Grain Gurus", quantity: 120, quoteValues: "$480.00", salesPerson: "Emma Cyan", quoteStatus: "Shared"},
    {quoteId: "Q1018", supplierName: "Cheese Choice", quantity: 85, quoteValues: "$425.00", salesPerson: "James Magenta", quoteStatus: "On Hold"},
    {quoteId: "Q1019", supplierName: "Egg Experts", quantity: 190, quoteValues: "$950.00", salesPerson: "Charlotte Teal", quoteStatus: "Rejected"},
    {quoteId: "Q1020", supplierName: "Condiment Kings", quantity: 100, quoteValues: "$500.00", salesPerson: "Logan Silver", quoteStatus: "Converted"},
  ];
  
  

  
  return (
    <>
      <KTCard>
        <UsersTable column={purchaseQuoteColumns} Data={Data} Title={'Purchase Quote'}/>
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const PurchaseQuotationListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <ProductList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)
const PurchaseQuotation = () => {
  return (
    <div>
        <PageTitle >Purchase Quotation</PageTitle>
        <PurchaseQuotationListWrapper />
    </div>
  )
}

export default PurchaseQuotation