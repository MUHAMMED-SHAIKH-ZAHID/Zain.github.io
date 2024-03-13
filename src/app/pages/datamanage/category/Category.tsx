



import { KTCard } from '../../../../_metronic/helpers'
import { ListViewProvider, useListView } from '../../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../../modules/apps/user-management/users-list/table/UsersTable'
import { categoryColumns} from '../../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const CategoryList = () => {
  const {itemIdForUpdate} = useListView()

  const Data = [
    {categoryId: 1, categoryName: 'Impact Bring'},
    {categoryId: 2, categoryName: 'Over Figure'},
    {categoryId: 3, categoryName: 'Prevent Nice'},
    {categoryId: 4, categoryName: 'Soon Degree'},
    {categoryId: 5, categoryName: 'Long Price'},
    {categoryId: 6, categoryName: 'Officer Public'},
    {categoryId: 7, categoryName: 'Mention Authority'},
    {categoryId: 8, categoryName: 'Wonder Mission'},
    {categoryId: 9, categoryName: 'Television Determine'},
    {categoryId: 10, categoryName: 'Reflect Decision'},
    {categoryId: 11, categoryName: 'Grow Between'},
    {categoryId: 12, categoryName: 'Speech Community'},
    {categoryId: 13, categoryName: 'Teacher Chance'},
    {categoryId: 14, categoryName: 'Use Family'},
    {categoryId: 15, categoryName: 'She Heavy'},
    {categoryId: 16, categoryName: 'Positive Those'},
    {categoryId: 17, categoryName: 'Public Skin'},
    {categoryId: 18, categoryName: 'Watch Page'},
    {categoryId: 19, categoryName: 'Pressure Shake'},
    {categoryId: 20, categoryName: 'Any Machine'}
  ];
  
  
  return (
    <>
      <KTCard>
        <UsersTable column={categoryColumns} Data={Data} Title={'Category'} />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const CategoryListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <CategoryList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {CategoryListWrapper}





const Category = () => {
  return (
    <div><CategoryList /></div>
  )
}

export default Category