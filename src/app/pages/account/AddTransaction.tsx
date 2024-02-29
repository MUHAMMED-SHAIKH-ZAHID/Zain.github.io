import React, { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
};

const validationSchema = Yup.object().shape({
  date: Yup.date().required('Date is required'),
  expenseCategory: Yup.string().required('Expense category is required'),
  amount: Yup.number()
    .positive('Amount must be a positive number')
    .required('Amount is required'),
  remarks: Yup.string().required('Remarks are required'),
});

const AddTransactions: FC<Props> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      date: '',
      expenseCategory: '',
      amount: '',
      remarks: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose();
    },
  });

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="modal-title">
      <form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <label htmlFor='date' className='form-label'>Date</label>
            <input
              type='date'
              className='form-control'
              id='date'
              {...formik.getFieldProps('date')}
            />
            {formik.touched.date && formik.errors.date && (
              <div className='text-danger'>{formik.errors.date}</div>
            )}
          </div>

          <div className='mb-3'>
            <label htmlFor='expenseCategory' className='form-label'>Expense Category</label>
            <input
              type='text'
              className='form-control'
              id='expenseCategory'
              {...formik.getFieldProps('expenseCategory')}
            />
            {formik.touched.expenseCategory && formik.errors.expenseCategory && (
              <div className='text-danger'>{formik.errors.expenseCategory}</div>
            )}
          </div>

          <div className='mb-3'>
            <label htmlFor='amount' className='form-label'>Amount</label>
            <input
              type='number'
              className='form-control'
              id='amount'
              {...formik.getFieldProps('amount')}
            />
            {formik.touched.amount && formik.errors.amount && (
              <div className='text-danger'>{formik.errors.amount}</div>
            )}
          </div>

          <div className='mb-3'>
            <label htmlFor='remarks' className='form-label'>Remarks</label>
            <textarea
              className='form-control'
              id='remarks'
              {...formik.getFieldProps('remarks')}
            ></textarea>
            {formik.touched.remarks && formik.errors.remarks && (
              <div className='text-danger'>{formik.errors.remarks}</div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button type="submit" variant="primary">Add Expense</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddTransactions;
