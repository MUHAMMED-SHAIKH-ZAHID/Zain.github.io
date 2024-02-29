import React from 'react'
import { PageTitle } from '../../../../_metronic/layout/core'
import { StatisticsWidget5 } from '../../../../_metronic/partials/widgets'

const SalesSumaryList = () => {
    return (
        <div>
        <div className='row g-5 g-xl-8'>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='info'
            iconColor='white'
            title='288'
            titleColor='white'
            description='Number of Invoice'
            descriptionColor='white'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='success'
            iconColor='white'
            title='48391'
            titleColor='white'
            description='Total Amount'
            descriptionColor='white'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='warning'
            iconColor='white'
            title='9609'
            titleColor='white'
            description='Paid Amount'
            descriptionColor='white'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='danger'
            iconColor='white'
            title='3950'
            titleColor='white'
            description='Due Amount'
            descriptionColor='white'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='danger'
            iconColor='white'
            title='8'
            titleColor='white'
            description='No of Due Invoices'
            descriptionColor='white'
          />
        </div>
        </div>
    </div>
    )
}

const SalesSumary = () => {
  return (
    <div><PageTitle breadcrumbs={[]}>Customer Sumary</PageTitle>
    <SalesSumaryList /></div>
  )
}

export default SalesSumary