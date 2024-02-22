import React, { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('First name is required'),
  email: Yup.string().email("invalid Email address").required('Email is required'),
  mobile: Yup.number()    .positive('Age must be a positive number')
  .integer('Mobile must be an integer')
  .min(10, 'Number must be 10 digits')
  .typeError('Mobile must be a valid number')
  .required('Mobile Number is required'),
  //   .max(10, 'Number must not  be more than 10 digits')
  address: Yup.string().required('Address is required'),
  company: Yup.string().required('Company name is required'),
  location: Yup.string().required('Country is required'),
});

const AddCustomer: FC<Props> = ({ show, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email:'',
      mobile:'' ,
      address:'',
      company: '',
      location: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose(); 
    },
  });

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="kt_modal_1">
      <form onSubmit={formik.handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: "100%", textAlign: "center" }} id="kt_modal_1_title">Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body p-2'>
          <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-12 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='First name'
                      {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.name}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>


          <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Email</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-12 fv-row'>
                    <input
                      type='email'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Email'
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.email}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Mobile</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-12 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Mobile'
                      {...formik.getFieldProps('mobile')}
                    />
                    {formik.touched.mobile && formik.errors.mobile && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.mobile}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Address</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-12 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Address'
                      {...formik.getFieldProps('address')}
                    />
                    {formik.touched.address && formik.errors.address && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.address}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>


            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company</label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Company name'
                  {...formik.getFieldProps('company')}
                />
                {formik.touched.company && formik.errors.company && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.company}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Location</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('location')}
                >
                  <option value=''>Select a location</option>
                  <option value='kz'>Kozhikode</option>
                  <option value='kc'>Kochi</option>
                  <option value='tl'>Thalassery</option>
                  <option value='vd'>Vadakara</option>
                  <option value='ml'>malapuram</option>
                  <option value='kt'>kotayam</option>
                  
                </select>
                {formik.touched.location && formik.errors.location && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.location}</div>
                  </div>
                )}
              </div>
            </div>


            </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>Close</Button>
          <Button type="submit" variant="dark">Add</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddCustomer;
