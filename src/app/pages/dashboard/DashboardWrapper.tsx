import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
  StatisticsWidget5,
  TablesWidget4,
  ChartsWidget1,
  ChartsWidget2,
} from '../../../_metronic/partials/widgets'
import RecentInvoice from './RecentInvoice'

const DashboardPage: FC = () => (
  <>
    

      {/* charrt section started */}

       {/* begin::Row */}
       <div className='row g-5 g-xl-8'>
        <div className='row col-xl-8'>
          <ChartsWidget1 className='card-xl-stretch mb-xl-8' />
          
          <ChartsWidget2 className='card-xl-stretch mb-5 mb-xl-8' />

          
        </div>
        
        <div className="row col-xl-4">

        <div className=''>
          <StatisticsWidget5
            className='card-xl-stretch  mb-8 ms-xl-5'
            svgIcon='profile-user'
            color='danger'
            iconColor='white'
            title='+3000'
            titleColor='white'
            description='Total Suplier'
            descriptionColor='white'
          />
        </div>

        <div className=''>
          <StatisticsWidget5
            className='card-xl-stretch  mb-8 ms-xl-5'
            svgIcon='profile-circle'
            color='dark'
            iconColor='white'
            title='+3000'
            titleColor='white'
            description='Total Customers'
            descriptionColor='white'
          />
        </div>
        <div className=''>
          <StatisticsWidget5
            className='card-xl-stretch  mb-8 ms-xl-5'
            svgIcon='briefcase'
            color='warning'
            iconColor='white'
            title='+50,000'
            titleColor='white'
            description='Total Users'
            descriptionColor='white'
          />
        </div>

        <div className=''>
          <StatisticsWidget5
            className='card-xl-stretch mb-5  mb-8 ms-xl-5'
            svgIcon='chart-line-up-2'
            color='success'
            iconColor='white'
            title='₹990,000'
            titleColor='white'
            description='Total Income'
            descriptionColor='white'
          />
        </div>
        <div className=''>
          <StatisticsWidget5
            className='card-xl-stretch mb-5  mb-8 ms-xl-5'
            svgIcon='chart-line-down-2'
            color='info'
            iconColor='white'
            title='₹290,000'
            titleColor='white'
            description='Total Expence'
            descriptionColor='white'
          />
        </div>

        </div>
      </div>
        {/* <div className='col-xl-8'>
          <ChartsWidget2 className='card-xl-stretch mb-5 mb-xl-8' />
        </div> */}
      {/* end::Row */}
      <div className="col-xl-12 pe-xl-10">
      <div className="my-2 mt-5 fs-3 fw-bold">Invoice</div>
     <RecentInvoice />
      </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
