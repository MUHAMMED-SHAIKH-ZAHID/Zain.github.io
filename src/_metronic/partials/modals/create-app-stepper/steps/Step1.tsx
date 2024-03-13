import { CustomerFormProps } from '../IAppModels';

const Step1 = ({ data, updateData, hasError }: CustomerFormProps) => {
  // Destructure for easier access
  const { basicInfo } = data;

  return (
    <div className='current' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/* Full Name */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Full Name</span>
            <i className='fas fa-exclamation-circle ms-2 fs-7' data-bs-toggle='tooltip' title='Specify the full name'></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='fullname'
            placeholder='Full Name'
            value={basicInfo.fullName}
            onChange={(e) =>
              updateData({
                ...data,
                basicInfo: {
                  ...basicInfo,
                  fullName: e.target.value,
                },
              })
            }
          />
          {hasError && !basicInfo.fullName && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>Full name is required</div>
            </div>
          )}
        </div>

        {/* Code - Optional */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span>Code</span>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='code'
            placeholder='Code (Optional)'
            value={basicInfo.code || ''} 
            onChange={(e) =>
              updateData({
                ...data,
                basicInfo: {
                  ...basicInfo,
                  code: e.target.value,
                },
              })
            }
          />
        </div>

      

        {/* Other fields can follow a similar pattern */}
      </div>
    </div>
  );
};

export { Step1 };
