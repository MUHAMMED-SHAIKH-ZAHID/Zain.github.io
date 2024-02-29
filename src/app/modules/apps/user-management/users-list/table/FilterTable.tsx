import { KTIcon } from '../../../../../../_metronic/helpers';
// import { CiSearch } from "react-icons/ci";

interface filterprops {
  filter: any  ;
  setFilter:any;
}
const FilterTable : React.FC<filterprops> = ({filter,setFilter }) => {
  return (
    <div>
            <div className='d-flex align-items-center position-relative my-1'>
        <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />

{/* <CiSearch className='h-5 w-8' /> */}
<input type="text" value={filter } onChange={(e)=> setFilter(e.target.value)}  className='form-control form-control-solid w-250px ps-14'
          placeholder='Search user' />
        </div>
    </div>
  )
}

export default FilterTable
