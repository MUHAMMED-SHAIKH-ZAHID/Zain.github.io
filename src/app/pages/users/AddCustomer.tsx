import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PageTitle } from '../../../_metronic/layout/core';



const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  code: Yup.string(), // Optional, no validation required
  address: Yup.string().required('Address is required'),
  address2: Yup.string(), // Optional
  state: Yup.string().required('State is required'),
  gmap: Yup.string(), // Optional
  mobile: Yup.string().required('Mobile is required')
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
  mobile2: Yup.string() // Optional
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
  email: Yup.string().email("Invalid email address").required('Email is required'),
  route: Yup.string(), // Optional
  companyName: Yup.string(), // Optional
  salesPersonAssigned: Yup.string(), // Optional
});


const CustomerForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      code: '', // Optional
      address: '',
      address2: '', // Optional
      state: '',
      gmap: '', // Optional
      mobile: '',
      mobile2: '', // Optional
      email: '',
      route: '', // Optional
      companyName: '', // Optional
      salesPersonAssigned: '', // Optional
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body p-2'>
          <div className='row mb-6'>
  <div className="col-lg-6">
    <label className='col-form-label required fw-bold fs-6'>Full Name</label>
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

  <div className="col-lg-6">
    <label className='col-form-label  fw-bold fs-6'>Code</label>
    <input
      type='text'
      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
      placeholder='Code'
      {...formik.getFieldProps('code')}
    />
    {formik.touched.code && formik.errors.code && (
      <div className='fv-plugins-message-container'>
        <div className='fv-help-block'>{formik.errors.code}</div>
      </div>
    )}
  </div>
</div>
          <div className='row mb-6'>
  <div className="col-lg-6">
    <label className='col-form-label required fw-bold fs-6'>Address</label>
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

  <div className="col-lg-6">
    <label className='col-form-label  fw-bold fs-6'>Address 2</label>
    <input
      type='text'
      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
      placeholder='Address 2'
      {...formik.getFieldProps('address2')}
    />
    {formik.touched.address2 && formik.errors.address2 && (
      <div className='fv-plugins-message-container'>
        <div className='fv-help-block'>{formik.errors.address2}</div>
      </div>
    )}
  </div>
</div>
          <div className='row mb-6'>
  <div className="col-lg-6">
    <label className='col-form-label required fw-bold fs-6'>Mobile</label>
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

  <div className="col-lg-6">
    <label className='col-form-label  fw-bold fs-6'>Mobile 2</label>
    <input
      type='text'
      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
      placeholder='Mobile 2'
      {...formik.getFieldProps('Mobile2')}
    />
    {formik.touched.mobile2 && formik.errors.mobile2 && (
      <div className='fv-plugins-message-container'>
        <div className='fv-help-block'>{formik.errors.mobile2}</div>
      </div>
    )}
  </div>
</div>


  
          <div className='row mb-6'>
            <div className="col-lg-6">

              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Email</label>

           
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
              <div className="col-lg-6">
              <label className='col-form-label required fw-bold fs-6'>Route</label>


      <input
        type='text'
        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
        placeholder='Route'
        {...formik.getFieldProps('route')}
      />
      {formik.touched.route && formik.errors.route && (
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>{formik.errors.route}</div>
        </div>
      )}
    </div>
  </div>
          <div className='row mb-6'>
            <div className="col-lg-6">

              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company Name</label>

           
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='Company Name'
                      {...formik.getFieldProps('companyName')}
                    />
                    {formik.touched.email && formik.errors.companyName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.companyName}</div>
                      </div>
                    )}
                 
            </div>
              <div className="col-lg-6">
              <label className='col-form-label required fw-bold fs-6'>Sales Person</label>


      <input
        type='text'
        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
        placeholder='Sales Person'
        {...formik.getFieldProps('salesPersonAssigned')}
      />
      {formik.touched.salesPersonAssigned && formik.errors.salesPersonAssigned && (
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>{formik.errors.salesPersonAssigned}</div>
        </div>
      )}
    </div>
  </div>
          <div className='row mb-6'>
            <div className="col-lg-6">

              <label className='col-lg-4 col-form-label required fw-bold fs-6'>State</label>

              <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('state')}
                >
                  <option value=''>Select a State</option>
  <option value='AP'>Andhra Pradesh</option>
  <option value='AR'>Arunachal Pradesh</option>
  <option value='AS'>Assam</option>
  <option value='BR'>Bihar</option>
  <option value='CT'>Chhattisgarh</option>
  <option value='GA'>Goa</option>
  <option value='GJ'>Gujarat</option>
  <option value='HR'>Haryana</option>
  <option value='HP'>Himachal Pradesh</option>
  <option value='JK'>Jammu and Kashmir</option>
  <option value='JH'>Jharkhand</option>
  <option value='KA'>Karnataka</option>
  <option value='KL'>Kerala</option>
  <option value='MP'>Madhya Pradesh</option>
  <option value='MH'>Maharashtra</option>
  <option value='MN'>Manipur</option>
  <option value='ML'>Meghalaya</option>
  <option value='MZ'>Mizoram</option>
  <option value='NL'>Nagaland</option>
  <option value='OD'>Odisha</option>
  <option value='PB'>Punjab</option>
  <option value='RJ'>Rajasthan</option>
  <option value='SK'>Sikkim</option>
  <option value='TN'>Tamil Nadu</option>
  <option value='TG'>Telangana</option>
  <option value='TR'>Tripura</option>
  <option value='UP'>Uttar Pradesh</option>
  <option value='UT'>Uttarakhand</option>
  <option value='WB'>West Bengal</option>
                  
                </select>
                    {formik.touched.state && formik.errors.state && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.state}</div>
                      </div>
                    )}
                 
            </div>
              <div className="col-lg-6">
              <label className='col-form-label required fw-bold fs-6'>Google Map</label>


      <input
        type='text'
        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
        placeholder='Google Map Url'
        {...formik.getFieldProps('gmap')}
      />
      {formik.touched.gmap && formik.errors.gmap && (
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>{formik.errors.gmap}</div>
        </div>
      )}
    </div>
  </div>

      
  


        

       


            </div>
            <div className="d-flex justify-content-center">
            <button type="submit" className='btn btn-dark'>Add Customer</button>
            </div>
            </form>
      </>
  );
};






const AddCustomer = () => {
  return (
    <><PageTitle >Add Customer</PageTitle>
    <CustomerForm /> </>
  )
}

export default AddCustomer
