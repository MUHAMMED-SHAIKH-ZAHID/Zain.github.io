
import { FC, useState } from 'react'
import { KTCard } from '../../../../_metronic/helpers'
import { PageTitle } from '../../../../_metronic/layout/core'
import { ListViewProvider, useListView } from '../../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../../modules/apps/user-management/users-list/table/UsersTable'
import {  sellerColumns } from '../../../modules/apps/user-management/users-list/table/columns/_columns'
import Editcustomer from '../customer/Editcustomer'
import { Button, Modal } from 'react-bootstrap'
import EditSeller from './EditSeller'



const SuplierList = () => {

  const Data = Array.from({ length: 20 }, (_, index) => ({
    name: `Seller Name ${index + 1}`,
    email: `seller${index + 1}@example.com`,
    mobile: `123456789${index % 10}`, // Simple pattern for demonstration
    role: `Role ${index % 4 === 0 ? 'Admin' : 'User'}`, // Alternates between Admin and User
  }));
  

interface RowData {
  orderID:string,
  suppliername:string,
  orderStatus:string,
  actions:string
  id?: string
  name?: string
  avatar?: string
  email?: string
  company?:string
  location?:string
  mobile?:string

}
const [showModal, setShowModal] = useState(false);
const openModal = () => setShowModal(true);
const closeModal = () => setShowModal(false);
const [showDeleteModal, setDeleteShowModal] = useState(false);
const openDeleteModal = () => setDeleteShowModal(true);
const closeDeleteModal = () => setDeleteShowModal(false);
const [editdata,setEditData]=useState<any>()
const [deletedata,setDeleteData]=useState<any>()

const editClickHandler = (rowData :RowData) => {
  console.log("Button clicked for row:", rowData);
  setEditData(rowData)
  openModal();
 
  };

  const deleteClickHandler = (rowData :RowData) =>{
    console.log("you can delete",rowData)
    setDeleteData(rowData)
    openDeleteModal();
  }
const columns = sellerColumns(editClickHandler,deleteClickHandler);
  return (
    <>
      <KTCard>
        <UsersTable column={columns} Data={Data} Title={'Seller'} />
      </KTCard>
      <EditSeller show={showModal} handleClose={closeModal} data={editdata} />
      <DeleteModal show={showDeleteModal} handleClose={closeDeleteModal} data={deletedata} />  
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




const Sellers = () => {
  return (
    <div>
        <PageTitle>Sales Excecutive</PageTitle><CustomerListWrapper /></div>
  )
}

export default Sellers


type Props ={
  show: boolean;
  handleClose: () => void;
  data: any;
} 
const DeleteModal: FC<Props> = ({show,handleClose,data = {}}) => {
  const handleConfirm = (id:any)=>{
    console.log(id)
  }
  return(
    <Modal show={show} onHide={handleClose} aria-labelledby="kt_modal_1" size='md' className="futuristic-modal">
    <Modal.Header closeButton>
      <Modal.Title style={{ width: "100%", textAlign: "center" }} id="kt_modal_1_title">Confirm Delete</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Are you sure you want to delete  {data.name}? This action cannot be undone 
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Cancel</Button>
      <Button variant="danger" onClick={()=>handleConfirm(data.name)}>Delete</Button>
    </Modal.Footer>
  </Modal>
  )
}