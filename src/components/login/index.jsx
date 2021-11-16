import React, { Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LoginHeader from './header'
import StaffLogin from './staffLogin'
import { googleOAuth2 } from '../../actions/google'
import { initRoles, setNewRole } from '../../actions'

function Home(props) {
  const accessToken = useSelector((state) => state.googleReducer.accessToken)
  const isUserLoggedIn = accessToken !== undefined

  const CheckInComponent = lazy(() =>
    import('../checkin')
  )

  const LoadingComponent = <div>Loading...</div>

  const dispatch = useDispatch()

  const handleResponse = (googleResponse) => {
    dispatch(googleOAuth2(googleResponse))

    if (!googleResponse) {
      dispatch(initRoles())
    }
  }

  if (isUserLoggedIn) {
    dispatch(setNewRole(2))
  }

  return (
    <div className='login'>
      <LoginHeader isUserLoginSuccess={isUserLoggedIn} handleGoogleResponse={handleResponse} />
      
      {!isUserLoggedIn && <StaffLogin handleGoogleResponse={handleResponse} />}
      
      <Suspense fallback={LoadingComponent}>
        {isUserLoggedIn && <CheckInComponent />}
      </Suspense>
    </div>
  )
}

export default Home
