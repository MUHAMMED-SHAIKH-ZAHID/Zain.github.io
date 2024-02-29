
import {SalesListWrapper} from './SalesListWrapper'
import { PageTitle } from '../../../../_metronic/layout/core'

const Sales = () => {
  return (
    <>
    <PageTitle breadcrumbs={[]}>{'Sales Order'}</PageTitle>
  <SalesListWrapper />
  </>
  )
}

export default Sales