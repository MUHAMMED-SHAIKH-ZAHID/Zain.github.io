import {ID, Response} from '../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  name?: string
  avatar?: string
  email?: string
  position?: string
  role?: string
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}
export type Suplier = {
  id?: ID
  name?: string
  avatar?: string
  email?: string
  company?:string
  location?:string
  mobile?:string
  actions?:string
}
export type Account = {
  date?:string
  expense?:string
  amount?:number
  category?:string
}
export type Expencecategory = {
  id?:string
  expencecategory?:string
}

export type ExpenceList = {
  slNo: number;
  date: string; 
  amount: number; 
  remarks: string;
  mainCategory: string;
  subCategory: string;
}




export type Purchase = {
  id:string
  supliername:string
  invoice?:string
  purchasePrice?:string
  status?:string
  orderStatus: 'Pending' | 'In Progress' | 'Completed' | 'Cancelled';
  actions?: string;
}

export type sales = {
  orderID: string;
  invoice: string;
  generatedDate: string; // Assuming the date is stored as a string
  dealername: string;
  quantity: number;
  totalamount: number;
  totalinclgst: number;
}


export type Products = {
  name: string;
  sku: string;
  salePrice: number | string; 
  purchasePrice: number | string;
  tax: number | string;
  category: string;
  supplier: string;
  brand: string;
  unitsPerPack: number;
  availableStockCount: number;
  stockStatus: string; 
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}

export type Invoice = {
  slNo: string | number; 
  invoiceNumber: string;
  amount: number | string; 
  invoiceDate: string;
  dueDate: string;
  status: 'Pending' | 'In Progress' | 'Paid' | 'Overdue'; 
};