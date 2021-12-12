import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initRoles } from '../redux/actions'
import Home from './login'
import './App.scss'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initRoles())
  }, [dispatch])

  return <Home />
}

export default App
