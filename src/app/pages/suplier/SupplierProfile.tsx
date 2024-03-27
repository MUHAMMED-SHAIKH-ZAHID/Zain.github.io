
import { KTIcon} from '../../../_metronic/helpers'
import { PageTitle } from '../../../_metronic/layout/core'
import TotalPurcahseForSuplier from './TotalPurcahseForSuplier'
import profilePhoto from '../../../_metronic/assets/custom/user3d.png'




function Details (){
    return (
        <>
           <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
           
          

          </div>
          <img src={profilePhoto} alt="" className='h-10 w-10' style={{height:"150px"}}/>
          
          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column pt-16'>
                <div className='d-flex align-items-center '>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    Supplier Name
                  </a>
                
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mt-4 pe-2'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='phone' className='fs-4 me-1 text-dark' />
                    +91 23485 93887
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-500 text-hover-dark mb-2'
                  >
                    <KTIcon iconName='sms' className='fs-4 me-1 text-dark' />
                    suplier@gmail.com
                  </a>
                  </div>
                  <div className='d-flex flex-wrap fw-bold fs-6  pe-2'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-500 text-hover-dark me-5 mb-2'
                  >
                    <KTIcon iconName='office-bag' className='fs-4 me-1 text-warning' />
                   Company Name
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-500 text-hover-dark me-5 mb-2'
                  >
                    <KTIcon iconName='geolocation' className='fs-4 me-1 text-danger' />
                   Kerala
                  </a>
                </div>
              </div>

              {/* <div className='d-flex my-4'>
                <a href='#' className='btn btn-sm btn-light me-2' id='kt_user_follow_button'>
                  <KTIcon iconName='check' className='fs-3 d-none' />

                  <span className='indicator-label'>Edit</span>
                  <span className='indicator-progress'>
                    Please wait...
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                </a>
             
              </div> */}
              <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dotted rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='purchase' className='fs-3 text-dark me-2' />
                      <div className='fs-2 fw-bolder'>7868</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-500'>Total Purchase</div>
                  </div>

                  <div className='border border-gray-300 border-ridge rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='dollar' className='fs-3 text-warning me-2' />
                      <div className='fs-2 fw-bolder'>758k</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-500'>Total Amount</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-down' className='fs-3 text-danger me-2' />
                      <div className='fs-2 fw-bolder'>600</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-500'>Credit Amount</div>
                  </div>
                </div>
              </div>

            </div>
            </div>

            
          </div>
        </div>

        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
           
               <div className={
                  `nav-link text-active-primary me-6 active cursor-pointer`

                }
               
              >
                Overview
              
            </div>
          
            </li>
         
          </ul>
        </div>
      </div>
    </div>

     <div className="my-2 mt-5 fs-3 fw-bold ms-2 ">Purchase</div>     
         <TotalPurcahseForSuplier />
        </>
    )
}














const SupplierProfile = () => {
  return (
  <>
  <PageTitle >Suplier Profile</PageTitle>
  <Details />
  </>
  )
}

export default SupplierProfile