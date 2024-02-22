import React from 'react'
import { PurchaseListWrapper } from './PurchaseListWrapper'
import { PageTitle } from '../../../_metronic/layout/core'

const Purchase = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>{'Purchase'}</PageTitle>
    <PurchaseListWrapper />
    </>
  )
}

export default Purchase