import { useState } from 'react';
import {KTIcon} from '../../../../../../../_metronic/helpers'
import AddSuplier from '../../../../../../pages/suplier/AddSuplier';
import {useListView} from '../../core/ListViewProvider'
import {UsersListFilter} from './UsersListFilter'
import AddProduct from '../../../../../../pages/datamanage/products/AddProduct';
import { useNavigate } from 'react-router-dom';
import AddUser from '../../../../../../pages/users/AddCustomer';
import AddPurchase from '../../../../../../pages/purchase/AddPurchase';
import AddProducts from '../../../../../../pages/datamanage/products/AddProducts';
import AddCustomer from '../../../../../../pages/users/AddCustomer';
import AddAccounts from '../../../../../../pages/account/AddTransaction';
import AddExpenseCategory from '../../../../../../pages/account/AddExpenseCategory';
import { CreateAppModal } from '../../../../../../../_metronic/partials';
import CreateCategory from '../../../../../../pages/datamanage/category/CreateCategory';
import CreateProduct from '../../../../../../pages/datamanage/products/CreateProduct';
import CreateBrand from '../../../../../../pages/datamanage/brand/CreateBrand';

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
    if(Title == 'Suplier'  || Title =='Customer' || Title == 'Product' || Title == 'Category' || Title == 'Brand'   ||  Title == 'Transaction' || Title == 'Expence Category '){
    openModal()
    }else if(Title == 'Sales'){
      navigate('/sales/createsales')
    }else if(Title == 'Purchase'){
      navigate('/purchase/addpurchase')
    }else if(Title == 'Invoice'){
      navigate('/dashboard/addrecentinvoice')
    
    
    }else if(Title == 'Purchase Quote'){
      navigate('/purchase/quotation/create')
    
    }
    else if(Title == 'SalesQuote'){
      navigate('/sales/order/create')
    
    }
    else{

      setItemIdForUpdate(null)
    }
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <UsersListFilter /> */}

      {/* begin::Export */}
      {/* <button type='button' className='btn btn-light-primary me-3'>
        <KTIcon iconName='exit-up' className='fs-2' />
        Export
      </button> */}
      {/* end::Export */}

      {/* begin::Add user */}
      { Title == 'Suplier' && <>
      
      <button type='button' className='btn btn-sm btn-light-primary ' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-5' />
        Add {Title}
      </button>
      <AddSuplier show={showModal} handleClose={closeModal} />

      </>

      }
      { Title == 'Customer' && <>
      
      <button type='button' className='btn btn-primary btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
        <CreateAppModal show={showModal} handleClose={closeModal} />
 

      </>

      }
      { Title == 'Transaction' && <>
      
      <button type='button' className='btn btn-primary btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
      <AddAccounts show={showModal} handleClose={closeModal} />

      </>

      }
      
      { Title == 'Expence Category' && <>
      
      <button type='button' className='btn btn-primary btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
      <AddExpenseCategory show={showModal} handleClose={closeModal} />

      </>

      }
      { Title == 'Product' && <>
      
      <button type='button' className='btn btn-light-primary btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
      <CreateProduct show={showModal} handleClose={closeModal} />

      </>

      }
      { Title == 'Category' && <>
      
      <button type='button' className='btn btn-light-primary btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
      <CreateCategory show={showModal} handleClose={closeModal} />

      </>

      }
      { Title == 'Brand' && <>
      
      <button type='button' className='btn btn-light-primary btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
      <CreateBrand show={showModal} handleClose={closeModal} />

      </>

      }
      { Title == 'Sales' && <>
      
      <button type='button' className='btn btn-light-primary btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
    

      </>

      }      { Title == 'Invoice' && <>
      
      <button type='button' className='btn btn-sm btn-light-primary' onClick={openAddUserModal} >
        <KTIcon iconName='plus' className='fs-6' />
        Add {Title}
      </button>
    

      </>

      }

      { Title == 'Purchase' && <>
      
      <button type='button' className='btn btn-light-primary btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
    

      </>
}
      { Title == 'Purchase Quote' && <>
      
      <button type='button' className='btn btn-light-primary btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
    

      </>

      }
      { Title == 'SalesQuote' && <>
      
      <button type='button' className='btn btn-light-primary btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
        Add {Title}
      </button>
    

      </>

      }
      {/* { Title == 'Download' && <>
      
      <button type='button' className='btn btn-light-dark btn-sm' onClick={openAddUserModal}>
        <KTIcon iconName='plus' className='fs-2' />
       {Title}
      </button>
    

      </>

      } */}
      {/* end::Add user */}
    </div>
  )
}

export {UsersListToolbar}
