import React from 'react'
import { useDispatch } from 'react-redux'
import Proptypes from 'prop-types'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { GoogleLogout } from 'react-google-login'

import {
  GOOGLE_CLIENT_ID,
  ADMIN_ROLE_ID,
  STAFF_ROLE_ID,
  DEFAULT_ROLE_ID,
} from '../../constants'
import { ADMIN_LOGIN_SUCCESS } from '../../redux/actions/types'

import { setNewRole, adminLogout } from '../../redux/actions'

function LoginHeader(props) {
  const {
    isUserLoginSuccess = false,
    handleGoogleResponse,
    selectedRole,
    adminLoginStatus,
  } = props

  const dispatch = useDispatch()

  const handleSetNewRole = (roleId) => dispatch(setNewRole(roleId))

  const handleAdminLogout = () => dispatch(adminLogout())

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Airline check-In manager
          </Typography>

          {!isUserLoginSuccess ? (
            <>
              {(selectedRole === STAFF_ROLE_ID ||
                selectedRole === DEFAULT_ROLE_ID) && (
                <Button
                  color="inherit"
                  onClick={() => handleSetNewRole(ADMIN_ROLE_ID)}
                >
                  Admin
                </Button>
              )}

              {selectedRole === ADMIN_ROLE_ID &&
                adminLoginStatus === ADMIN_LOGIN_SUCCESS && (
                  <Button color="inherit" onClick={() => handleAdminLogout()}>
                    Admin logout
                  </Button>
                )}

              {selectedRole === ADMIN_ROLE_ID &&
                adminLoginStatus !== ADMIN_LOGIN_SUCCESS && (
                  <Button
                    color="inherit"
                    onClick={() => handleSetNewRole(STAFF_ROLE_ID)}
                  >
                    Staff
                  </Button>
                )}
            </>
              ) : (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={handleGoogleResponse}
            />
              )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default LoginHeader

LoginHeader.propTypes = {
  isUserLoginSuccess: Proptypes.bool,
  handleGoogleResponse: Proptypes.func,
  selectedRole: Proptypes.number,
  adminLoginStatus: Proptypes.string
}