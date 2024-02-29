import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { StatisticsWidget5 } from '../../../_metronic/partials/widgets'

const SupplierSumaryCard = () =>{
    return (

    <div className='mt-5 pt-5'>
      
    <div className='row g-5 g-xl-8 '>
    <div className='col-xl-3'>
      <StatisticsWidget5
        className='card-xl-stretch mb-xl-8'
        svgIcon='profile-user'
        color='info'
        iconColor='white'
        title='+1000'
        titleColor='white'
        description='Number of Suplier'
        descriptionColor='white'
      />
    </div>
    <div className='col-xl-3'>
      <StatisticsWidget5
        className='card-xl-stretch mb-xl-8'
        svgIcon='profile-user'
        color='success'
        iconColor='white'
        title='+80'
        titleColor='white'
        description='New Suplier Count'
        descriptionColor='white'
      />
    </div>
    <div className='col-xl-3'>
      <StatisticsWidget5
        className='card-xl-stretch mb-xl-8'
        svgIcon='profile-user'
        color='warning'
        iconColor='white'
        title='+290'
        titleColor='white'
        description='Repeated Suplier Count'
        descriptionColor='white'
      />
    </div>
    <div className='col-xl-3'>
      <StatisticsWidget5
        className='card-xl-stretch mb-xl-8'
        svgIcon='profile-user'
        color='danger'
        iconColor='white'
        title='+10'
        titleColor='white'
        description='Inactive Suplier'
        descriptionColor='white'
      />
    </div>
    </div>
</div>
    )
}

const SupplierSumary = () => {
  return (
    <div className='my-5 py-5'>
    <SupplierSumaryCard />
    </div>
  )
}

export default SupplierSumary