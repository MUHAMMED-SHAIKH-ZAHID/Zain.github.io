import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PageTitle } from '../../../_metronic/layout/core';

interface Item {
    id: number;
    name: string;
    qty: number;
    price: number;
  }

const AddInvoicewrap : React.FC = () => {
    const [items, setItems] = useState<Item[]>([
      { id: Date.now(), name: '', qty: 1, price: 0 },
    ]);
  
    const handleInputChange = (index: number, field: keyof Item, value: string) => {
      const newItems = [...items];
      const item = newItems[index];
      if (field === 'qty' || field === 'price') {
        item[field] = parseFloat(value);
      } else {
        item[field] = value;
      }
      setItems(newItems);
    };
  
    const handleRemoveItem = (index: number) => {
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);
    };
  
    const handleAddItem = () => {
      setItems([...items, { id: Date.now(), name: '', qty: 1, price: 0 }]);
    };
  
  const [invoiceDate, setInvoiceDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(new Date());
  const [invoiceNumber, setInvoiceNumber] = useState<string>('2021001');

  

  return (
    <div className=" card p-5">
        <div className='d-flex flex-column align-items-start flex-xxl-row '>
      {/* Invoice Date */}
      <div className="d-flex align-items-center flex-equal fw-row me-4 order-2" title="Specify invoice date">
        <div className="fs-6 fw-bold text-gray-700 text-nowrap me-2">Date:</div>
        <DatePicker 
          selected={invoiceDate} 
          onChange={(date: Date) => setInvoiceDate(date)}
          className="form-control form-control-transparent fw-bold pe-5" 
        />
      </div>

      {/* Invoice Number */}
      <div className="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4" title="Enter invoice number">
        <span className="fs-2x fw-bold text-gray-800 me-2">Invoice </span>
        <input 
          type="text" 
          className="form-control form-control-flush fw-bold text-muted fs-3 w-125px" 
          value={`#${invoiceNumber}`} 
          onChange={(e) => setInvoiceNumber(e.target.value)} 
        />
      </div>

      {/* Due Date */}
      <div className="d-flex align-items-center justify-content-end flex-equal order-3 fw-row" title="Specify invoice due date">
        <div className="fs-6 fw-bold text-gray-700 text-nowrap me-2">Due Date:</div>
        <DatePicker 
          selected={dueDate} 
          onChange={(date: Date) => setDueDate(date)}
          className="form-control form-control-transparent fw-bold pe-5" 
        />
      </div>
      </div>
      <div className="container py-10">
  <div className="row mb-3">
    <div className="col-lg-4">
      <label htmlFor="customerName" className="form-label">Customer Name</label>
      <input type="text" className="form-control" id="customerName" />
    </div>
    <div className="col-lg-4">
      <label htmlFor="supplier" className="form-label">Supplier</label>
      <input type="text" className="form-control" id="supplier" />
    </div>
    <div className="col-lg-4">
      <label htmlFor="categories" className="form-label">Categories</label>
      <select className="form-select" id="categories">
        <option selected>Choose...</option>
        <option value="1">Category 1</option>
        <option value="2">Category 2</option>
      </select>
    </div>
  </div>

  <div className="row mb-3">
    <div className="col-lg-4">
      <label htmlFor="brand" className="form-label">Brand</label>
      <input type="text" className="form-control" id="brand" />
    </div>

    <div className="col-lg-4">
      <label htmlFor="orderStatus" className="form-label">Order Status</label>
      <select className="form-select" id="orderStatus">
        <option selected>Choose...</option>
        <option value="1">Pending</option>
        <option value="2">Processing</option>
        <option value="3">Shipped</option>
        <option value="4">Delivered</option>
        <option value="5">Cancelled</option>
      </select>
    </div>
  </div>
</div>

      <div className="container mt-5">
      <table className="table ">
        <thead>
          <tr className='border-bottom-2'>
            <th scope="col">Invoice no</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className='py-10'>
              <td><input type="text" className="form-control" placeholder="Invoice no" value={item.name} onChange={(e) => handleInputChange(index, 'name', e.target.value)} /></td>
              <td><input type="number" className="form-control" placeholder="Amount" value={item.qty} onChange={(e) => handleInputChange(index, 'qty', e.target.value)} /></td>
              <td><input type="number" className="form-control" placeholder="Due " value={item.price} onChange={(e) => handleInputChange(index, 'price', e.target.value)} /></td>
              <td>{(item.qty * item.price).toFixed(2)}</td>
              <td><button type="button" className="btn btn-danger" onClick={() => handleRemoveItem(index)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex col-lg-12 pt-6">
      <div className="col-lg-4">

      <button type="button" className="btn btn-primary" onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="col-lg-8">
      <div className="d-flex justify-content-between">
  <div className="Subtotal text-white-200 fw-bold" style={{ fontSize: '14px' }}>Subtotal</div>
  <div className="text-white-200 fw-bold" style={{ fontSize: '14px' }}>00</div>
</div>
      <div className="d-flex justify-content-between">
  <div className="Subtotal text-white-200 fw-bold" style={{ fontSize: '13px' }}>Add Tax</div>
  <div className="text-white-200 fw-bold" style={{ fontSize: '13px' }}></div>
</div>
      <div className="d-flex justify-content-between">
  <div className="Subtotal text-white-200 fw-bold" style={{ fontSize: '14px' }}>Add Discount</div>
  <div className="text-white-200 fw-bold" style={{ fontSize: '14px' }}></div>
</div>
<div className="border my-6"></div>
<div className="d-flex justify-content-between">
  <div className="Subtotal text-white-200 fw-bold" style={{ fontSize: '14px' }}>Total</div>
  <div className="text-white-200 fw-bold" style={{ fontSize: '14px' }}></div>
</div>
      </div>
      </div>
      <div className="container my-4">
  {/* Notes Field */}
  <div className="mb-3">
    <textarea className="form-control" id="notes" rows="3" placeholder="Notes"></textarea>
  </div>

  {/* Preview and Download Buttons */}
  {/* <div className="d-flex justify-content-center gap-5 mb-3">
    <button className="btn btn-primary me-2" type="button">Preview</button>
    <button className="btn btn-secondary" type="button">Download</button>
  </div> */}

  {/* Send Invoice Button */}
  <div className="d-flex justify-content-center">
    <button className="btn btn-dark" type="button">Send Invoice</button>
  </div>
</div>

    </div>
    </div>
  );
};
const AddRecentInvoice = () => {
  return (
    <div> <PageTitle breadcrumbs={[]}>Invoice </PageTitle>
  <AddInvoicewrap />
    </div>
  )
}

export default AddRecentInvoice