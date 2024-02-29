import React from 'react'
import { SuplierListWrapper } from './SuplierListWrapper'
import { PageTitle } from '../../../_metronic/layout/core'
import SupplierSumary from './SupplierSumary'

const Suplier = () => {
  return (
    <>
       <PageTitle breadcrumbs={[]}>{'Suplier'}</PageTitle>
<SuplierListWrapper />

    </>
  )
}

export default Suplier