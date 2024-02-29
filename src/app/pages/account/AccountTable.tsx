import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { AccountColumns} from '../../modules/apps/user-management/users-list/table/columns/_columns'
import { KTCard } from '../../../_metronic/helpers'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'

const AccountList = () => {
  const {itemIdForUpdate} = useListView()

  const Data = [
    { date: "2024-02-01", expense: "Income", amount: 2500, category: "Salary" },
    { date: "2024-02-02", expense: "Expense", amount: 150, category: "Food" },
    { date: "2024-02-03", expense: "Expense", amount: 200, category: "Utilities" },
    { date: "2024-02-04", expense: "Income", amount: 100, category: "Gift" },
    { date: "2024-02-05", expense: "Expense", amount: 50, category: "Entertainment" },
    { date: "2024-02-06", expense: "Expense", amount: 500, category: "Rent" },
    { date: "2024-02-07", expense: "Income", amount: 200, category: "Freelance" },
    { date: "2024-02-08", expense: "Expense", amount: 70, category: "Transportation" },
    { date: "2024-02-09", expense: "Expense", amount: 30, category: "Food" },
    { date: "2024-02-10", expense: "Income", amount: 3000, category: "Salary" },
    { date: "2024-02-11", expense: "Expense", amount: 120, category: "Utilities" },
    { date: "2024-02-12", expense: "Expense", amount: 90, category: "Food" },
    { date: "2024-02-13", expense: "Expense", amount: 250, category: "Rent" },
    { date: "2024-02-14", expense: "Income", amount: 150, category: "Gift" },
    { date: "2024-02-15", expense: "Expense", amount: 60, category: "Entertainment" },
    { date: "2024-02-16", expense: "Expense", amount: 80, category: "Transportation" },
    { date: "2024-02-17", expense: "Income", amount: 250, category: "Freelance" },
    { date: "2024-02-18", expense: "Expense", amount: 100, category: "Food" },
    { date: "2024-02-19", expense: "Expense", amount: 200, category: "Rent" },
    { date: "2024-02-20", expense: "Income", amount: 3200, category: "Salary" },
  ];
  
  return (
    <>
      <KTCard>
        <UsersTable column={AccountColumns} Data={Data} Title={'Transaction'} />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const AccountListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <AccountList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

function AccountTable() {
  return (
    <>
     <PageTitle breadcrumbs={[]}>
      Account
     </PageTitle>
     <AccountListWrapper />
    </>
  )
}

export default AccountTable