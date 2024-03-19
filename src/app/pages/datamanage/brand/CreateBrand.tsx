import { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
};

const validationSchema = Yup.object({
  brandName: Yup.string().required('Brand name is required'),
  category: Yup.string().required('Category name is required'),
});

const CreateBrand: FC<Props> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
     category:'',
      brandName: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Brand Added:', values);
      handleClose();
    },
  });

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="createBrandModalTitle">
      <form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="createBrandModalTitle">Add Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <div className="my-3">
            <label htmlFor="brandName" className="form-label">Brand Name</label>
            <input
              type="text"
              className="form-control"
              id="brandName"
              placeholder="Enter brand name"
              {...formik.getFieldProps('brandName')}
            />
            {formik.touched.brandName && formik.errors.brandName && (
              <div className="text-danger">{formik.errors.brandName}</div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>Close</Button>
          <Button type="submit" variant="primary">Save Brand</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CreateBrand;
