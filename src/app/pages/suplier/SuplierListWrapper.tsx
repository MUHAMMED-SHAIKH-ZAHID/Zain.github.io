
import { FC, useState } from 'react'
import { KTCard } from '../../../_metronic/helpers'
import { UsersListHeader } from '../../modules/apps/user-management/users-list/components/header/UsersListHeader'
import { ListViewProvider, useListView } from '../../modules/apps/user-management/users-list/core/ListViewProvider'
import { QueryRequestProvider } from '../../modules/apps/user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from '../../modules/apps/user-management/users-list/core/QueryResponseProvider'
import { UsersTable } from '../../modules/apps/user-management/users-list/table/UsersTable'
import { suplierColumns } from '../../modules/apps/user-management/users-list/table/columns/_columns'
import { UserEditModal } from '../../modules/apps/user-management/users-list/user-edit-modal/UserEditModal'
import EditSuplier from './EditSuplier'
import { Button, Modal } from 'react-bootstrap'



const SuplierList = () => {

  const Data = [
    {
      "name": "Thomas Gonzalez",
      "code": "FKC9619",
      "email": "gtorres@yahoo.com",
      "mobile": 5435550346,
      "mobile2": "7125608799",
      "address": "2440 Kristin Lights\nJamesside, DC 14287",
      "address2": null,
      "company": "Moore-Lopez",
      "gst": "02AAAA157543Z8A",
      "pannumber": "AAAAA9431A",
      "location": "New Caledonia"
    },
    {
      "name": "Joseph Alexander",
      "code": "XPS4757",
      "email": "frankjohnson@bradley.com",
      "mobile": 6176492194,
      "mobile2": "7523622152",
      "address": "868 Ortega Pike\nMartinburgh, NC 01054",
      "address2": "04349 Wong Lock\nHobbsport, NM 19174",
      "company": "Perkins, Griffin and King",
      "gst": "80AAAA717405Z4A",
      "pannumber": "AAAAA8788A",
      "location": "Iraq"
    },
    {
      "name": "Hannah Sharp",
      "code": "IFZ7407",
      "email": "yutoni@king.org",
      "mobile": 6966490888,
      "mobile2": "1258659461",
      "address": "322 Davis Springs Apt. 797\nMarkburgh, KS 06788",
      "address2": null,
      "company": "Long and Sons",
      "gst": "66AAAA775257Z5A",
      "pannumber": null,
      "location": "Honduras"
    },
    {
      "name": "Jeffrey Mcdonald",
      "code": "YZP3535",
      "email": "jonescesar@hamilton.com",
      "mobile": 9214614489,
      "mobile2": "4922387941",
      "address": "34829 Laura Extension Suite 182\nNorth Dennisport, DE 36833",
      "address2": "01024 Martin Field Suite 137\nWest Chad, OR 58375",
      "company": "Wells LLC",
      "gst": "83AAAA020436Z3A",
      "pannumber": "AAAAA1492A",
      "location": "Iraq"
    },
    {
      "name": "Michael Huerta",
      "code": "DMT1470",
      "email": "hallricky@yahoo.com",
      "mobile": 6136952233,
      "mobile2": "2632683336",
      "address": "451 Jeremy Lakes\nStonefurt, AZ 59247",
      "address2": null,
      "company": "Harrison, Wilson and Howard",
      "gst": "88AAAA233594Z1A",
      "pannumber": null,
      "location": "Antarctica (the territory South of 60 deg S)"
    },
    {
      "name": "Amanda Flores DVM",
      "code": "QNU5826",
      "email": "kellykevin@moon.org",
      "mobile": 8277142788,
      "mobile2": "7149270529",
      "address": "69277 Gonzalez Pass Suite 937\nNorth Michaelmouth, VT 39809",
      "address2": "PSC 0176, Box 0347\nAPO AE 97195",
      "company": "Richardson and Sons",
      "gst": "22AAAA581363Z6A",
      "pannumber": null,
      "location": "South Africa"
    },
    {
      "name": "Johnny Osborne",
      "code": "DWR7725",
      "email": "cliffordperkins@hotmail.com",
      "mobile": 1630807719,
      "mobile2": "9329878395",
      "address": "86761 Fuller Court\nCheyenneton, CO 79501",
      "address2": null,
      "company": "King, Patterson and Hall",
      "gst": "50AAAA490441Z0A",
      "pannumber": null,
      "location": "Cocos (Keeling) Islands"
    },
    {
      "name": "Elizabeth Singleton",
      "code": "BHG4956",
      "email": "megan23@jenkins.com",
      "mobile": 1766952648,
      "mobile2": "5920840563",
      "address": "08274 Thomas MissionSuite 744\nBryanport, GA 69644",
"address2": null,
"company": "Hall, Cunningham and Wright",
"gst": "64AAAA249323Z6A",
"pannumber": null,
"location": "Cameroon"
},
{
"name": "Bradley Dennis",
"code": "KXU5926",
"email": "ronald22@carson-grant.com",
"mobile": 9544111820,
"mobile2": "8681593422",
"address": "7845 Sara Crest\nNew Meredith, PA 49225",
"address2": null,
"company": "Munoz Group",
"gst": "91AAAA326180Z3A",
"pannumber": null,
"location": "Liechtenstein"
},
{
"name": "Rodney Turner",
"code": "NSD0162",
"email": "richard43@jones.com",
"mobile": 9404832836,
"mobile2": "7856102528",
"address": "2025 Brown Falls Suite 175\nPort Fredericktown, DC 85703",
"address2": null,
"company": "Todd, Stein and Le",
"gst": "49AAAA406438Z4A",
"pannumber": "AAAAA8392A",
"location": "Pakistan"
}
]
  
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
const columns = suplierColumns(editClickHandler,deleteClickHandler);


  
  return (
    <>
      <KTCard>
        <UsersTable column={columns} Data={Data} Title={'Suplier'} />
      </KTCard>
      <EditSuplier show={showModal} handleClose={closeModal} data={editdata} />
      <DeleteModal show={showDeleteModal} handleClose={closeDeleteModal} data={deletedata} />
    </>
  )
}

const SuplierListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider >
      <ListViewProvider>
        <SuplierList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {SuplierListWrapper}

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