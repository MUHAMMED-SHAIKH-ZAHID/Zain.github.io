import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PageTitle } from '../../../_metronic/layout/core';
import { KTIcon } from '../../../_metronic/helpers';

interface Item {
    id: number;
    name: string;
    qty: number;
    price: number;
  }

const AddQuotePurchaseWrap : React.FC = () => {
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

  const suplier = [
    { id: 'user1', name: 'Suplier 1' },
    { id: 'user2', name: 'Suplier 2' },
    { id: 'user3', name: 'Suplier 3' },
    { id: 'user4', name: 'Suplier 4' },
    // Add more users as needed
  ];
  
  const products = [
    { id: 'prod1', name: 'Product 1' },
    { id: 'prod2', name: 'Product 2' },
    // Add more products as needed
  ];
  
  const categories = [
    { id: 'cat1', name: 'Category 1' },
    { id: 'cat2', name: 'Category 2' },
    // Add more categories as needed
  ];

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
        <span className="fs-2x fw-bold text-gray-800 me-2">Purchase Quotation</span>
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
          type="text" 
          className="form-control form-control-flush fw-bold text-muted fs-3 w-125px" 
          value={`#${invoiceNumber}`} 
          onChange={(e) => setInvoiceNumber(e.target.value)} 
        />
      </div>
      </div>
      <div className="container py-10">
      <div className="row col-lg-12 mb-3">

        {/* <div className="col-lg-6">
          <label htmlFor="product" className="form-label">Product</label>
          <select className="form-select" id="product">
            <option selected>Choose...</option>
            {products.map(product => (
              <option key={product.id} value={product.name}>{product.name}</option>
            ))}
          </select>
        </div> */}
        <div className="col-lg-4">
          <label htmlFor="user" className="form-label">Suplier</label>
          <select className="form-select" id="suplier">
            <option selected>Choose...</option>
            {suplier.map(suplier => (
              <option key={suplier.id} value={suplier.name}>{suplier.name}</option>
            ))}
          </select>
        </div>
        <div className="col-lg-4">
          <label htmlFor="categories" className="form-label">Categories</label>
          <select className="form-select" id="categories">
            <option selected>Choose...</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="col-lg-4">
        <label htmlFor="brand" className="form-label">Brand</label>
          <input type="text" className="form-control" id="brand" />
          </div>

        </div>
</div>

        
<div className="container mt-5">
      <table className="table ">
        <thead>
          <tr className='border-bottom-2'>
            <th scope="col">Product Name </th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Tax</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className='py-10'>
<td>
  <select 
    className="form-control" 
    value={item.name} 
    onChange={(e) => handleInputChange(index, 'name', e.target.value)}
  >
    <option value="">Select </option>
    <option value="Product 1">Product 1</option>
    <option value="Product 2">Product 2</option>
    <option value="Product 3">Product 3</option>
    <option value="Product 4">Product 4</option>
    <option value="Product 5">Product 5</option>
  </select>
</td>
                <td><input type="number" className="form-control" placeholder="Qty" value={item.qty} onChange={(e) => handleInputChange(index, 'qty', e.target.value)} /></td>
                <td><input type="number" className="form-control" placeholder="Price" value={item.price} onChange={(e) => handleInputChange(index, 'price', e.target.value)} /></td>
                <td><input type="number" className="form-control" placeholder="Discount" value={item.discount} onChange={(e) => handleInputChange(index, 'discount', e.target.value)} /></td>
                <td><input type="number" className="form-control" placeholder="Tax" value={item.tax} onChange={(e) => handleInputChange(index, 'tax', e.target.value)} /></td>
                <td>
  {(
    (Number(item.qty) * Number(item.price)) - 
    ((Number(item.qty) * Number(item.price)) * (Number(item.discount) / 100)) + 
    ((Number(item.qty) * Number(item.price)) * (Number(item.tax) / 100))
  ).toFixed(2)} 
</td>
<td><button type="button" className="btn btn-sm btn-danger" onClick={() => handleRemoveItem(index)}>  <span className='fs-8'>delete</span></button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex col-lg-12 pt-6">
      <div className="col-lg-4">

      <button type="button" className="btn btn-primary" onClick={handleAddItem}><KTIcon iconName='add-item' className='fs-3 ' /> <span className='fs-7'>Add Product</span></button>
      </div>
      <div className="col-lg-8">
      <div className="d-flex justify-content-between">
  <div className="Subtotal text-white-200 fw-bold" style={{ fontSize: '14px' }}>Qty</div>
  <div className="text-white-200 fw-bold" style={{ fontSize: '14px' }}>00</div>
</div>
      <div className="d-flex justify-content-between">
  <div className="Subtotal text-white-200 fw-bold" style={{ fontSize: '13px' }}>Sale Price</div>
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



  {/* Send Invoice Button */}
  <div className="d-flex justify-content-center mt-5">
    <button className="btn btn-dark" type="button">Create Sale</button>
  </div>
</div>

    </div>
    </div>
  );
};









const AddQuotePurchase = () => {
  return (
 <>
       <PageTitle breadcrumbs={[]}>{'Add Purchase'}</PageTitle>

 <AddQuotePurchaseWrap /> </>
  )
}

export default AddQuotePurchase
