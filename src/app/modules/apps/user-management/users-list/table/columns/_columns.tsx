import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {Products, Purchase, Suplier, User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'names',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
    ),
    id: 'last_login',
    Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].last_login} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
    ),
    id: 'two_steps',
    Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}


const   suplierColumns: ReadonlyArray<Column<Suplier>> = [
 
  {
    Header:"Full Name",
    id: 'names',
    accessor:'name'
  },
  {
    Header: "Email",
    accessor: 'email',
  },
  {
    Header:"Company",
    accessor: 'company',
  },
  {
    Header: "Location",
    accessor: 'location',
  },
 
]

export {suplierColumns}


const   purchaseColumns: ReadonlyArray<Column<Purchase>> = [
  {
    Header:"Product ID",
    accessor:'purchaseID'
  },
  // {
  //   Header: "Generated Date",
  //   accessor: 'generatedDate',
  // },
  {
    Header:"Product name",
    accessor: 'suppliername',
  },
  // {
  //   Header: "Purchase Status",
  //   accessor: 'purchasestatus',
  // },
 
]

export {purchaseColumns}

const salesColumns  = (handleActionClick: (rowData: Purchase) => void): Column<Purchase>[] => [
  {
    Header: "Order ID",
    accessor: 'orderID',
  },
  {
    Header: "Generated Date",
    accessor: 'generatedDate',
  },
  {
    Header: "Supplier name",
    accessor: 'suppliername',
  },
  {
    Header: "Order Status",
    accessor: 'orderStatus',
  },
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <button className='btn btn-dark btn-sm' onClick={() =>( handleActionClick(row.original))} >Action</button>
    ),
  },
];


export {salesColumns}

const productsColumns: ReadonlyArray<Column<Products>> = [
  {
    Header: "Name",
    accessor: 'name',
  },
  {
    Header: "SKU",
    accessor: 'sku',
  },
  {
    Header: "Sale Price",
    accessor: 'salePrice',
  },
  {
    Header: "Purchase Price",
    accessor: 'purchasePrice',
  },
  {
    Header: "Tax",
    accessor: 'tax',
  },
  {
    Header: "Category",
    accessor: 'category',
  },
  {
    Header: "Supplier",
    accessor: 'supplier',
  },
  {
    Header: "Brand",
    accessor: 'brand',
  },
  {
    Header: "Stock Count",
    accessor: 'StockCount',
  },
  {
    Header: "Stock Status",
    accessor: 'stockStatus',
  },
];

export { productsColumns };

