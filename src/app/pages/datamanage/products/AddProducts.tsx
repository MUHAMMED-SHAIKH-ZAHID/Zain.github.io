import { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
};



const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  sku: Yup.string().required('SKU is required'),
  salePrice: Yup.number().positive('Sale Price must be a positive number').required('Sale Price is required'),
  purchasePrice: Yup.number().positive('Purchase Price must be a positive number').required('Purchase Price is required'),
  tax: Yup.number().min(0, 'Tax must be at least 0').required('Tax is required'),
  category: Yup.string().required('Category is required'),
  supplier: Yup.string().required('Supplier is required'),
  brand: Yup.string().required('Brand is required'),
  unitsPerPack: Yup.number().positive('Units per Pack must be a positive number').integer('Units per Pack must be an integer').required('Units per Pack is required'),
});

const AddProducts: FC<Props> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      sku: '',
      salePrice: '',
      purchasePrice: '',
      tax: '',
      category: '',
      supplier: '',
      brand: '',
     
    },
    validationSchema: validationSchema,
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
        <div className="card-body">
          <div className="row">
            {/* Each input field structure */}
            {/* Name Field */}
            <div className="col-lg-6 mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder='Name'
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>

            {/* SKU Field */}
            <div className="col-lg-6 mb-3">
              <label className="form-label">SKU</label>
              <input
                type="text"
                placeholder='SKU'
                className="form-control"
                {...formik.getFieldProps('sku')}
              />
              {formik.touched.sku && formik.errors.sku ? (
                <div className="text-danger">{formik.errors.sku}</div>
              ) : null}
            </div>
            <div className="col-lg-6 mb-3">
            <label className="form-label">Sale Price</label>
            <input
              type="number"
              placeholder='Sale'
              className="form-control"
              {...formik.getFieldProps('salePrice')}
            />
            {formik.touched.salePrice && formik.errors.salePrice ? (
              <div className="text-danger">{formik.errors.salePrice}</div>
            ) : null}
          </div>

          {/* Purchase Price Field */}
          <div className="col-lg-6 mb-3">
            <label className="form-label">Purchase Price</label>
            <input
              type="number"
              className="form-control"
              placeholder='Purchase Price'
              {...formik.getFieldProps('purchasePrice')}
            />
            {formik.touched.purchasePrice && formik.errors.purchasePrice ? (
              <div className="text-danger">{formik.errors.purchasePrice}</div>
            ) : null}
          </div>

          {/* Tax Field */}
          <div className="col-lg-6 mb-3">
            <label className="form-label">Tax (%)</label>
            <input
              type="number"
              className="form-control"
              placeholder='Add Tax'
              {...formik.getFieldProps('tax')}
            />
            {formik.touched.tax && formik.errors.tax ? (
              <div className="text-danger">{formik.errors.tax}</div>
            ) : null}
          </div>

          {/* Category Field */}
          <div className="col-lg-6 mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              placeholder='Add Category'
              {...formik.getFieldProps('category')}
            />
            {formik.touched.category && formik.errors.category ? (
              <div className="text-danger">{formik.errors.category}</div>
            ) : null}
          </div>

          {/* Supplier Field */}
          <div className="col-lg-6 mb-3">
            <label className="form-label">Supplier</label>
            <input
              type="text"
              placeholder='Suplier'
              className="form-control"
              {...formik.getFieldProps('supplier')}
            />
            {formik.touched.supplier && formik.errors.supplier ? (
              <div className="text-danger">{formik.errors.supplier}</div>
            ) : null}
          </div>

          {/* Brand Field */}
          <div className="col-lg-6 mb-3">
            <label className="form-label">Brand</label>
            <input
              type="text"
              placeholder='Brand'
              className="form-control"
              {...formik.getFieldProps('brand')}
            />
            {formik.touched.brand && formik.errors.brand ? (
              <div className="text-danger">{formik.errors.brand}</div>
            ) : null}
          </div>

          {/* Units Per Pack Field */}
          <div className="col-lg-6 mb-3">
            <label className="form-label">Units Per Pack</label>
            <input
              type="number"
              placeholder=' Units Per Pack'
              className="form-control"
              {...formik.getFieldProps('unitsPerPack')}
            />
            {formik.touched.unitsPerPack && formik.errors.unitsPerPack ? (
              <div className="text-danger">{formik.errors.unitsPerPack}</div>
            ) : null}
          </div>
            {/* Add other fields similarly */}
          </div>
        </div>
               <div className="gap-4 d-flex justify-content-end">

          <Button variant="light" onClick={handleClose}>Close</Button>
          <Button type="submit" variant="primary">Save</Button>
               </div>
        
        </Modal.Body>
      
      </form>
    </Modal>
  );
};

export default AddProducts;




