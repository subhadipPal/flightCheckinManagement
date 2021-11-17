import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import { checkAdminLoginStatus } from '../../actions'
import { ADMIN_LOGIN_ERROR } from '../../actions/types'
import Button from '@mui/material/Button'

import './adminLogin.scss'

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: undefined, password: undefined })

  const adminLoginStatus = useSelector(state => state.roles.adminLoginStatus)

  const dispatch = useDispatch()

  const handleAdminLogin = () => dispatch(checkAdminLoginStatus(credentials))

  return (
    <div className="admin-login">
      <Box
        className="admin-login-content-body"
        component="form"
        noValidate
      >
        <Paper
          className="admin-login-paper"
          elevation={3}
        >
          <Typography className="admin-login-header">{'Admin login'}</Typography>
          <TextField
            id="admin-username"
            label="Username"
            variant="outlined"
            onChange={(event) => setCredentials({ ...credentials, username: event.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            autoComplete="on"
            onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
          />
          
          {adminLoginStatus === ADMIN_LOGIN_ERROR
            && <span 
              className="admin-login-error-msg">
                {'*Invalid username or password'}
              </span>}

          <Button
            variant="contained"
            onClick={handleAdminLogin}
            disabled={!credentials.username && !credentials.password}
          >
            {'Login'}
          </Button>
        </Paper>
      </Box>
    </div>
  )
}

export default AdminLogin
