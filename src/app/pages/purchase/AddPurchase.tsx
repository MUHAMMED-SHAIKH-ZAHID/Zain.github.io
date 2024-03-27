import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PageTitle } from '../../../_metronic/layout/core';
import { Button } from 'react-bootstrap';
import CreateProduct from '../datamanage/products/CreateProduct';
import { KTIcon } from '../../../_metronic/helpers';
import { useFormik } from 'formik';
import * as Yup from 'yup';




const purchaseFormSchema = Yup.object().shape({
  purchaseId: Yup.string().required('Purchase ID is required'), // Validation for purchase ID
  supplier: Yup.string().required('Supplier is required'),
  purchaseDate: Yup.date().nullable().required('Purchase date is required'),
  payment: Yup.number().required('Payment option is required'),
  paidAmount: Yup.number().when('payment', (paymentValue: any, schema) => {
    const payment: string = paymentValue; // Type assertion
    return (payment === 'Advance' || payment === 'Credit') 
      ? schema.required('Paid amount is required').min(0) 
      : schema.notRequired();
  }),
  balanceAmount: Yup.number().when('payment', (paymentValue: any, schema) => {
    const payment: string = paymentValue; // Type assertion
    return (payment === 'Advance' || payment === 'Credit') 
      ? schema.required('Balance amount is required').min(0) 
      : schema.notRequired();
  }),
  lastDate: Yup.date().nullable().when('payment', (paymentValue: any, schema) => {
    const payment: string = paymentValue; // Type assertion
    return (payment === 'Advance' || payment === 'Credit') 
      ? schema.required('Last date is required') 
      : schema.notRequired();
  }),
  items: Yup.array().of(
    Yup.object().shape({
      ean: Yup.string().required('EAN is required'),
      qty: Yup.number().min(1).required('Quantity is required'),
      price: Yup.number().min(1).required('Price is required'),
      discount: Yup.number().min(0).max(100),
      tax: Yup.number().min(0).max(100),
    })
  ),
  totalDiscount: Yup.number()
  .min(0, 'Total discount must be positive')
  .max(Yup.ref('salePrice'), 'Total discount cannot exceed the sale price'),
  status: Yup.string().required('Status is required'),
  modeOfTransaction: Yup.string()
  .required('Mode of transaction is required'),
  notes: Yup.string(), // Notes field validation
})
  
 




interface Item {
  id: number;
  name: string;
  qty: number;
  price: number;
  discount: number;
  tax: number;
  ean: string;
}
interface FormValues {
  items: Item[];
}

const AddPurchaseWrap: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const PaymentMethod = [
    { id: 'payment1', name: 'Cash' },
    { id: 'payment2', name: 'Card' },
    { id: 'payment3', name: 'Online Transaction' },
  ];

  const formik = useFormik({
    initialValues: {
      purchaseId: '', // Added field for purchase ID
      supplier: '', // Renamed from supplierId to supplier for clarity
      payment: '',
      purchaseDate: Date.now(),
      paidAmount: '',
      balanceAmount: '',
      lastDate: null,
      items: [{ ean: '', qty: 1, price: 0, discount: 0, tax: 0 }],
      totalDiscount:'',
      status:'',
      modeOfTransaction:'',
      notes: '',
    },
    validationSchema:purchaseFormSchema,
    onSubmit: (values) => {
      console.log(values);
      // Further processing or API call
    },
  });

  const calculateItemTotal = (index) => {
    const item = formik.values.items[index];
    const priceAfterDiscount = item.price - (item.price * item.discount) / 100;
    const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * item.tax) / 100;
    return item.qty * priceAfterTax;
  };

  const calculateTotal = () => {
    return formik.values.items.reduce((acc, item, index) => acc + calculateItemTotal(index), 0);
  };

  const addItem = () => {
    formik.setFieldValue('items', [...formik.values.items, { ean: '', qty: 1, price: 0, discount: 0, tax: 0 }]);
  };

  const removeItem = (index) => {
    const itemsCopy = [...formik.values.items];
    itemsCopy.splice(index, 1);
    formik.setFieldValue('items', itemsCopy);
  };

  const calculateTotalPrice = () => {
    return formik.values.items.reduce((acc, item) => {
      const itemTotal = item.qty * item.price; // Calculate total for each item
      return acc + itemTotal;
    }, 0); // Start accumulating from 0
  };
  
  const calculateGrandTotal = (totalPrice:any) => {
    const discount = totalPrice * (formik.values.totalDiscount / 100); // Convert percentage to a decimal and apply
    return totalPrice - discount; // Subtract discount from total price
  };
  return (
        <form onSubmit={formik.handleSubmit}>
    <div className=" card p-5">
        <div className='d-flex flex-column align-items-start flex-xxl-row '>
      <div className="d-flex align-items-center flex-equal fw-row me-4 order-2" title="Specify invoice date">
        <div className="fs-6 fw-bold text-gray-700 text-nowrap me-2">Date:</div>
        <DatePicker
          selected={formik.values.purchaseDate}
          onChange={(date) => formik.setFieldValue('purchaseDate', date)}
          className="form-control"
          dateFormat="d MMMM  yyyy"
        />
      </div>

      {/* Invoice Number */}
      <div className="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4" title="Enter invoice number">
        <span className="fs-2x fw-bold text-gray-800 me-2">Purchase Form</span>
        {/* <input 
          type="text" 
          className="form-control form-control-flush fw-bold text-muted fs-3 w-125px" 
          value={`#${invoiceNumber}`} 
          onChange={(e) => setInvoiceNumber(e.target.value)} 
        /> */}
      </div>

      {/* Due Date */}
      <div className="d-flex align-items-center justify-content-end flex-equal order-3 fw-row" title="Specify invoice due date">
        <div className="fs-6 fw-bold text-gray-700 text-nowrap me-2">Purchase Id:</div>
        <input
          id="purchaseId"
          type="text"
          className="form-control"
          {...formik.getFieldProps('purchaseId')}
        />
        {formik.touched.purchaseId && formik.errors.purchaseId && (
  <div className="text-danger">{formik.errors.purchaseId}</div>
)}

      </div>
      </div>
      <div className="container py-10">
      <div className="row col-lg-12 mb-3">

        <div className="col-lg-4">
          <label htmlFor="user" className="form-label">Suplier</label>
          <select
          id="supplier"
          className="form-control"
          {...formik.getFieldProps('supplier')}
        >
          <option value="">Select a supplier</option>
          {/* Populate with actual supplier IDs and names */}
          <option value="supplier1">Supplier 1</option>
          <option value="supplier2">Supplier 2</option>
        </select>
        {formik.touched.supplier && formik.errors.supplier && (
  <div className="text-danger">{formik.errors.supplier}</div>
)}
        </div>
      
       

        </div>
</div>

        
<div className="container mt-5">
      <table className="table ">
        <thead>
          <tr className='border-bottom-2'>
            <th scope='col'>Ean Code</th>
            <th scope="col">New</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Tax</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>


{formik.values.items.map((item, index) => (
            <tr key={index} className='py-10'>
              <td> <input
      type="text"
      className="form-control"
      placeholder="EAN Code"
      {...formik.getFieldProps(`items[${index}].ean`)}
    />
    {formik.touched.items?.[index]?.ean && formik.errors.items?.[index]?.ean && (
      <div className="text-danger">{formik.errors.items[index].ean}</div>
    )}</td>
<td>      <Button className='btn btn-sm justify-content-center d-flex align-items-center' variant="light" onClick={()=>openModal()}>
        
      <KTIcon iconName='plus-square' className='fs-5  text-dark' />
      </Button>

</td>

<td> <input
      type="number"
      className="form-control"
      placeholder="Quantity"
      {...formik.getFieldProps(`items[${index}].qty`)}
    />
    {formik.touched.items?.[index]?.qty && formik.errors.items?.[index]?.qty && (
      <div className="text-danger">{formik.errors.items[index].qty}</div>
    )}</td>

    <td> <input
      type="number"
      className="form-control"
      placeholder="Price"
      {...formik.getFieldProps(`items[${index}].price`)}
    />
    {formik.touched.items?.[index]?.price && formik.errors.items?.[index]?.price && (
      <div className="text-danger">{formik.errors.items[index].price}</div>
    )}</td>

    <td>
    <input
      type="number"
      className="form-control"
      placeholder="Discount (%)"
      {...formik.getFieldProps(`items[${index}].discount`)}
    />
    {formik.touched.items?.[index]?.discount && formik.errors.items?.[index]?.discount && (
      <div className="text-danger">{formik.errors.items[index].discount}</div>
    )}
   
    </td>
<td>
<input
      type="number"
      className="form-control"
      placeholder="Tax (%)"
      {...formik.getFieldProps(`items[${index}].tax`)}
    />
    {formik.touched.items?.[index]?.tax && formik.errors.items?.[index]?.tax && (
      <div className="text-danger">{formik.errors.items[index].tax}</div>
    )}
</td>

                <td>
                {(() => {
        const priceAfterDiscount = item.price - (item.price * item.discount / 100);
        const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * item.tax / 100);
        const total = item.qty * priceAfterTax;
        return total.toFixed(2);
      })()}
</td>

<td><button type="button" className="btn btn-sm btn-danger"onClick={() => formik.setFieldValue('items', formik.values.items.filter((_, i) => i !== index))}>  <span className='fs-8'>delete</span></button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex col-lg-12 pt-6">
      <div className="col-lg-4">

      <button type="button" className="btn btn-primary" onClick={addItem}><KTIcon iconName='add-item' className='fs-3 ' /> <span className='fs-7'>Add Row</span></button> 
      </div>
      </div>
      <div>
      <div className="row col-12 my-5 py-5">

      <div className="mb-3 col-lg-4">
  <div className="col lg-4">
    <label htmlFor="price" className='form-label'>Sale Price</label>
    <input type="text" disabled value={calculateTotalPrice().toFixed(2)} className='form-control'/>
  </div>
  </div>
  <div className='col-lg-4'>
  <label htmlFor="totalDiscount" className="form-label">Discount (%)</label>
  <input
    id="totalDiscount"
    type="number"
    className="form-control"
    {...formik.getFieldProps('totalDiscount')}
  />
  {formik.touched.totalDiscount && formik.errors.totalDiscount && (
    <div className="text-danger">{formik.errors.totalDiscount}</div>
  )}
</div>
  <div className="col lg-4">
    <label htmlFor="price" className='form-label'>Grand Total</label>
    <input type="text" disabled value={calculateGrandTotal(calculateTotalPrice()).toFixed(2)} className='form-control'/>
  </div>
</div>
</div>

<div className="row col-12 my-5 py-5">


      <div className="mb-3 col-lg-4">
  <label className="form-label">Payment Option</label>
  <div className="d-flex gap-4">
    {['Full', 'Advance', 'Credit'].map(option => (
      <div className="form-check" key={option}>
        <input
          className="form-check-input"
          type="radio"
          name="payment"
          id={`payment${option}`}
          value={option}
          checked={formik.values.payment === option}
          onChange={() => formik.setFieldValue('payment', option)}
        />
        <label className="form-check-label" htmlFor={`payment${option}`}>
          {option}
        </label>
        {formik.touched.payment && formik.errors.payment && (
  <div className="text-danger">{formik.errors.payment}</div>
)}
      </div>
    ))}
  </div>
</div>
{(formik.values.payment === 'Advance' || formik.values.payment === 'Credit') && (
  <>
    <div className="mb-3 col-lg-4">
      <label htmlFor="paidAmount" className="form-label">Paid Amount</label>
      <input
        type="number"
        className="form-control"
        id="paidAmount"
        {...formik.getFieldProps('paidAmount')}
      />
      {formik.touched.paidAmount && formik.errors.paidAmount && (
        <div className="text-danger">{formik.errors.paidAmount}</div>
      )}
    </div>

    <div className="mb-3 col-lg-4">
      <label htmlFor="balanceAmount" className="form-label">Balance Amount</label>
      <input
        type="number"
        className="form-control"
        id="balanceAmount"
        {...formik.getFieldProps('balanceAmount')}
      />
      {formik.touched.balanceAmount && formik.errors.balanceAmount && (
        <div className="text-danger">{formik.errors.balanceAmount}</div>
      )}
    </div>

    <div className="mb-3 col-lg-4">
      <label htmlFor="lastDate" className="form-label">Last Date</label>
      <DatePicker
        selected={formik.values.lastDate}
        onChange={(date) => formik.setFieldValue('lastDate', date)}
        className="form-control"
      />
      {formik.touched.lastDate && formik.errors.lastDate && (
        <div className="text-danger">{formik.errors.lastDate}</div>
      )}
    </div>
  </>
)}
<div className="mb-3 col-lg-4">
  <label htmlFor="modeOfTransaction" className="form-label">Mode Of Transaction</label>
  <select
    id="modeOfTransaction"
    className="form-control"
    {...formik.getFieldProps('modeOfTransaction')}
  >
    <option value="">Select Mode of Transaction</option>
    {PaymentMethod.map(method => (
      <option key={method.id} value={method.name}>{method.name}</option>
    ))}
  </select>
  {formik.touched.modeOfTransaction && formik.errors.modeOfTransaction && (
    <div className="text-danger">{formik.errors.modeOfTransaction}</div>
  )}
</div>
{/* Status Select Box */}
<div className="mb-3 col-lg-4">
  <label htmlFor="status" className="form-label">Order Status</label>
  <select
    id="status"
    className="form-control"
    {...formik.getFieldProps('status')}
  >
    <option value="">Order Status</option>
    <option value="Hold">Hold</option>
    <option value="Placed">Placed</option>
    <option value="Transit">Transit</option>
    <option value="Partial">Partial</option>
  </select>
  {formik.touched.status && formik.errors.status && (
    <div className="text-danger">{formik.errors.status}</div>
  )}
</div>
</div>

<div className="mb-3">
  <label htmlFor="notes" className="form-label">Notes</label>
  <textarea
    id="notes"
    placeholder='Please Add Notes'
    className="form-control"
    rows={3}
    {...formik.getFieldProps('notes')}
  ></textarea>
</div>


      <div className="container my-4">



  {/* Send Invoice Button */}
  <div className="d-flex justify-content-center mt-5">
    <button className="btn btn-dark" type="submit">Create Sale</button>
  </div>
</div>
<CreateProduct show={showModal} handleClose={closeModal} />


    </div>
    </div>
    </form>
  );
};









const AddPurchase = () => {
  return (
 <>
       <PageTitle breadcrumbs={[]}>{'Add Purchase'}</PageTitle>

 <AddPurchaseWrap /> </>
  )
}

export default AddPurchase
