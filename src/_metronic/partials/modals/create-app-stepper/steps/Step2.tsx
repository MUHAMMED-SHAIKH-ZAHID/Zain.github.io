import { CustomerFormProps } from '../IAppModels';

const Step2 = ({ data, updateData,hasError }: CustomerFormProps) => {
  // Assuming email, mobile, and mobile2 are part of the contact structure in your data model
  const { contact } = data;

  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/* Email */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bold'>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email'
            value={contact.email}
            onChange={(e) => updateData({ ...data, contact: { ...contact, email: e.target.value } })}
          />
            {hasError && !contact.email && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>Email is required</div>
            </div>
          )}
        </div>

        {/* Mobile */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bold'>Mobile</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter mobile number'
            value={contact.mobile}
            onChange={(e) => updateData({ ...data, contact: { ...contact, mobile: e.target.value } })}
          /> {hasError && !contact.mobile && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>Mobile Number is required</div>
            </div>
          )}
        </div>

        {/* Mobile 2 - Optional */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bold'>Mobile 2 (Optional)</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter another mobile number (optional)'
            value={contact.mobile2 || ''}
            onChange={(e) => updateData({ ...data, contact: { ...contact, mobile2: e.target.value } })}
          />
        </div>

        {/* Existing content for selecting framework... */}

      </div>
    </div>
  );
};

export { Step2 };
