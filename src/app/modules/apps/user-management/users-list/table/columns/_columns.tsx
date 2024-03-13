import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {Account, ExpenceList, Expencecategory, Invoice, Products, Purchase, Suplier, User, sales} from '../../core/_models'
import { KTIcon } from '../../../../../../../_metronic/helpers'
import { Link } from 'react-router-dom'

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

const invoiceColumns: ReadonlyArray<Column<Invoice>> = [
  {
    Header: "ID",
    accessor: 'slNo',
  },
  {
    Header: "Invoice Number",
    accessor: 'invoiceNumber',
  },
  {
    Header: "Amount",
    accessor: 'amount',
  },
  {
    Header: "Invoice Date",
    accessor: 'invoiceDate',
  },
  {
    Header: "Due Date",
    accessor: 'dueDate',
  },
  {
    Header: "Status",
    accessor: 'status',
    Cell: ({ row }) => {
      // Define a mapping from order status to badge classes
      const statusToBadgeClass = {
        "Pending": "badge-light-warning",
        "In Progress": "badge-light-primary",
        "Paid": "badge-light-success",
        "Overdue": "badge-light-danger"
      };
      
      // Get the appropriate class for the current row's order status
      const badgeClass = statusToBadgeClass[row.original.status] || "badge-light";
  
      return (
        <div>
          <span className={`badge ${badgeClass}`}>{row.original.status}</span>
        </div>
      );
    }
  },
];

export { invoiceColumns };



const   suplierColumns: ReadonlyArray<Column<Suplier>> = [
 
  {
    Header:"Full Name",
    id: 'names',
    accessor:'name'
  },

  {
    Header: "Mobile",
    accessor: 'mobile',
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
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <div className='d-flex justify-content-end'>
        <Link to='/supplier/profile' className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'>
          <KTIcon iconName='switch' className='fs-3' />
        </Link>
        <a
          href='#'
          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
        >
          <KTIcon iconName='pencil' className='fs-3' />
        </a>
        <a
          href='#'
          className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
        >
          <KTIcon iconName='trash' className='fs-3' />
        </a>
      </div>
    ),
  }
  
 
]

export {suplierColumns}

const   userColumns: ReadonlyArray<Column<Suplier>> = [
 
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
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <div className='d-flex justify-content-end'>
        <Link to='/customer/profile' className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'>
          <KTIcon iconName='switch' className='fs-3' />
        </Link>
        <a
          href='#'
          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
        >
          <KTIcon iconName='pencil' className='fs-3' />
        </a>
        <a
          href='#'
          className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
        >
          <KTIcon iconName='trash' className='fs-3' />
        </a>
      </div>
    ),
  }
  
 
]

export {userColumns}


const   productColumns: ReadonlyArray<Column<Purchase>> = [
  {
    Header:" ID",
    accessor:'purchaseID',
    width:200
  },
  // {
  //   Header: "Generated Date",
  //   accessor: 'generatedDate',
  // },
  {
    Header:"Product name",
    accessor: 'suppliername',
    width:200
  },
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <div className='d-flex justify-content-end'>
      
      <a
        href='#'
        className='btn btn-icon btn-bg-light btn-active-color-primary  btn-sm me-1'
      >
        <KTIcon iconName='pencil' className='fs-3' />
      </a>
      <a
        href='#'
        className='btn btn-icon btn-bg-light btn-active-color-danger  btn-sm'
      >
        <KTIcon iconName='trash' className='fs-3' />
      </a>
    </div>
    ),
  },
]

export {productColumns}
const categoryColumns: ReadonlyArray<Column<Category>> = [
  {
    Header: "ID",
    accessor: 'categoryId',
    width: 200
  },
  {
    Header: "Category name",
    accessor: 'categoryName',
    width: 200
  },
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <div className='d-flex justify-content-end'>
        <a
          href='#'
          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
        >
          <KTIcon iconName='pencil' className='fs-3' />
        </a>
        <a
          href='#'
          className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
        >
          <KTIcon iconName='trash' className='fs-3' />
        </a>
      </div>
    ),
  }
];

export {categoryColumns};

const brandColumns: ReadonlyArray<Column<Brand>> = [
  {
    Header: "ID",
    accessor: 'brandId',
    width: 200
  },
  {
    Header: "Brand name",
    accessor: 'brandName',
    width: 200
  },
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <div className='d-flex justify-content-end'>
        <a
          href='#'
          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
        >
          <KTIcon iconName='pencil' className='fs-3' />
        </a>
        <a
          href='#'
          className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
        >
          <KTIcon iconName='trash' className='fs-3' />
        </a>
      </div>
    ),
  }
];

export {brandColumns};


export type ActionClickHandler = (rowData: Purchase) => void;
const salesColumns  = (handleActionClick : any): Column<sales>[] => [
  {
    Header: "ID",
    accessor: 'orderID',
  },
  {
    Header: "Invoice Number",
    accessor: 'invoice',
  },
  {
    Header: "Generated Date",
    accessor: 'generatedDate',
  },
  {
    Header: "Dealer name",
    accessor: 'dealername',
  },
  {
    Header: "Total Amount",
    accessor: 'totalamount',
  },
  {
    Header: "Total Incl Gst",
    accessor: 'totalinclgst',
  },
  
  
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <div className='d-flex justify-content-end'>
       <Link to='/sales/profile' className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'>
          <KTIcon iconName='switch' className='fs-3' />
        </Link>
      <a
        href='#'
        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
      >
        <KTIcon iconName='pencil' className='fs-3' />
      </a>
      <a
        href='#'
        className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
      >
        <KTIcon iconName='trash' className='fs-3' />
      </a>
    </div>
    ),
  },
];


export {salesColumns}
interface Quote {
  quoteId: string;
  customerName: string;
  quantity: number;
  quoteValue: string;
  salesPerson: string;
  status: 'Pending' | 'Approved' | 'Rejected' | 'In Review';
}

const quoteColumns: Column<Quote>[] = [
  {
    Header: "Quote ID",
    accessor: "quoteId"
  },
  {
    Header: "Customer Name",
    accessor: "customerName"
  },
  {
    Header: "Qty",
    accessor: "quantity"
  },
  {
    Header: "Quote Value",
    accessor: "quoteValue"
  },
  {
    Header: "Sales Person",
    accessor: "salesPerson"
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => {
      const statusToBadgeClass = {
        "Pending": "badge-light-warning",
        "Approved": "badge-light-success",
        "Rejected": "badge-light-danger",
        "In Review": "badge-light-info"
      };
      return <span className={`badge ${statusToBadgeClass[value] || 'badge-light'}`}>{value}</span>;
    }
  },
  {
    Header: "Preview",
    accessor: 'preview',
    Cell:({row}) => {
      return (
        <div className="d-flex ms-5">
       <Link  to={'/supplier/profile/spurchase'} >

        <KTIcon iconName='eye' className='fs-3' /> 
        </Link>
        </div>
      )
    }
  },
];

export {quoteColumns}


const PurchaseColumns: ReadonlyArray<Column<Purchase>> = [
  {
    Header: "Id",
    accessor: 'id',
  },

  {
    Header: "Suplier Name",
    accessor: 'supliername',
  },
  {
    Header: "Invoice Number",
    accessor: 'invoice',
  },
  {
    Header: "Purchase Price",
    accessor: 'purchasePrice',
    Cell:({row}) => {
      return (  <div className=''>
        <span className={`   `}> &nbsp; {row.original.purchasePrice}</span>
      </div>)
    }
  },
 
  {
    Header: "Status",
    accessor: 'status',
    Cell: ({ row }) => {
      const statusToBadgeClass = {
        "Hold": "badge-light-warning", 
        "Placed": "badge-light-primary", 
        "Transit": "badge-light-success", 
        "Partial Transit": "badge-light-info" 
      };
      
      
      const badgeClass = statusToBadgeClass[row.original.status] || "badge-light";
  
      return (
        <div className=''>
          <span className={`badge w-75  ${badgeClass}`}>{row.original.status}</span>
        </div>
      );
    }
  },
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <div className='d-flex justify-content-end'>
       <Link to='#' className='btn btn-icon btn-bg-light btn-active-color-success btn-sm me-1'>
          <KTIcon iconName='switch' className='fs-3' />
        </Link>
      <a
        href='#'
        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
      >
        <KTIcon iconName='pencil' className='fs-3' />
      </a>
      <a
        href='#'
        className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm'
      >
        <KTIcon iconName='trash' className='fs-3' />
      </a>
    </div>
    ),
  },
];

export { PurchaseColumns };

const purchaseQuoteColumns = [
  {
    Header: "Quote ID",
    accessor: "quoteId"
  },
  {
    Header: "Supplier Name",
    accessor: "supplierName"
  },
  {
    Header: "Quantity",
    accessor: "quantity"
  },
  {
    Header: "Quote Values",
    accessor: "quoteValues"
  },
  {
    Header: "Sales Person",
    accessor: "salesPerson"
  },
  {
    Header: "Quote Status",
    accessor: "quoteStatus",
    Cell: ({ value }) => {
      const statusToBadgeClass = {
        "Shared": "badge-light-primary",
        "On Hold": "badge-light-warning",
        "Rejected": "badge-light-danger",
        "Converted": "badge-light-success"
      };

      return <span className={`badge ${statusToBadgeClass[value] || 'badge-light'}`}>{value}</span>;
    }
  }
];
export {purchaseQuoteColumns}



const   AccountColumns: ReadonlyArray<Column<Account>> = [
 
  {
    Header:"Date",
    id: 'names',
    accessor:'date'
  },
  {
    Header: "Account Mode",
    accessor: 'expense',
  },
  {
    Header:"Amount",
    accessor: 'amount',
  },
  {
    Header: "Category",
    accessor: 'category',
  },
 
]

export {AccountColumns}


const   ExpenceCategoryColumns: ReadonlyArray<Column<Expencecategory>> = [
 
  {
    Header:"id",
    id: 'id',
    accessor:'id'
  },
  {
    Header: "Expence Category",
    accessor: 'expensecategory',
  },
 
]

export {ExpenceCategoryColumns}

const ExpenceColumns: ReadonlyArray<Column<ExpenceList>> = [
  {
    Header: "Sl no",
    accessor: "slNo", // Accessor matches the property in the FinancialRecord
  },
  {
    Header: "Main Category",
    accessor: "mainCategory",
  },
  {
    Header: "Sub Category",
    accessor: "subCategory",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Remarks",
    accessor: "remarks",
  },
];

export { ExpenceColumns };




interface PurchaseData {
  date: string;
  purchaseNo: string;
  purchaseAmount: number;
}

const suplierpurchaseColumns: ReadonlyArray<Column<PurchaseData>> = [
  {
    Header: "Date",
    accessor: 'date', // accessor is the "key" in the data
  },
  {
    Header: "Purchase No",
    accessor: 'purchaseNo',
  },
  {
    Header: "Purchase Amount",
    accessor: 'purchaseAmount',
    // You can format the amount here, e.g., to show it as currency
    Cell: ({ value }) => `${value.toFixed(2)}`,
  },
  {
    Header: "Preview",
    accessor: 'preview',
    Cell:({row}) => {
      return (
        <div className="d-flex ms-5">
       <Link  to={'/supplier/profile/spurchase'} >

        <KTIcon iconName='eye' className='fs-3' /> 
        </Link>
        </div>
      )
    }
  },
];

export { suplierpurchaseColumns };
const sellerpurchaseColumns: ReadonlyArray<Column<PurchaseData>> = [
  {
    Header: "Date",
    accessor: 'date', // accessor is the "key" in the data
  },
  {
    Header: "Sale No",
    accessor: 'purchaseNo',
  },
  {
    Header: "Sale Amount",
    accessor: 'purchaseAmount',
    // You can format the amount here, e.g., to show it as currency
    Cell: ({ value }) => `${value.toFixed(2)}`,
  },
  {
    Header: "Preview",
    accessor: 'preview',
    Cell:({row}) => {
      return (
        <div className="d-flex ms-5">
        <KTIcon iconName='eye' className='fs-3' />
        </div>
      )
    }
  },
];

export { sellerpurchaseColumns };

interface ItemPurchaseData {
  item: string;
  price: number; // Price per item
  quantity: number;
  total: number; // Total cost (price * quantity)
}



const itemPurchaseColumns: ReadonlyArray<Column<ItemPurchaseData>> = [
  {
    Header: "Item",
    accessor: 'item',
  },
  {
    Header: "Price",
    accessor: 'price',
    Cell: ({ value }) => `${value.toFixed(2)}`, 
  },
  {
    Header: "Quantity",
    accessor: 'quantity',
    Cell: ({ value }) => `${value} pcs`, 
  },
  {
    Header: "Total",
    accessor: 'total',
    Cell: ({ row }) => {
      
      const total = row.original.price * row.original.quantity;
      return `${total.toFixed(2)}`;
    },
  },
];

export { itemPurchaseColumns };