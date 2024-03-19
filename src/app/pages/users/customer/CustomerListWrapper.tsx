
import { KTCard } from '../../../../_metronic/helpers'
import { UsersListHeader } from '../../../modules/apps/user-management/users-list/components/header/UsersListHeader'
import { ListViewProvider, useListView } from '../../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../../modules/apps/user-management/users-list/table/UsersTable'
import {  userColumns } from '../../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const SuplierList = () => {
  const {itemIdForUpdate} = useListView()

const Data = [
    { name: "John Doe", email: "john.doe@example.com", location: "New York, NY", company: "Tech Innovations Inc." },
    { name: "Jane Smith", email: "jane.smith@example.com", location: "San Francisco, CA", company: "Creative Solutions LLC" },
    { name: "William Johnson", email: "william.johnson@example.com", location: "Chicago, IL", company: "Global Enterprises" },
    { name: "Emma Wilson", email: "emma.wilson@example.com", location: "Austin, TX", company: "DesignWorks Studio" },
    { name: "Michael Brown", email: "michael.brown@example.com", location: "Seattle, WA", company: "CloudNet Solutions" },
    { name: "Olivia Martinez", email: "olivia.martinez@example.com", location: "Denver, CO", company: "NextGen Advisors" },
    { name: "Lucas White", email: "lucas.white@example.com", location: "Boston, MA", company: "EcoTech" },
    { name: "Sophia Taylor", email: "sophia.taylor@example.com", location: "Los Angeles, CA", company: "Innovatech" },
    { name: "Mason Thomas", email: "mason.thomas@example.com", location: "Dallas, TX", company: "Tech Pioneers" },
    { name: "Isabella Jackson", email: "isabella.jackson@example.com", location: "Philadelphia, PA", company: "Bright Future Solutions" },
    { name: "Ethan Lee", email: "ethan.lee@example.com", location: "Miami, FL", company: "Blue Ocean Tech" },
    { name: "Mia Harris", email: "mia.harris@example.com", location: "Atlanta, GA", company: "Digital Dreams" },
    { name: "Alexander Clark", email: "alexander.clark@example.com", location: "Phoenix, AZ", company: "GreenWorld Innovations" },
    { name: "Charlotte Walker", email: "charlotte.walker@example.com", location: "San Diego, CA", company: "Creative Minds Inc." },
    { name: "James Wright", email: "james.wright@example.com", location: "Las Vegas, NV", company: "Visionary Apps" },
    { name: "Ava King", email: "ava.king@example.com", location: "Portland, OR", company: "Sustainable Solutions" },
    { name: "Benjamin Scott", email: "benjamin.scott@example.com", location: "Houston, TX", company: "NextWave Tech" },
    { name: "Amelia Young", email: "amelia.young@example.com", location: "Minneapolis, MN", company: "Future Horizons" },
    { name: "Logan Anderson", email: "logan.anderson@example.com", location: "New Orleans, LA", company: "Infinite Possibilities Ltd." },
    { name: "Harper Roberts", email: "harper.roberts@example.com", location: "Kansas City, MO", company: "Dynamic Development" }
  ];
  
  return (
    <>
      <KTCard>
        <UsersTable column={userColumns} Data={Data} Title={'Customer'} />
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
