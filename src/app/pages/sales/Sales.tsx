import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import {SalesListWrapper} from './SalesListWrapper'

const Sales = () => {
  return (
    <>
    <PageTitle breadcrumbs={[]}>{'Sales Order'}</PageTitle>
  <SalesListWrapper />
  </>
  )
}

export default Sales