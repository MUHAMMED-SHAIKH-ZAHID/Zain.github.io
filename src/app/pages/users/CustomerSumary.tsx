import { StatisticsWidget5 } from '../../../_metronic/partials/widgets'

const CustomerSumaryCard = () => {
  return (
    <div>
        <div className='row g-5 g-xl-8'>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='info'
            iconColor='white'
            title='+3000'
            titleColor='white'
            description='Number of Customer'
            descriptionColor='white'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='success'
            iconColor='white'
            title='+250'
            titleColor='white'
            description='New Customer Count'
            descriptionColor='white'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='warning'
            iconColor='white'
            title='+1200'
            titleColor='white'
            description='Repeated Customer Count'
            descriptionColor='white'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='danger'
            iconColor='white'
            title='+30'
            titleColor='white'
            description='Inactive Customer'
            descriptionColor='white'
          />
        </div>
        </div>
    </div>
  )
}




import { PageTitle } from '../../../_metronic/layout/core'

const CustomerSumary = () => {
  return (
    <div>
        <PageTitle breadcrumbs={[]}>Customer Sumary</PageTitle>
        <CustomerSumaryCard />
    </div>
  )
}

export default CustomerSumary