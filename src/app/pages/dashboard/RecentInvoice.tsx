import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { KTCard } from '../../../_metronic/helpers'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'
import { invoiceColumns } from '../../modules/apps/user-management/users-list/table/columns/_columns'


const InvoiceList = () => {
    const {itemIdForUpdate} = useListView()
  
    const invoicesData = [
        { slNo: 1, invoiceNumber: "INV-001", amount: "1000", invoiceDate: "2023-01-01", dueDate: "2023-01-31", status: "Paid" },
        { slNo: 2, invoiceNumber: "INV-002", amount: "1500", invoiceDate: "2023-02-01", dueDate: "2023-02-28", status: "Pending" },
        { slNo: 3, invoiceNumber: "INV-003", amount: "2000", invoiceDate: "2023-03-01", dueDate: "2023-03-31", status: "Paid" },
        { slNo: 4, invoiceNumber: "INV-004", amount: "2500", invoiceDate: "2023-04-01", dueDate: "2023-04-30", status: "Paid" },
        { slNo: 5, invoiceNumber: "INV-005", amount: "3000", invoiceDate: "2023-05-01", dueDate: "2023-05-31", status: "Pending" },
        { slNo: 6, invoiceNumber: "INV-006", amount: "3500", invoiceDate: "2023-06-01", dueDate: "2023-06-30", status: "Paid" },
        { slNo: 7, invoiceNumber: "INV-007", amount: "4000", invoiceDate: "2023-07-01", dueDate: "2023-07-31", status: "Paid" },
        { slNo: 8, invoiceNumber: "INV-008", amount: "4500", invoiceDate: "2023-08-01", dueDate: "2023-08-31", status: "Pending" },
        { slNo: 9, invoiceNumber: "INV-009", amount: "5000", invoiceDate: "2023-09-01", dueDate: "2023-09-30", status: "Paid" },
        { slNo: 10, invoiceNumber: "INV-010", amount: "5500", invoiceDate: "2023-10-01", dueDate: "2023-10-31", status: "Paid" },
        { slNo: 11, invoiceNumber: "INV-011", amount: "6000", invoiceDate: "2023-11-01", dueDate: "2023-11-30", status: "Pending" },
        { slNo: 12, invoiceNumber: "INV-012", amount: "6500", invoiceDate: "2023-12-01", dueDate: "2023-12-31", status: "Paid" },
        { slNo: 13, invoiceNumber: "INV-013", amount: "7000", invoiceDate: "2024-01-01", dueDate: "2024-01-31", status: "Paid" },
        { slNo: 14, invoiceNumber: "INV-014", amount: "7500", invoiceDate: "2024-02-01", dueDate: "2024-02-28", status: "Pending" },
        { slNo: 15, invoiceNumber: "INV-015", amount: "8000", invoiceDate: "2024-03-01", dueDate: "2024-03-31", status: "Paid" }
      ];
      
   
      

    return (
      <>
        <KTCard>
          <UsersTable column={invoiceColumns} Data={invoicesData} Title={''} />
        </KTCard>
        {itemIdForUpdate !== undefined && <UserEditModal />}
      </>
    )
  }

const InvoiceListWrapper = () => (
    <QueryRequestProvider>
      <QueryResponseProvider >
        <ListViewProvider>
          <InvoiceList />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  )

const RecentInvoice = () => {
  return (
    <div>
      <InvoiceListWrapper />
    </div>
  )
}

export default RecentInvoice