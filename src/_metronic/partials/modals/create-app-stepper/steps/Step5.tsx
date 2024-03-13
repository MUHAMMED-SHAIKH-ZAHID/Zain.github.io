
import {useIllustrationsPath} from '../../../../helpers'
import { CustomerFormProps } from '../IAppModels'

const Step5 = ({data}:CustomerFormProps) => {
  return (
    <>
      <div data-kt-stepper-element='content'>
        <div className='w-100 text-center'>
          {/* begin::Heading */}
          <h1 className='fw-bold text-gray-900 mb-3'>Finish!</h1>
          {/* end::Heading */}

          {/* begin::Description */}
          <div className='text-muted fw-semibold fs-3'>
          Please submit for creating an account for   <img src={useIllustrationsPath('10.png')} alt='' className='mw-10 mh-100px' />
          </div>
          <div className="mt-5">
  <ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="fw-semibold">Name:</span>
      <span className="text-end">{data.basicInfo.fullName}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="fw-semibold">Email:</span>
      <span className="text-end">{data.contact.email}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="fw-semibold">Mobile:</span>
      <span className="text-end">{data.contact.mobile}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="fw-semibold">Address:</span>
      <span className="text-end">{data.location.address}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="fw-semibold">State:</span>
      <span className="text-end">{data.location.state}</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="fw-semibold">Company Name:</span>
      <span className="text-end">{data.company.companyName}</span>
    </li>
  </ul>
</div>

          {/* end::Description */}

    
        </div>
      </div>
    </>
  )
}

export {Step5}
