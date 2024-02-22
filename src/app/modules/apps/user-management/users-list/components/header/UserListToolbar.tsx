import { useState } from 'react';
import {KTIcon} from '../../../../../../../_metronic/helpers'
import AddSuplier from '../../../../../../pages/suplier/AddSuplier';
import {useListView} from '../../core/ListViewProvider'
import {UsersListFilter} from './UsersListFilter'
import AddProduct from '../../../../../../pages/products/AddProduct';
import { useNavigate } from 'react-router-dom';
import AddUser from '../../../../../../pages/users/AddCustomer';
import AddPurchase from '../../../../../../pages/purchase/AddPurchase';
import AddProducts from '../../../../../../pages/products/AddProducts';
import AddCustomer from '../../../../../../pages/users/AddCustomer';

interface TitleProps {
  Title: string;
  }

const UsersListToolbar : React.FC<TitleProps> = ({Title}) => {
  const navigate = useNavigate()
  const {setItemIdForUpdate} = useListView()
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const openAddUserModal = () => {
    if(Title == 'Suplier'  || Title == 'Customer' || Title == 'Product'){
    openModal()
    }else if(Title == 'Sales'){
      navigate('/addsales')
    }else if(Title == 'Purchase'){
      navigate('/addpurchase')
    }
    else{

      setItemIdForUpdate(null)
    }
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <UsersListFilter /> */}

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTIcon iconName='exit-up' className='fs-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      { Title == 'Suplier' && <>
      
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
      <AddSuplier show={showModal} handleClose={closeModal} />

      </>

      }
      { Title == 'Customer' && <>
      
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
      <AddCustomer show={showModal} handleClose={closeModal} />

      </>

      }
      { Title == 'Product' && <>
      
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
      <AddProducts show={showModal} handleClose={closeModal} />

      </>

      }
      { Title == 'Sales' && <>
      
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
    

      </>

      }
      { Title == 'Purchase' && <>
      
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
    

      </>

      }
      {/* end::Add user */}
    </div>
  )
}

export {UsersListToolbar}
