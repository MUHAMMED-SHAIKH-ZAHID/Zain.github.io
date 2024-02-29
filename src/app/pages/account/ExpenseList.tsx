import { PageTitle } from '../../../_metronic/layout/core'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { KTCard } from '../../../_metronic/helpers'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { ExpenceColumns } from '../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'

const ExpenceList = () => {
  const {itemIdForUpdate} = useListView()

  const Data = [
    { slNo: 1, date: '2024-02-05', amount: 866.26, remarks: 'Remark 1', mainCategory: 'Work', subCategory: 'Expense Reimbursement' },
    { slNo: 2, date: '2024-02-02', amount: 615.19, remarks: 'Remark 2', mainCategory: 'Home', subCategory: 'Utilities' },
    { slNo: 3, date: '2024-02-26', amount: 785.64, remarks: 'Remark 3', mainCategory: 'Personal', subCategory: 'Health' },
    { slNo: 4, date: '2024-02-27', amount: 321.25, remarks: 'Remark 4', mainCategory: 'Home', subCategory: 'Groceries' },
    { slNo: 5, date: '2024-02-09', amount: 581.85, remarks: 'Remark 5', mainCategory: 'Education', subCategory: 'Supplies' },
    { slNo: 6, date: '2024-02-13', amount: 736.99, remarks: 'Remark 6', mainCategory: 'Education', subCategory: 'Tuition' },
    { slNo: 7, date: '2024-02-26', amount: 581.4, remarks: 'Remark 7', mainCategory: 'Personal', subCategory: 'Entertainment' },
    { slNo: 8, date: '2024-02-28', amount: 787.8, remarks: 'Remark 8', mainCategory: 'Personal', subCategory: 'Entertainment' },
    { slNo: 9, date: '2024-02-12', amount: 445.66, remarks: 'Remark 9', mainCategory: 'Work', subCategory: 'Expense Reimbursement' },
    { slNo: 10, date: '2024-02-04', amount: 459.26, remarks: 'Remark 10', mainCategory: 'Education', subCategory: 'Supplies' },
    { slNo: 11, date: '2024-02-21', amount: 875.56, remarks: 'Remark 11', mainCategory: 'Home', subCategory: 'Utilities' },
    { slNo: 12, date: '2024-02-04', amount: 951.53, remarks: 'Remark 12', mainCategory: 'Work', subCategory: 'Expense Reimbursement' },
    { slNo: 13, date: '2024-02-24', amount: 475.47, remarks: 'Remark 13', mainCategory: 'Education', subCategory: 'Tuition' },
    { slNo: 14, date: '2024-02-11', amount: 468.81, remarks: 'Remark 14', mainCategory: 'Work', subCategory: 'Bonus' },
    { slNo: 15, date: '2024-02-24', amount: 975.58, remarks: 'Remark 15', mainCategory: 'Work', subCategory: 'Salary' }
  ];
  
    
  
  return (
    <>
      <KTCard>
        <UsersTable column={ExpenceColumns} Data={Data} Title={''} />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const ExpenceListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <ExpenceList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)
  
  const ExpenseList = () => {
    return (
    <div><PageTitle >Expence List</PageTitle>
    <ExpenceListWrapper />
    </div>

  )
}

export default ExpenseList