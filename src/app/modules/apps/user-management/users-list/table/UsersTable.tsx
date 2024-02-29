import {useEffect, useMemo} from 'react'
import { useTable ,useGlobalFilter,usePagination } from 'react-table'

import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {UsersListLoading} from '../components/loading/UsersListLoading'
import {KTCardBody} from '../../../../../../_metronic/helpers'
import FilterTable from './FilterTable'
import { UsersListToolbar } from '../components/header/UserListToolbar'

interface ColumnProps {
  column: any  ;
  Data:any;
  Title
}

const UsersTable : React.FC<ColumnProps> = ({column,Data,Title }) => {
  
  
  const users = useQueryResponseData()
  
  
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => Data, [Data])
  const columns = useMemo(() => column, [])
  const tableInstance =  useTable({
    columns,
    data
  },useGlobalFilter,usePagination)

  const { getTableProps, getTableBodyProps, headerGroups, page, nextPage , previousPage,canNextPage ,canPreviousPage,pageOptions,gotoPage,pageCount,setPageSize, prepareRow ,state ,setGlobalFilter ,} = tableInstance

  const {globalFileter ,pageIndex, pageSize} = state
  useEffect(() => {
    setPageSize(10)
  }, [])
  return (
    <KTCardBody className='py-4'>
     <div className='d-flex justify-content-between border-0 pt-6 '>
<FilterTable filter={globalFileter} setFilter={setGlobalFilter} />
<UsersListToolbar Title={Title} />
</div>
      <div className='table-responsive'>
         <table
          id='kt_table_users'
          style={{width:"100%"}}
          className='table  align-middle table-row-dashed fs-6 gy-4  dataTable no-footer'
           {...getTableProps()}
         >
          <thead>
          {headerGroups.map((headerGroup) => (
          <tr className='' {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} scope='col' className={` text-dark fw-bolder fs-7 text-uppercase gs-0 ${column.id === "actions" ? 'text-end pe-8'  : 'text-start '}`} key={column.id}>
             {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
  {page.length > 0 ? (
    page.map(row => {
      prepareRow(row)
      return (
        <tr {...row.getRowProps()} key={row.id}>
          {row.cells.map((cell) => {
            return (
              <td {...cell.getCellProps()} key={cell.column.id} className=' text-sm py-1 border-b text-start   '>
                {cell.column.id === "image" ? (
                  <img src={cell.value} alt="Product" className='w-10 h-auto' />
                ) : (
                  cell.render('Cell')
                )}
              </td>
            )
          })}
        </tr>
      )
    })
  ) : (
   <tr>

     <td colSpan={5}>
     
    <div className='d-flex text-center w-100 align-content-center justify-content-center'>
    No matching records found
  </div>
     </td>
   </tr>
 
  )}
</tbody>

     
        </table>
      </div>
      <div className="d-flex justify-content-end p-5 gap-5">
        <button className="bg-light rounded py-2 border text-dark fw-bold p-2 " disabled={!canPreviousPage} onClick={()=>previousPage()}>Previous</button>
        {/* <div className="">{pageIndex+ 1}</div> */}
        <button className={` rounded  border p-3 py-2 ${pageIndex == 0 ? "bg-black  text-white" : "bg-[#EEEEEE]"}`} onClick={()=>gotoPage(0)}>1</button>
      {console.log(pageCount,pageIndex,pageSize,"1234567890-")}
        {
  pageOptions.length >= 2  &&
  (pageIndex + 1 !== 1 && pageIndex + 1 !== pageCount ) ? (

    <button 
      className={`rounded border p-3 py-2${pageIndex === pageIndex ? "bg-black text-white" : "bg-[#EEEEEE]"}`} 
    //   onClick={() => gotoPage(pageIndex + 1)} // Assuming you want to navigate to the next page
    >
      {pageIndex + 1}
    </button>
  ):(
    ""
  )
  
}
{
    pageOptions.length !==1 &&         <button className={` rounded  border py-2 p-3 ${pageIndex == pageCount-1 ? "bg-black  text-white" : "bg-[#EEEEEE]"}`}  disabled={!canNextPage} onClick={()=>gotoPage(pageCount-1)}>{pageOptions.length}</button>


}
        <button className="bg-light rounded py-2 border text-dark fw-bold p-2 " style={{backgroundColor: '#EEEEEE'}} disabled={!canNextPage} onClick={()=>nextPage()}>Next </button>
    </div>
      {/* <UsersListPagination /> */}
      
      {isLoading && <UsersListLoading />}
    </KTCardBody>
  )
}

export {UsersTable}
