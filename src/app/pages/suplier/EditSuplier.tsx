import  { FC, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Props = {
  show: boolean;
  handleClose: () => void;
  data:any;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('First name is required'),
  code: Yup.string(),
  email: Yup.string().email("invalid Email address").required('Email is required'),
  mobile: Yup.number()    .positive('Age must be a positive number')
  .integer('Mobile must be an integer')
  .min(10, 'Number must be 10 digits')
  .typeError('Mobile must be a valid number')
  .required('Mobile Number is required'),
  mobile2: Yup.string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(10, 'Must be exactly 10 digits')
  .max(10, 'Must be exactly 10 digits'),
  address: Yup.string().required('Address is required'),
  address2: Yup.string(),
  company: Yup.string().required('Company name is required'),
  gst:Yup.string().required('Gst is Manditory'),
  pannumber:Yup.string(),
  location: Yup.string().required('Country is required'),
});

const EditSuplier: FC<Props> = ({ show, handleClose ,data = {} }) => {
    useEffect(() => {
   console.log("insidethemodal component data",data)
    }, [data])
    
  const formik = useFormik({
    initialValues: {
            name: data.name || '',
            code: data.code || '',
            email: data.email || '',
            mobile: data.mobile || '',
            mobile2: data.mobile2 || '',
            address: data.address || '',
            address2: data.address2 || '',
            company: data.company || '',
            gst: data.gst || '',
            pannumber: data.pannumber || '',
            location: data.location || '',
          },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClose(); 
    },
    enableReinitialize: true ,
  });
  

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="kt_modal_1" size='lg'>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: "100%", textAlign: "center" }} id="kt_modal_1_title">Edit Supplier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="">{data.name}</div>
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
             <label className='col-lg-4 col-form-label fw-bold fs-6'>Code</label>
  <div className=''>
    <input
      type='text'
      className='form-control form-control-lg '
      placeholder='Code (Optional)'
      {...formik.getFieldProps('code')}
    />
  </div>
</div>
             </div>

            </div>

       
 


          <div className='row mb-3'>
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
            </div>
          <div className='row mb-3'>
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
            </div>

            <div className="row mb-3">
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


            <div className='col-lg-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company</label>

              <div className=' fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg '
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
            </div>

            <div className="row mb-3">
            <div className='col-lg-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Gst Number</label>

              <div className=' fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg '
                  placeholder='Gst Number'
                  {...formik.getFieldProps('gst')}
                />
                {formik.touched.gst && formik.errors.gst && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.gst}</div>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Pan Number</label>

              <div className=' fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg '
                  placeholder='Pan Number'
                  {...formik.getFieldProps('pannumber')}
                />
              </div>
            </div>
            </div>





            <div className="row mb-3">
  
            <div className='col-lg-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Location</span>
              </label>

              <div className=' fv-row'>
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


    <div className="d-flex justify-content-end w-100 gap-5 pt-5">
    <Button variant="light" onClick={handleClose}>Discard</Button>
          <Button type="submit" variant="dark">Save</Button>
    </div>
       
            </form>
        </Modal.Body>
    
      
    </Modal>
  );
};

export default EditSuplier;
