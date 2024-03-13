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
});

const CreateBrand: FC<Props> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
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
          <div className="mb-3">
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
