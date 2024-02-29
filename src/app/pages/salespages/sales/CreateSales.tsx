import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PageTitle } from '../../../../_metronic/layout/core';


const validationSchema = Yup.object({
  sales: Yup.string().required('Sales is required'),
  salesInvoiceId: Yup.string().required('Sales Invoice ID is required'),
  customer: Yup.string().required('Customer is required'),
  productName: Yup.string().required('Product name is required'),
  qty: Yup.number().positive('Quantity must be positive').required('Quantity is required'),
  salesPrice: Yup.number().positive('Sales price must be positive').required('Sales price is required'),
  discount: Yup.number().min(0, 'Discount cannot be negative').required('Discount is required'),
  tax: Yup.number().min(0, 'Tax cannot be negative').required('Tax is required'),
  total: Yup.number().positive('Total must be positive').required('Total is required'),
  notes: Yup.string(),
});


const CreateSalesform = () => {
    const formik = useFormik({
        initialValues: {
          sales: '',
          salesInvoiceId: '',
          customer: '',
          productName: '',
          qty: '',
          salesPrice: '',
          discount: '',
          tax: '',
          total: '',
          notes: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("on the hanel submitx")
          console.log(values); 
        },
      });
      console.log(formik,"hjklvhkjk")

  return (
    <div>
        
        <form onSubmit={formik.handleSubmit} >
          <div className='card-body p-2'>
          <div className='container'>
  <div className='row'>
    {/* Column 1 */}
    <div className='row mb-6'>
      {/* Sales Field */}
      <div className='col-lg-6'>
        <label style={{paddingBottom:'0'}} className='col-12 col-form-label required fw-bold fs-6'>Sales</label>
        <div className='col-12'>
          <input
            type='text'
            style={{
 // 
                borderColor: 'gray', 
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            className='form-control form-control-lg form-control-solid'
            placeholder='Sales'
            {...formik.getFieldProps('sales')}
          />
          {formik.touched.sales && formik.errors.sales && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>{formik.errors.sales}</div>
            </div>
          )}
        </div>
      </div>

      {/* Product Name Field */}
      <div className='col-lg-6'>
        <label style={{paddingBottom:'0'}} className='col-12 col-form-label required fw-bold fs-6'>Product Name</label>
        <div className='col-12'>
          <input
             type='text'                                              
               style={{
                borderColor: 'gray', 
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            className='form-control form-control-lg form-control-solid'
            placeholder='Product Name'
            {...formik.getFieldProps('productName')}
          />
          {formik.touched.productName && formik.errors.productName && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>{formik.errors.productName}</div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Column 2 */}
    <div className='row mb-6'>

      <div className='col-lg-6'>
        <label style={{paddingBottom:'0'}} className='col-12 col-form-label required fw-bold fs-6'>Sales Invoice Id</label>
        <div className='col-12'>
          <input
             type='text'                                               
              style={{
                borderColor: 'gray', 
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            className='form-control form-control-lg form-control-solid'
            placeholder='Sales Invoice Id'
            {...formik.getFieldProps('salesInvoiceId')}
          />
          {formik.touched.salesInvoiceId && formik.errors.salesInvoiceId && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>{formik.errors.salesInvoiceId}</div>
            </div>
          )}
        </div>
      </div>

      <div className='col-lg-6'>
        <label style={{paddingBottom:'0'}} className='col-12 col-form-label required fw-bold fs-6'>Qty</label>
        <div className='col-12'>
          <input
            type='number'
            style={{
                borderColor: 'gray', 
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            className='form-control form-control-lg form-control-solid'
            placeholder='Qty'
            {...formik.getFieldProps('qty')}
          />
          {formik.touched.qty && formik.errors.qty && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>{formik.errors.qty}</div>
            </div>
          )}
        </div>
      </div>
    </div>

    <div className='row mb-6'>
      <div className="col-lg-6">

        <label style={{paddingBottom:'0'}} className='col-12 col-form-label required fw-bold fs-6'>User Name</label>
        <div className='col-12'>
          <input
            type='number'
            style={{
                borderColor: 'gray', 
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
            className='form-control form-control-lg form-control-solid'
            placeholder='User Name'
            {...formik.getFieldProps('customer')}
          />
          {formik.touched.customer && formik.errors.customer && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>{formik.errors.customer}</div>
            </div>
          )}
        </div>
      </div>
      <div className="col-lg-6">

<label style={{paddingBottom:'0'}} className='col-12 col-form-label required fw-bold fs-6'>Sales Price</label>
<div className='col-12'>
  <input
     type='text'                                         
            style={{
            borderColor: 'gray', 
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
    className='form-control form-control-lg form-control-solid'
    placeholder='Sales Price'
    {...formik.getFieldProps('salesPrice')}
  />
  {formik.touched.salesPrice && formik.errors.salesPrice && (
    <div className='fv-plugins-message-container'>
      <div className='fv-help-block'>{formik.errors.salesPrice}</div>
    </div>
  )}
</div>
</div>
      </div>
   
  {/* Sales Price Field */}
  <div className='row mb-6'>
 
  <div className="col-lg-6">

    <label style={{paddingBottom:'0'}} className='col-12 col-form-label required fw-bold fs-6'>Discount</label>
    <div className='col-12'>
      <input
         type='text'                                                style={{
                borderColor: 'gray', 
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
        className='form-control form-control-lg form-control-solid'
        placeholder='Discount'
        {...formik.getFieldProps('discount')}
      />
      {formik.touched.discount && formik.errors.discount && (
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>{formik.errors.discount}</div>
        </div>
      )}
    </div>
  </div>
  <div className='col-lg-6'>
    
    <label style={{paddingBottom:'0'}} className='col-12 col-form-label required fw-bold fs-6'>Tax</label>
    <div className='col-12'>
      <input
         type='text'                                                style={{
                borderColor: 'gray', 
                borderWidth: '1px',
                borderStyle: 'solid'
              }}
        className='form-control form-control-lg form-control-solid'
        placeholder='Tax'
        {...formik.getFieldProps('tax')}
      />
      {formik.touched.tax && formik.errors.tax && (
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>{formik.errors.tax}</div>
        </div>
      )}
    </div>
    </div>
 </div>

  {/* Tax Field */}
  <div className='row mb-6'>

    <div className='col-lg-6'>

    <label style={{paddingBottom:'0'}} className='col-12 col-form-label required fw-bold fs-6'>Total</label>
    <div className='col-12'>
      <input
        type='text'
        style={{
            borderColor: 'gray', 
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        className='form-control form-control-lg form-control-solid'
        placeholder='Total'
        {...formik.getFieldProps('total')}
      />
      {formik.touched.total && formik.errors.total && (
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>{formik.errors.total}</div>
        </div>
      )}
    </div>
    </div>
    <div className='col-lg-6'>
    <label style={{paddingBottom:'0'}} className='col-12 col-form-label required fw-bold fs-6'>Notes</label>
    <div className='col-12'>
      <textarea
      rows={1}
       style={{
        borderColor: 'gray', 
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
        className='form-control form-control-lg form-control-solid'
        placeholder='Notes'
        {...formik.getFieldProps('notes')}
      />
      {formik.touched.notes && formik.errors.notes && (
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>{formik.errors.notes}</div>
        </div>
      )}
    </div>
  </div>
  </div>

  

  {/* Notes Field */}



  
</div>
   <div className="d-flex justify-content-end pt-3">
    <button type='submit'  className='btn btn-dark'>Save</button>
   </div>
  </div>



  


            </div>
            </form>
      
    </div>
  )
}



const CreateSales = () => {
  return (
   <>
   <PageTitle breadcrumbs={[]}>{'Create Sales'}</PageTitle>
   <CreateSalesform/>
   </>
  )
}

export default CreateSales

