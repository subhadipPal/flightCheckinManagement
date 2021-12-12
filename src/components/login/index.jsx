import React, { Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LoginHeader from './header'
import { googleOAuth2 } from '../../redux/actions/google'
import { initRoles, setNewRole } from '../../redux/actions'
import { DEFAULT_ROLE_ID, ADMIN_ROLE_ID, STAFF_ROLE_ID } from '../../constants'

import { ADMIN_LOGIN_SUCCESS } from '../../redux/actions/types'

function Home() {
  const dispatch = useDispatch()

  const accessToken = useSelector((state) => state.googleReducer.accessToken)
  const selectedRole = useSelector((state) => state.roles?.selectedRole)
  const adminLoginStatus = useSelector((state) => state.roles?.adminLoginStatus)

  const isUserLoggedIn = accessToken !== undefined
  if (isUserLoggedIn) {
    dispatch(setNewRole(2))
  }

  const CheckInComponent = lazy(() => import('../checkin'))

  const AdminLogin = lazy(() => import('./adminLogin'))

  const StaffLogin = lazy(() => import('./staffLogin'))

  const AdminDashBoard = lazy(() => import('../admin'))

  const LoadingComponent = <div>Loading...</div>

  const handleResponse = (googleResponse) => {
    dispatch(googleOAuth2(googleResponse))

    if (!googleResponse) {
      dispatch(initRoles())
    }
  }

  return (
    <div className="login">
      <LoginHeader
        isUserLoginSuccess={isUserLoggedIn}
        handleGoogleResponse={handleResponse}
        selectedRole={selectedRole}
        adminLoginStatus={adminLoginStatus}
      />

      <Suspense fallback={LoadingComponent}>
        {!isUserLoggedIn &&
          (selectedRole === STAFF_ROLE_ID ||
            selectedRole === DEFAULT_ROLE_ID) && (
            <StaffLogin handleGoogleResponse={handleResponse} />
          )}
      </Suspense>

      <Suspense fallback={LoadingComponent}>
        {isUserLoggedIn && <CheckInComponent />}
      </Suspense>

      <Suspense fallback={LoadingComponent}>
        {!isUserLoggedIn &&
          selectedRole === ADMIN_ROLE_ID &&
          adminLoginStatus !== ADMIN_LOGIN_SUCCESS && <AdminLogin />}
      </Suspense>

      <Suspense fallback={LoadingComponent}>
        {!isUserLoggedIn &&
          selectedRole === ADMIN_ROLE_ID &&
          adminLoginStatus === ADMIN_LOGIN_SUCCESS && <AdminDashBoard />}
      </Suspense>
    </div>
  )
}

export default Home
