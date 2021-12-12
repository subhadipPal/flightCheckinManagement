import React from 'react'
import Proptypes from 'prop-types'

import Paper from '@mui/material/Paper'
import { GoogleLogin } from 'react-google-login'

import { GOOGLE_CLIENT_ID } from '../../constants'
import './staffLogin.scss'

export default function StaffLogin(props) {
  const { handleGoogleResponse } = props

  return (
    <div className="login-content-body">
      <div>
        <span className="login-button-header">Staff login</span>
        <Paper elevation={3} className="button-page">
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={handleGoogleResponse}
            onFailure={handleGoogleResponse}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </Paper>
      </div>
    </div>
  )
}

StaffLogin.propTypes = {
  handleGoogleResponse: Proptypes.func
}