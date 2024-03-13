import { CustomerFormProps } from '../IAppModels';

const Step4 = ({ data, updateData }: CustomerFormProps) => {
  // Destructure for easier access
  const { company } = data;

  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/* Company Name */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bold'>Company Name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter company name'
            value={company.companyName}
            onChange={(e) => updateData({ ...data, company: { ...company, companyName: e.target.value } })}
          />
        </div>

        {/* Route */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bold'>Route</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter route (optional)'
            value={company.route || ''}
            onChange={(e) => updateData({ ...data, company: { ...company, route: e.target.value } })}
          />
        </div>

        {/* Sales Person Assigned */}
        <div className='fv-row mb-10'>
          <label className='form-label fw-bold'>Sales Person Assigned</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter sales person name (optional)'
            value={company.salesPersonAssigned || ''}
            onChange={(e) => updateData({ ...data, company: { ...company, salesPersonAssigned: e.target.value } })}
          />
        </div>
      </div>
    </div>
  );
};

export { Step4 };
