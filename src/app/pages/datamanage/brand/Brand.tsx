import { KTCard } from '../../../../_metronic/helpers'
import { ListViewProvider, useListView } from '../../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../../modules/apps/user-management/users-list/table/UsersTable'
import { brandColumns} from '../../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const CategoryList = () => {
  const {itemIdForUpdate} = useListView()

  const Data = [
    {brandId: 1, brandName: 'Knapp-Miller'},
    {brandId: 2, brandName: 'Tran PLC'},
    {brandId: 3, brandName: 'Jenkins-Drake'},
    {brandId: 4, brandName: 'Jenkins, Peters and Walker'},
    {brandId: 5, brandName: 'Smith-Saunders'},
    {brandId: 6, brandName: 'Williams, Harris and Myers'},
    {brandId: 7, brandName: 'Patel PLC'},
    {brandId: 8, brandName: 'Allen-Johnson'},
    {brandId: 9, brandName: 'Moreno, Lopez and James'},
    {brandId: 10, brandName: 'Smith PLC'},
    {brandId: 11, brandName: 'Mills, Warner and Chambers'},
    {brandId: 12, brandName: 'Jones PLC'},
    {brandId: 13, brandName: 'Smith, Clements and Phillips'},
    {brandId: 14, brandName: 'Jones, Harrison and Berry'},
    {brandId: 15, brandName: 'Carter LLC'},
    {brandId: 16, brandName: 'Wood-Wheeler'},
    {brandId: 17, brandName: 'Carr-Porter'},
    {brandId: 18, brandName: 'Aguirre-Hall'},
    {brandId: 19, brandName: 'Hammond, Cruz and Perez'},
    {brandId: 20, brandName: 'Serrano LLC'}
  ];
  
  
  
  return (
    <>
      <KTCard>
        <UsersTable column={brandColumns} Data={Data} Title={'Brand'} />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const BrandListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <CategoryList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)


const Brand = () => {
  return (
    <div><BrandListWrapper /></div>
  )
}

export default Brand