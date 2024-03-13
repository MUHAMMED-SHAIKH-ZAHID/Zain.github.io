import { CustomerFormProps } from '../IAppModels';

const Step3 = ({ data, updateData,hasError }: CustomerFormProps) => {
  // Destructuring for easier access
  const { location } = data;

  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/* Address */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bold'>Address</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter address'
            value={location.address}
            onChange={(e) => updateData({ ...data, location: { ...location, address: e.target.value } })}
          />
           {hasError && !location.address && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>Address is required</div>
            </div>
          )}
        </div>

        {/* Address 2 */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bold'>Address 2 (Optional)</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter location address (optional)'
            value={location.address2 || ''}
            onChange={(e) => updateData({ ...data, location: { ...location, address2: e.target.value } })}
          />
        </div>

        {/* State Dropdown */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bold'>State</label>
          <select
            className='form-select'
            value={location.state}
            onChange={(e) => updateData({ ...data, location: { ...location, state: e.target.value } })}
          >
            <option value=''>Select a State</option>
            <option value='AP'>Andhra Pradesh</option>
  <option value='AR'>Arunachal Pradesh</option>
  <option value='AS'>Assam</option>
  <option value='BR'>Bihar</option>
  <option value='CT'>Chhattisgarh</option>
  <option value='GA'>Goa</option>
  <option value='GJ'>Gujarat</option>
  <option value='HR'>Haryana</option>
  <option value='HP'>Himachal Pradesh</option>
  <option value='JK'>Jammu and Kashmir</option>
  <option value='JH'>Jharkhand</option>
  <option value='KA'>Karnataka</option>
  <option value='KL'>Kerala</option>
  <option value='MP'>Madhya Pradesh</option>
  <option value='MH'>Maharashtra</option>
  <option value='MN'>Manipur</option>
  <option value='ML'>Meghalaya</option>
  <option value='MZ'>Mizoram</option>
  <option value='NL'>Nagaland</option>
  <option value='OD'>Odisha</option>
  <option value='PB'>Punjab</option>
  <option value='RJ'>Rajasthan</option>
  <option value='SK'>Sikkim</option>
  <option value='TN'>Tamil Nadu</option>
  <option value='TG'>Telangana</option>
  <option value='TR'>Tripura</option>
  <option value='UP'>Uttar Pradesh</option>
  <option value='UT'>Uttarakhand</option>
  <option value='WB'>West Bengal</option>
            {/* Add more states as needed */}
          </select>
          {hasError && !location.state && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>State is required</div>
            </div>
          )}
        </div>

        {/* Google Map URL */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bold'>Google Map URL (Optional)</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Google Map URL (optional)'
            value={location.gmap || ''}
            onChange={(e) => updateData({ ...data, location: { ...location, gmap: e.target.value } })}
          />
        </div>
      </div>
    </div>
  );
};

export { Step3 };
