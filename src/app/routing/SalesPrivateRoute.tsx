import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import Suplier from '../pages/suplier/Suplier'
import Purchase from '../pages/purchase/Purchase'
import Users from '../pages/users/customer/Customer'
import Reports from '../pages/reports/Reports'
import { Account } from '../modules/profile/components/account/Account'
import Products from '../pages/datamanage/products/Products'
import Sales from '../pages/salespages/sales/Sales'
import CreateSales from '../pages/sales/CreateSales'
import AddSales from '../pages/sales/AddSalesForm'
import AddProducts from '../pages/datamanage/products/AddProducts'
import AddPurchase from '../pages/purchase/AddPurchase'
import Customer from '../pages/salespages/customer/Customer'
import { SalesMasterLayout } from '../../_metronic/layout/SalesMasterLayout'

const SalesPrivateRoute = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<SalesMasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/sales-dashboard' />} />
        {/* Pages */}
        <Route path='sales-dashboard' element={<DashboardWrapper />} />
       
        <Route path='sales/customer' element={<Customer />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/sales/salepage' element={<Sales />} />
        <Route path='/createsales' element={<CreateSales />} />
        <Route path='/addsales' element={<AddSales />} />
        <Route path='/addpurchase' element={<AddPurchase />} />
        <Route path='/account' element={<Account />} />
        <Route path='/builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {SalesPrivateRoute}
