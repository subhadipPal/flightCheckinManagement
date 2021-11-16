import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { GoogleLogout } from 'react-google-login'

import {GOOGLE_CLIENT_ID} from '../../constants'

function LoginHeader(props) {
  const { isUserLoginSuccess = false, handleGoogleResponse } = props

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

          {!isUserLoginSuccess ?
            <Button color="inherit">Admin</Button> :
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={handleGoogleResponse}
            />}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default LoginHeader