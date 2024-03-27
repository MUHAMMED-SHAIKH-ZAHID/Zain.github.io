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
import Sales from '../pages/sales/Sales'
import CreateSales from '../pages/sales/CreateSales'
import AddSales from '../pages/sales/AddSalesForm'
import AddProducts from '../pages/datamanage/products/AddProducts'
import AddPurchase from '../pages/purchase/AddPurchase'
import Customer from '../pages/users/customer/Customer'
import RecentInvoice from '../pages/dashboard/RecentInvoice'
import AddRecentInvoice from '../pages/dashboard/AddRecentInvoice'
import CustomerSumary from '../pages/users/CustomerSumary'
import CustomerQuote from '../pages/users/CustomerQuote'
import SupplierSumary from '../pages/suplier/SupplierSumary'
import SuplierQuote from '../pages/suplier/SuplierQuote'
import SalesSumary from '../pages/salespages/sales/SalesSumary'
import AccountSumary from '../pages/account/AccountSumary'
import AccountTable from '../pages/account/AccountTable'
import ExpenceCategory from '../pages/account/ExpenceCategory'
import ExpenseList from '../pages/account/ExpenseList'
import SupplierProfile from '../pages/suplier/SupplierProfile'
import SalesProfile from '../pages/sales/SellerTable'
import CustomerProfile from '../pages/users/customer/CustomerProfile'
import SinglePurchaseDetails from '../pages/suplier/SinglePurchaseDetails'
import AddCustomer from '../pages/users/customer/AddCustomer'
import AddSalesForm from '../pages/sales/AddSalesForm'
import DataManage from '../pages/DataManage'
import PurchaseQuotatioin from '../pages/purchase/PurchaseQuotatioin'
import SalesOrder from '../pages/sales/SalesOrder'
import AddQuotePurchase from '../pages/purchase/AddQuotePurchase'
import AddQuoteSales from '../pages/sales/AddQuoteSales'
import Sellers from '../pages/users/sales/Sellers'
import PurchaseDetail from '../pages/purchase/PurchaseDetails'
import SalesExecutiveProfile from '../pages/users/sales/SalesExecutivePorfile'


const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}

        {/* Dashbord */}
        <Route path='/dashboard' element={<DashboardWrapper />} />
        <Route path='/dashboard/addrecentinvoice' element={<AddRecentInvoice />} />
    

        {/* Splier */}
        <Route path='/supplier' element={<Suplier/>} />
        <Route path='/supplier/profile' element={<SupplierProfile /> } />
        <Route path='/supplier/profile/spurchase' element={<SinglePurchaseDetails /> } />

  
        {/* Purchase */}
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/purchase/addpurchase' element={<AddPurchase />} />
        <Route path='/purchase/detail' element={<PurchaseDetail />} />
        <Route path='/purchase/quotation/create' element={<AddQuotePurchase />} />


        <Route path='/datamanage' element={<DataManage />} />

        {/* customer */}
        <Route path='/user' element={<Customer />} />
        <Route path='/user/customer' element={<Customer />} />
        <Route path='/user/customer/createuser' element={<AddCustomer />} />
        <Route path='/user/customer/profile' element={<CustomerProfile />} />
        <Route path='/user/seller' element={<Sellers />} />
        <Route path='/user/seller/profile' element={<SalesExecutiveProfile />} />
   


        <Route path='/reports' element={<Reports />} />
        {/* Sales */}
        <Route path='/sales' element={<Sales />} />
        <Route path='/sales/order' element={<SalesOrder />} />
        <Route path='/sales/order/create' element={<AddQuoteSales/>} />
        <Route path='/sales/profile' element={<SalesProfile />} />
        <Route path='/sales/createsales' element={<AddSalesForm />} />
     

     
  

        {/* Account */}
        <Route path='/account' element={<AccountTable />} />
        <Route path='/account/table' element={<AccountTable />} />
        <Route path='/account/sumary' element={<AccountSumary />} />
        <Route path='/account/expensecategory' element={<ExpenceCategory />} />
        <Route path='/account/expenselist' element={<ExpenseList />} />

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

export {PrivateRoutes}
