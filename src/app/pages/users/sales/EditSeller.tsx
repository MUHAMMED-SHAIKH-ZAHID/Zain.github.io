import React, { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
  data: any;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('First name is required'),
  email: Yup.string().email("invalid Email address").required('Email is required'),
  mobile: Yup.number()
    .positive('Age must be a positive number')
    .integer('Mobile must be an integer')
    .typeError('Mobile must be a valid number')
    .required('Mobile Number is required'),
  mobile2: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
  address: Yup.string().required('Address is required'),
  address2: Yup.string(),
  role: Yup.string().required('Role is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const EditSeller: FC<Props> = ({ show, handleClose,data={} }) => {
  const formik = useFormik({
    initialValues: {
      name:data.name || '',
      code:data.code ||'',
      email:data.email ||'',
      mobile:data.mobile ||'' ,
      mobile2:data.mobile2 ||'',
      address:data.address ||'',
      address2:data.address2 ||'',
     role:data.role ||'',
     password:data.password ||'',
     confirmPassword:data.confirmPassword ||'',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose(); 
    },
    enableReinitialize: true,
  });
  

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="kt_modal_1" size='lg'>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: "100%", textAlign: "center" }} id="kt_modal_1_title">Add Sales Excecutive</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body p-2'>
          <div className='row mb-3'>
             <div className="col-lg-6">

              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>
              <div className=''>
                <div className='row'>
                  <div className='col-lg-12 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-warning mb-3 mb-lg-0'
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
 
            <div className="col-lg-6">

              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Email</label>

              <div className=''>
                <div className='row'>
                  <div className='col-lg-12 fv-row'>
                    <input
                      type='email'
                      className='form-control form-control-lg  mb-3 mb-lg-0'
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
             </div>

            </div>
          <div className='row mb-3'>
            <div className="col-lg-6">
            <label className='col-lg-4 col-form-label required fw-bold fs-6'>Mobile</label>

<div className=''>
  <div className='row'>
    <div className='col-lg-12 fv-row'>
      <input
        type='text'
        className='form-control form-control-lg  mb-3 mb-lg-0'
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
            <div className='col-lg-6'>
  <label className='col-lg-4 col-form-label fw-bold fs-6'>Mobile 2</label>
  <div className=''>
    <input
      type='text'
      className='form-control form-control-lg '
      placeholder='Mobile 2 (Optional)'
      {...formik.getFieldProps('mobile2')}
    />
  </div>
</div>
            </div>
          <div className='row mb-3'>
          
          <div className='col-lg-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Address</label>

              <div className=''>
                <div className='row'>
                  <div className='col-lg-12 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg  mb-3 mb-lg-0'
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

            <div className='col-lg-6'>
  <label className='col-lg-4 col-form-label fw-bold fs-6'>Address 2</label>
  <div className=''>
    <input
      type='text'
      className='form-control form-control-lg '
      placeholder='Address 2 (Optional)'
      {...formik.getFieldProps('address2')}
    />
  </div>
</div>
            </div>
            <div className="row mb-3">
            <div className='col-lg-6'>
             
            <label className='col-lg-4 col-form-label fw-bold fs-6'>Role</label>
            <input
  name="role"
  type="text"
  className='form-control'
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.role}
  placeholder="Role"
/>
{formik.touched.role && formik.errors.role ? <div className='text-danger'>{formik.errors.role}</div> : null}
              </div>
              <div className='col-lg-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Password </label>
<input
  name="password"
  className='form-control'
  type="password"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.password}
  placeholder="Password"
/>
{formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}
              </div>

            </div>

            <div className="row mb-3">
            <div className='col-lg-6'>
            <label className='col-lg-6 col-form-label fw-bold fs-6'>Confirm Password</label>

<input
  name="confirmPassword"
  type="password"
  className='form-control'
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.confirmPassword}
  placeholder="Confirm Password"
/>
{formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='text-danger'>{formik.errors.confirmPassword}</div> : null}
              </div>
            </div>

{/* Password Input Field */}

{/* Confirm Password Input Field */}


    <div className="d-flex justify-content-end w-100 gap-5 pt-5">
    <Button variant="light" onClick={handleClose}>Close</Button>
          <Button type="submit" variant="dark">Add</Button>
    </div>
       
            </form>
        </Modal.Body>
    
      
    </Modal>
  );
};

export default EditSeller;

