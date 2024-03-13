import { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
};

const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required('Category name is required'),
});

const CreateCategory: FC<Props> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      categoryName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose(); // You might want to call an API to save the category before closing the modal
    },
  });

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="CreateCategoryModalTitle">
      <form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="CreateCategoryModalTitle">Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="categoryName" className="form-label">Category Name</label>
            <input
              type="text"
              className={`form-control ${formik.touched.categoryName && formik.errors.categoryName ? 'is-invalid' : ''}`}
              id="categoryName"
              placeholder="Enter category name"
              {...formik.getFieldProps('categoryName')}
            />
            {formik.touched.categoryName && formik.errors.categoryName && (
              <div className="invalid-feedback">{formik.errors.categoryName}</div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>Close</Button>
          <Button type="submit" variant="primary">Save Category</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CreateCategory;
