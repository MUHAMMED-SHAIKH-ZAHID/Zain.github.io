import { KTCard } from '../../../_metronic/helpers'
import { PageTitle } from '../../../_metronic/layout/core'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { quoteColumns } from '../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const SuplierList = () => {
  const {itemIdForUpdate} = useListView()
  const Data = [
    { quoteId: "Q001", customerName: "Acme Corp", quantity: 100, quoteValue: "1,500", salesPerson: "John Doe", status: "Pending" },
    { quoteId: "Q002", customerName: "Beta LLC", quantity: 200, quoteValue: "2,800", salesPerson: "Jane Smith", status: "Approved" },
    { quoteId: "Q003", customerName: "Gamma Inc", quantity: 150, quoteValue: "2,250", salesPerson: "Emily Jones", status: "Rejected" },
    { quoteId: "Q004", customerName: "Delta Co", quantity: 75, quoteValue: "1,125", salesPerson: "Michael Brown", status: "In Review" },
    { quoteId: "Q005", customerName: "Epsilon Ltd", quantity: 50, quoteValue: "750", salesPerson: "Chris Green", status: "Pending" },
    { quoteId: "Q006", customerName: "Zeta Inc", quantity: 90, quoteValue: "1,350", salesPerson: "Olivia Wright", status: "Approved" },
    { quoteId: "Q007", customerName: "Eta LLC", quantity: 120, quoteValue: "1,800", salesPerson: "Daniel Black", status: "Rejected" },
    { quoteId: "Q008", customerName: "Theta Corp", quantity: 60, quoteValue: "900", salesPerson: "Sophia Clark", status: "In Review" },
    { quoteId: "Q009", customerName: "Iota Services", quantity: 110, quoteValue: "1,650", salesPerson: "Brian Martinez", status: "Pending" },
    { quoteId: "Q010", customerName: "Kappa Plc", quantity: 130, quoteValue: "1,950", salesPerson: "Natalie Wilson", status: "Approved" },
    { quoteId: "Q011", customerName: "Lambda Group", quantity: 140, quoteValue: "2,100", salesPerson: "Alex Thompson", status: "Rejected" },
    { quoteId: "Q012", customerName: "Mu Enterprises", quantity: 170, quoteValue: "2,550", salesPerson: "Mia Taylor", status: "In Review" },
    { quoteId: "Q013", customerName: "Nu Inc", quantity: 180, quoteValue: "2,700", salesPerson: "Ethan Anderson", status: "Pending" },
    { quoteId: "Q014", customerName: "Xi Co", quantity: 95, quoteValue: "1,425", salesPerson: "Abigail Lewis", status: "Approved" },
    { quoteId: "Q015", customerName: "Omicron LLC", quantity: 210, quoteValue: "3,150", salesPerson: "James White", status: "Rejected" },
    { quoteId: "Q016", customerName: "Pi Services", quantity: 160, quoteValue: "2,400", salesPerson: "Isabella Harris", status: "In Review" },
    { quoteId: "Q017", customerName: "Rho Ltd", quantity: 200, quoteValue: "3,000", salesPerson: "Matthew Clark", status: "Pending" },
    { quoteId: "Q018", customerName: "Sigma Corp", quantity: 65, quoteValue: "975", salesPerson: "Ava Lewis", status: "Approved" },
    { quoteId: "Q019", customerName: "Tau Plc", quantity: 85, quoteValue: "1,275", salesPerson: "Oliver Martin", status: "Rejected" },
    { quoteId: "Q020", customerName: "Upsilon Group", quantity: 190, quoteValue: "2,850", salesPerson: "Charlotte Rodriguez", status: "In Review" }
  ];
  
  


  return (
    <>
      <KTCard>
        <UsersTable column={quoteColumns} Data={Data} Title={'SalesQuote'} />
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


const SalesOrder = () => {
  return (
    <div><PageTitle>Sales Order</PageTitle>
    <SuplierList /></div>
  )
}

export default SalesOrder