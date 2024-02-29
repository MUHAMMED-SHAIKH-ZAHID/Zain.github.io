import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { KTCard } from '../../../_metronic/helpers'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'
import { ExpenceCategoryColumns } from '../../modules/apps/user-management/users-list/table/columns/_columns'


const SuplierList = () => {
    const {itemIdForUpdate} = useListView()
   const Data = [
        {"id": 1, "expensecategory": "Health"},
        {"id": 2, "expensecategory": "Health"},
        {"id": 3, "expensecategory": "Education"},
        {"id": 4, "expensecategory": "Investments"},
        {"id": 5, "expensecategory": "Travel"},
        {"id": 6, "expensecategory": "Utilities"},
        {"id": 7, "expensecategory": "Education"},
        {"id": 8, "expensecategory": "Investments"},
        {"id": 9, "expensecategory": "Investments"},
        {"id": 10, "expensecategory": "Insurance"},
        {"id": 11, "expensecategory": "Shopping"},
        {"id": 12, "expensecategory": "Insurance"},
        {"id": 13, "expensecategory": "Utilities"},
        {"id": 14, "expensecategory": "Utilities"},
        {"id": 15, "expensecategory": "Shopping"},
        {"id": 16, "expensecategory": "Entertainment"},
        {"id": 17, "expensecategory": "Shopping"},
        {"id": 18, "expensecategory": "Insurance"},
        {"id": 19, "expensecategory": "Entertainment"},
        {"id": 20, "expensecategory": "Utilities"}
      ]
      
    
    return (
      <>
        <KTCard>
          <UsersTable column={ExpenceCategoryColumns} Data={Data} Title={'Expence Category'} />
        </KTCard>
        {itemIdForUpdate !== undefined && <UserEditModal />}
      </>
    )
  }

const ExpenceListWrapper = () => (
    <QueryRequestProvider>
      <QueryResponseProvider >
        <ListViewProvider>
          <SuplierList />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  )

const ExpenceCategory = () => {
  return (
    <div>
             <PageTitle breadcrumbs={[]}>Expence List</PageTitle>
      <ExpenceListWrapper />
    </div>
  )
}

export default ExpenceCategory