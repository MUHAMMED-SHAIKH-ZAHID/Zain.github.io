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
    .matches(/^[0-9]{6}$/, { message: 'HSN Code must be 6 digits', excludeEmptyString: true }), // Assuming HSN code is 6 digits. Adjust regex as needed.

  gst: Yup.string()
    .required('GST number is required')
//.matches(/^([0]{1}[1-9]{1}|[1-9]{1}[0-9]{1})[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, { message: 'Invalid GST number' }), // This regex matches the typical format of Indian GST numbers. Adjust regex as needed.
,caseQuantity: Yup.number()
.typeError('Case quantity must be a number')
.required('Case quantity is required')
.positive('Case quantity must be positive')
.integer('Case quantity must be an integer'),
quantity: Yup.number()
.typeError('Quantity must be a number')
.required('Quantity is required')
.positive('Quantity must be positive')
.integer('Quantity must be an integer'),
});

const CreateProduct: FC<Props> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      productName: '',
      hsnCode:'',
      gst:'',
      caseQuantity:'',
      quantity:'',
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
          <div className="mb-5">
            <label htmlFor="caseQuantity" className="form-label required">Case Quantity </label>
            <input
              type="text"
              className="form-control"
              id="caseQuantity"
              placeholder="Enter caseQuantity Code"
              {...formik.getFieldProps('caseQuantity')}
            />
            {formik.touched.caseQuantity && formik.errors.caseQuantity && (
              <div className="text-danger">{formik.errors.caseQuantity}</div>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="quantity" className="form-label required">Quantity </label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              placeholder="Enter Quantity"
              {...formik.getFieldProps('gst')}
            />
            {formik.touched.gst && formik.errors.gst && (
              <div className="text-danger">{formik.errors.gst}</div>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="gst" className="form-label required">Gst </label>
            <input
              type="text"
              className="form-control"
              id="gst"
              placeholder="Enter Gst Code"
              {...formik.getFieldProps('gst')}
            />
            {formik.touched.gst && formik.errors.gst && (
              <div className="text-danger">{formik.errors.gst}</div>
            )}
          </div>
          
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
