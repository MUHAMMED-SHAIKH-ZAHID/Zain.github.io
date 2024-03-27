import { KTCard } from '../../../_metronic/helpers'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { salesColumns } from '../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const SuplierList = () => {
  const {itemIdForUpdate} = useListView()
  const Data = [
    { orderID: '001', invoice: 'INV-1000', generatedDate: '2023-01-11', dealername: 'Dealer A',  totalamount: 531, totalinclgst: 2035 },
    { orderID: '002', invoice: 'INV-1001', generatedDate: '2023-01-13', dealername: 'Dealer B',  totalamount: 1748, totalinclgst: 898 },
    { orderID: '003', invoice: 'INV-1002', generatedDate: '2023-03-22', dealername: 'Dealer C',  totalamount: 1151, totalinclgst: 772 },
    { orderID: '004', invoice: 'INV-1003', generatedDate: '2023-01-30', dealername: 'Dealer D',  totalamount: 898, totalinclgst: 1268 },
    { orderID: '005', invoice: 'INV-1004', generatedDate: '2023-02-20', dealername: 'Dealer E',  totalamount: 533, totalinclgst: 769 },
    { orderID: '006', invoice: 'INV-1005', generatedDate: '2023-02-22', dealername: 'Dealer F',  totalamount: 840, totalinclgst: 820 },
    { orderID: '007', invoice: 'INV-1006', generatedDate: '2023-03-11', dealername: 'Dealer G',  totalamount: 1665, totalinclgst: 646 },
    { orderID: '008', invoice: 'INV-1007', generatedDate: '2023-02-17', dealername: 'Dealer H',  totalamount: 1234, totalinclgst: 1199 },
    { orderID: '009', invoice: 'INV-1008', generatedDate: '2023-02-07', dealername: 'Dealer I',  totalamount: 1098, totalinclgst: 2115 },
    { orderID: '010', invoice: 'INV-1009', generatedDate: '2023-01-28', dealername: 'Dealer J',  totalamount: 1979, totalinclgst: 1484 },
    { orderID: '011', invoice: 'INV-1010', generatedDate: '2023-01-28', dealername: 'Dealer K',  totalamount: 1382, totalinclgst: 665 },
    { orderID: '012', invoice: 'INV-1011', generatedDate: '2023-01-01', dealername: 'Dealer L',  totalamount: 1894, totalinclgst: 1437 },
    { orderID: '013', invoice: 'INV-1012', generatedDate: '2023-02-08', dealername: 'Dealer M',  totalamount: 1631, totalinclgst: 1970 },
    { orderID: '014', invoice: 'INV-1013', generatedDate: '2023-01-16', dealername: 'Dealer N',  totalamount: 1390, totalinclgst: 1002 },
    { orderID: '015', invoice: 'INV-1014', generatedDate: '2023-01-08', dealername: 'Dealer O',  totalamount: 1217, totalinclgst: 822 },
    { orderID: '016', invoice: 'INV-1015', generatedDate: '2023-01-05', dealername: 'Dealer P',  totalamount: 1016, totalinclgst: 1285 },
    { orderID: '017', invoice: 'INV-1016', generatedDate: '2023-02-20', dealername: 'Dealer Q',  totalamount: 1168, totalinclgst: 1632 },
    { orderID: '018', invoice: 'INV-1017', generatedDate: '2023-03-01', dealername: 'Dealer R',  totalamount: 1971, totalinclgst: 1589 },
    { orderID: '019', invoice: 'INV-1018', generatedDate: '2023-02-18', dealername: 'Dealer S',  totalamount: 656, totalinclgst: 1720 },
    { orderID: '020', invoice: 'INV-1019', generatedDate: '2023-01-22', dealername: 'Dealer T',  totalamount: 1154, totalinclgst: 1318 }
  ];
  
  
  

  interface RowData {
    orderID:string,
    suppliername:string,
    orderStatus:string,
    actions:string
  }
  
  const editClickHandler = (rowData :RowData) => {
    console.log("Button clicked for row:", rowData);  };

  const columns = salesColumns(editClickHandler);

  return (
    <>
      <KTCard>
        <UsersTable column={columns} Data={Data} Title={'Sales'} />
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
