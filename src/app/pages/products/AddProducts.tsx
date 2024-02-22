import React, { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
};

const suppliers = [
  { id: 'sup1', name: 'Supplier 1' },
  { id: 'sup2', name: 'Supplier 2' },
];

const products = [
  { id: 'prod1', name: 'Product 1' },
  { id: 'prod2', name: 'Product 2' },
];

const validationSchema = Yup.object().shape({
  supplierName: Yup.string().required('Supplier name is required'),
  productName: Yup.string().required('Product name is required'),
  qty: Yup.number()
    .positive('Quantity must be a positive number')
    .integer('Quantity must be an integer')
    .required('Quantity is required'),
});

const AddProducts: FC<Props> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      supplierName: '',
      productName: '',
      qty: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose();

    },
  });

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="kt_modal_add_user_title">
      <form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="kt_modal_add_user_title">Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Supplier Name */}
          {/* <div className='mb-3'>
            <label htmlFor="supplierName" className="form-label">Supplier Name</label>
            <select 
              className="form-select" 
              id="supplierName" 
              {...formik.getFieldProps('supplierName')}
            >
              <option value="">Select Supplier</option>
              {suppliers.map(supplier => (
                <option key={supplier.id} value={supplier.name}>{supplier.name}</option>
              ))}
            </select>
          </div> */}

          {/* Product Name */}
          <div className='mb-3'>
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input 
              type="number" 
              className="form-control" 
              id="productname" 
              {...formik.getFieldProps('qty')}
            />
          </div>

          {/* <div className='mb-3'>
            <label htmlFor="qty" className="form-label">Qty</label>
            <input 
              type="number" 
              className="form-control" 
              id="qty" 
              {...formik.getFieldProps('qty')}
            />
          </div> */}
     
            <div className="d-flex py-4 justify-content-between">
               <div className="">
               {/* <Button variant="dark" onClick={() => }>Print</Button> */}

               </div>
               <div className="gap-4 d-flex">

          <Button variant="light" onClick={handleClose}>Close</Button>
          <Button type="submit" variant="primary">Save</Button>
               </div>
            </div>
        </Modal.Body>
      
      </form>
    </Modal>
  );
};

export default AddProducts;




