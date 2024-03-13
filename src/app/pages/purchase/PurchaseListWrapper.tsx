
import { KTCard } from '../../../_metronic/helpers'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { PurchaseColumns} from '../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'



const ProductList = () => {
  const {itemIdForUpdate} = useListView()
  const Data = [
    { id: 1, supliername: 'Mander LLC', invoice: 'INVONb65/9026/2021', purchasePrice: 74823, status: 'Transit' },
    { id: 2, supliername: 'Sami LLC', invoice: 'INVAQS15/1710/2020', purchasePrice: 2782, status: 'Hold' },
    { id: 3, supliername: 'Srinivas-Samra', invoice: 'INVdYB14/0789/2022', purchasePrice: 38727, status: 'Transit' },
    { id: 4, supliername: 'Jha Inc', invoice: 'INVOVS51/0547/2023', purchasePrice: 91365, status: 'Partial Transit' },
    { id: 5, supliername: 'Dyal-Shan', invoice: 'INVNQj69/3670/2021', purchasePrice: 70293, status: 'Transit' },
    { id: 6, supliername: 'Ramanathan-Sama', invoice: 'INVuvE93/6554/2021', purchasePrice: 73353, status: 'Transit' },
    { id: 7, supliername: 'Doctor-Kalita', invoice: 'INVVlf33/0947/2023', purchasePrice: 26414, status: 'Partial Transit' },
    { id: 8, supliername: 'Ravi, Badami and Tailor', invoice: 'INVFdJ49/5545/2020', purchasePrice: 33744, status: 'Hold' },
    { id: 9, supliername: 'Bhakta Inc', invoice: 'INVKNV69/6544/2022', purchasePrice: 49021, status: 'Placed' },
    { id: 10, supliername: 'Biswas Group', invoice: 'INVnhX42/6493/2020', purchasePrice: 29091, status: 'Hold' },
    { id: 11, supliername: 'Madan-Ganesh', invoice: 'INVwDw22/5249/2023', purchasePrice: 50577, status: 'Partial Transit' },
    { id: 12, supliername: 'Saran, Sanghvi and Char', invoice: 'INVAdR20/6996/2021', purchasePrice: 68614, status: 'Placed' },
    { id: 13, supliername: 'Singhal Ltd', invoice: 'INVfNK93/3355/2021', purchasePrice: 21459, status: 'Placed' },
    { id: 14, supliername: 'Dalal-Comar', invoice: 'INVTIP70/0959/2021', purchasePrice: 50832, status: 'Transit' },
    { id: 15, supliername: 'Kala Ltd', invoice: 'INVmDZ58/8945/2022', purchasePrice: 84012, status: 'Transit' },
    { id: 16, supliername: 'Sarraf-Handa', invoice: 'INVHiw65/9351/2022', purchasePrice: 74802, status: 'Hold' },
    { id: 17, supliername: 'Rajagopalan and Sons', invoice: 'INVhQD52/1191/2020', purchasePrice: 8572, status: 'Placed' },
    { id: 18, supliername: 'Choudhury PLC', invoice: 'INVlXM87/1728/2022', purchasePrice: 18175, status: 'Partial Transit' },
    { id: 19, supliername: 'Khatri-Garde', invoice: 'INVUQC67/1217/2021', purchasePrice: 95177, status: 'Partial Transit' },
    { id: 20, supliername: 'Hari-Seshadri', invoice: 'INVJRI21/2721/2020', purchasePrice: 89348, status: 'Partial Transit' }
  ];
  
  
  

  
  return (
    <>
      <KTCard>
        <UsersTable column={PurchaseColumns} Data={Data} Title={'Purchase'}/>
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
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