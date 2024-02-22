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

const DashboardPage: FC = () => (
  <>
      <div className='row g-5 g-xl-8'>
        {/* <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='chart-simple'
            color='primary'
            iconColor='white'
            title='21'
            titleColor='white'
            description='New Products'
            descriptionColor='white'
          />
        </div> */}

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='danger'
            iconColor='white'
            title='+3000'
            titleColor='white'
            description='Total Suplier'
            descriptionColor='white'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-circle'
            color='dark'
            iconColor='white'
            title='+3000'
            titleColor='white'
            description='Total Customers'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='briefcase'
            color='warning'
            iconColor='white'
            title='+50,000'
            titleColor='white'
            description='Total Users'
            descriptionColor='white'
          />
        </div>

        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='chart-line-up-2'
            color='success'
            iconColor='white'
            title='₹990,000'
            titleColor='white'
            description='Total Income'
            descriptionColor='white'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
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

      {/* charrt section started */}

       {/* begin::Row */}
       <div className='row g-5 g-xl-8'>
        <div className='col-xl-6'>
          <ChartsWidget1 className='card-xl-stretch mb-xl-8' />
        </div>
        <div className='col-xl-6'>
          <ChartsWidget2 className='card-xl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      {/* end::Row */}
    {/* begin::Row */}
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      {/* begin::Col */}
      {/* <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget20
          className='h-md-50 mb-5 mb-xl-10'
          description='Total Products'
          color='#F1416C'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
        />
        <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='New Supplier'
          icon={false}
          stats={127}
          labelColor='dark'
          textColor='gray-300'
        />
      </div> */}
      {/* end::Col */}

      {/* begin::Col */}
      {/* <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget17 className='h-md-50 mb-5 mb-xl-10' />
        <ListsWidget26 className='h-lg-50' />
      </div> */}
      {/* end::Col */}

      {/* begin::Col */}
      {/* <div className='col-xxl-6'>
        <EngageWidget10 className='h-md-100' />
      </div> */}
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gx-5 gx-xl-10'>
      {/* begin::Col */}
      <div className='col-xxl-6 mb-5 mb-xl-10'>
        {/* <app-new-charts-widget8 cssclassName="h-xl-100" chartHeight="275px" [chartHeightNumber]="275"></app-new-charts-widget8> */}
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xxl-6 mb-5 mb-xl-10'>
        {/* <app-cards-widget18 cssclassName="h-xl-100" image="./assets/media/stock/600x600/img-65.jpg"></app-cards-widget18> */}
      </div>
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    {/* <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div> */}
    {/* end::Row */}

    {/* begin::Row */}
    {/* <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
      </div>
    </div> */}
    {/* end::Row */}

    {/* <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='1500px'
        />
      </div>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div> */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
