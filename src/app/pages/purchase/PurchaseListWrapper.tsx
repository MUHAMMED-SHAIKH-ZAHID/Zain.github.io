
import { KTCard } from '../../../_metronic/helpers'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { PurchaseColumns} from '../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const ProductList = () => {
  const Data = [
      {
        purchaseId: "P001",
        supplier: "Supplier A",
        payment: "Full",
        purchaseDate: new Date("2024-01-01"),
        paidAmount: 1000,
        balanceAmount: 0,
        lastDate: null,
        items: [
          { ean: "EAN001", qty: 10, price: 50, discount: 5, tax: 10 },
          { ean: "EAN002", qty: 5, price: 100, discount: 10, tax: 5 }
        ],
        totalDiscount: 5,
        status:'Transit',

        notes: "First purchase"
      },
      {
        purchaseId: "P002",
        supplier: "Supplier B",
        payment: "Advance",
        purchaseDate: new Date("2024-02-15"),
        paidAmount: 500,
        balanceAmount: 500,
        lastDate: new Date("2024-02-25"),
        items: [
          { ean: "EAN003", qty: 20, price: 20, discount: 2, tax: 8 },
          { ean: "EAN004", qty: 15, price: 30, discount: 3, tax: 7 }
        ],
        totalDiscount: 10,
        status:'Transit',

        notes: "Urgent delivery required"
      },
      {
        purchaseId: "P003",
        supplier: "Supplier C",
        payment: "Credit",
        purchaseDate: new Date("2024-03-05"),
        paidAmount: 0,
        balanceAmount: 1500,
        lastDate: new Date("2024-03-20"),
        items: [
          { ean: "EAN005", qty: 10, price: 150, discount: 15, tax: 12 }
        ],
        totalDiscount: 0,
        status:'Hold',

        notes: "Repeat order"
      },
      {
        purchaseId: "P004",
        supplier: "Supplier D",
        payment: "Full",
        purchaseDate: new Date("2024-04-10"),
        paidAmount: 2000,
        balanceAmount: 0,
        lastDate: null,
        items: [
          { ean: "EAN006", qty: 5, price: 400, discount: 20, tax: 10 }
        ],
        totalDiscount: 5,
        status:'Placed',

        notes: "Special discount applied"
      },
      {
        purchaseId: "P005",
        supplier: "Supplier E",
        payment: "Advance",
        purchaseDate: new Date("2024-05-15"),
        paidAmount: 750,
        balanceAmount: 750,
        lastDate: new Date("2024-05-25"),
        items: [
          { ean: "EAN007", qty: 30, price: 25, discount: 5, tax: 9 },
          { ean: "EAN008", qty: 20, price: 35, discount: 7, tax: 11 }
        ],
        totalDiscount: 12,
        status:'Partial',

        notes: "Delivery to branch office"
      },
      {
        purchaseId: "P006",
        supplier: "Supplier F",
        payment: "Credit",
        purchaseDate: new Date("2024-06-01"),
        paidAmount: 0,
        balanceAmount: 1000,
        lastDate: new Date("2024-06-15"),
        items: [
          { ean: "EAN009", qty: 40, price: 10, discount: 1, tax: 5 }
        ],
        totalDiscount: 0,
        status:'Transit',
        notes: "Order on behalf of subsidiary"
      },
      {
        purchaseId: "P007",
        supplier: "Supplier G",
        payment: "Full",
        purchaseDate: new Date("2024-07-20"),
        paidAmount: 3000,
        balanceAmount: 0,
        lastDate: null,
        items: [
          { ean: "EAN010", qty: 25, price: 120, discount: 12, tax: 14 }
        ],
        totalDiscount: 8,
        status:'Transit',

        notes: "High priority order"
      },
      {
        purchaseId: "P008",
        supplier: "Supplier H",
        payment: "Advance",
        purchaseDate: new Date("2024-08-05"),
        paidAmount: 600,
        balanceAmount: 400,
        lastDate: new Date("2024-08-20"),
        items: [
          { ean: "EAN011", qty: 50, price: 20, discount: 2, tax: 8 },
        ],
        totalDiscount: 7,
        status:'Hold',
        notes: "Please ensure quality packaging"
      }
  ];
  
  
  

  
  return (
    <>
      <KTCard>
        <UsersTable column={PurchaseColumns} Data={Data} Title={'Purchase'}/>
      </KTCard>
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