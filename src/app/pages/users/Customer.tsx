import React from 'react'
import {  CustomerListWrapper } from './CustomerListWrapper'
import { PageTitle } from '../../../_metronic/layout/core'

const Customer = () => {
  return (
 <>
   <PageTitle breadcrumbs={[]}>{'Customer'}</PageTitle>
 <CustomerListWrapper />
 </>
 
  )
}

export default Customer