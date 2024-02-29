/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC, useEffect, useState} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {Logout, AuthPage, useAuth} from '../modules/auth'
import {App} from '../App'
import { SalesPrivateRoute } from './SalesPrivateRoute'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {BASE_URL} = import.meta.env
 
const AppRoutes: FC = () => {
  // const [currentUser,setCurrentUser] = useState("")
  // useEffect(() => {
  //   const storage = JSON.parse('kt-auth-react-v')
  //   if (storage) {
  //   try {
  //     console.log(typeof(storage),"checkin the type of storage")

  //     const userRole = storage.role; 
  //     setCurrentUser(userRole);
  //   } catch (error) {
  //     console.error("Parsing error in useEffect: ", error);
  
  //   }
  // }
        
  // }, [])


  
  
  const {currentUser} = useAuth()
  console.log(currentUser,"it s in the aathi routot e rout ep  route pagex")
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {currentUser ? (
            <>
              {/* {currentUser?.role === 'admin' && (
                <> */}
                  <Route path='/*' element={<PrivateRoutes />} />
                  <Route index element={<Navigate to='/dashboard' />} />
                {/* </>
              )}
              {currentUser?.role === 'sales' && (
                <>
                  <Route path='/*' element={<SalesPrivateRoute />} />
                  <Route index element={<Navigate to='/sales-dashboard' />} />
                </>
              )} */}
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
