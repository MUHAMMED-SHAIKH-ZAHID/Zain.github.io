import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { StatisticsWidget5 } from '../../../_metronic/partials/widgets'

const AccountSumaryCard = () => {
    return (
    <div className='row g-5 g-xl-8'>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='success'
            iconColor='white'
            title='2880384'
            titleColor='white'
            description='Bank Account Balance'
            descriptionColor='white'
          />
        </div>
        <div className='col-xl-3'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='profile-user'
            color='success'
            iconColor='white'
            title='9688'
            titleColor='white'
            description='Cash Amount Balance'
            descriptionColor='white'
          />
        </div>
        </div>
    )
}

const AccountSumary = () => {
  return (
    <div>     <PageTitle breadcrumbs={[]}>Account Sumary</PageTitle>
    <AccountSumaryCard />
  </div>
  )
}

export default AccountSumary