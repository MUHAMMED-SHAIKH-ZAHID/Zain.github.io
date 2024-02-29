import React, { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
};

const validationSchema = Yup.object().shape({
  expenseCategory: Yup.string().required('Expense category is required'),
});

const AddExpenseCategory: FC<Props> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      expenseCategory: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose();
    },
  });

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="kt_modal_add_expense_category_title">
      <form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="kt_modal_add_expense_category_title">Add Expense Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <label htmlFor="expenseCategory" className="form-label">Expense Category</label>
            <input 
              type="text" 
              className="form-control" 
              id="expenseCategory" 
              placeholder="Enter expense category"
              {...formik.getFieldProps('expenseCategory')}
            />
            {formik.touched.expenseCategory && formik.errors.expenseCategory ? (
              <div className="text-danger">{formik.errors.expenseCategory}</div>
            ) : null}
          </div>

          <div className="d-flex py-4 justify-content-end gap-4">
            <Button variant="light" onClick={handleClose}>Close</Button>
            <Button type="submit" variant="primary">Save</Button>
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
};

export default AddExpenseCategory;
