import { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
};


const validationSchema = Yup.object({
  productName: Yup.string().required('Product name is required'),
  hsnCode: Yup.string()
    .matches(/^[0-9]{6}$/, 'HSN Code must be 6 digits')
    .required('HSN Code is required'),
  category: Yup.string().required('Category is required'),
  brand: Yup.string().required('Brand is required'),
});

const CreateProduct: FC<Props> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      productName: '',
      hsnCode: '',
      category: '', 
      brand: '', 
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Product Added:', values);
      handleClose();
    },
  });

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="createProductModalTitle">
      <form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="createProductModalTitle">Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-5">
            <label htmlFor="productName" className="form-label required">Product Name</label>
            <input
              type="text"
              className="form-control required"
              id="productName"
              placeholder="Enter product name"
              {...formik.getFieldProps('productName')}
            />
            {formik.touched.productName && formik.errors.productName && (
              <div className="text-danger">{formik.errors.productName}</div>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="hsnCode" className="form-label ">HSN Code</label>
            <input
              type="text"
              className="form-control"
              id="hsnCode"
              placeholder="Enter Hsn Code"
              {...formik.getFieldProps('hsnCode')}
            />
            {formik.touched.hsnCode && formik.errors.hsnCode && (
              <div className="text-danger">{formik.errors.hsnCode}</div>
            )}
          </div>
 



<div className='col-lg-12'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Category</span>
              </label>
<div className=' fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('category')}
                >
                  <option value=''>Select a Category</option>
                  <option value="1">Category 1</option>
  <option value="2">Category 2</option>
                  <option value="1">Category 3</option>
  <option value="2">Category 4</option>
                  
                </select>
                {formik.touched.category && formik.errors.category ? (
  <div className='text-danger'>{formik.errors.category}</div>
) : null}
              </div></div>
<div className='col-lg-12'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Brand</span>
              </label>
<div className=' fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('brand')}
                >
                  <option value=''>Select a Brand</option>
                  <option value="1">Brand 1</option>
  <option value="2">Brand 2</option>
                  <option value="1">Brand 3</option>
  <option value="2">Brand 4</option>
                  
                </select>
                {formik.touched.brand && formik.errors.brand ? (
  <div className='text-danger'>{formik.errors.brand}</div> 
) : null}
              </div></div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>Close</Button>
          <Button type="submit" variant="primary">Save Product</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CreateProduct;
