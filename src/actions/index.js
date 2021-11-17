import axios from 'axios'

import {
  INIT_ROLES,
  SET_ADMIN_ROLE,
  SET_STAFF_ROLE,
  LOAD_FLIGHTS,
  LOAD_BOOKINGS,
  SET_CURRENT_BOOKING,
  ADMIN_LOGIN_STATUS,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGOUT
} from './types'

import {
  ADMIN_ROLE_ID
} from '../constants'


export const initRoles = () => ({
  type: INIT_ROLES
})

export const setNewRole = (roleId = 0) => {
  return (roleId === ADMIN_ROLE_ID?
    { type: SET_ADMIN_ROLE } :
    { type: SET_STAFF_ROLE })
}


export const getFlightsByCurrentTime = (currentTime) => async (dispatch) => {
  const flights = await axios.get(`http://localhost:3030/flights?flight_dep_time_gte=${currentTime}`)

  dispatch({
    type: LOAD_FLIGHTS,
    payload: flights.data
  })
}


export const getBookingDetails = (flightId) => async (dispatch) => {
  const bookings = await axios.get(`http://localhost:3030/flights/${flightId}/bookings`)

  dispatch({
    type: LOAD_BOOKINGS,
    payload: bookings.data
  })
}

export const setCurrentBooking = (currentBooking) => ({
  type: SET_CURRENT_BOOKING,
  payload: currentBooking
})


export const updateBooking = (bookingData, bookingId, flightId) => async (dispatch) => {
  const updatedBooking = await axios.patch(`http://localhost:3030/bookings/${bookingId}`, bookingData)

  dispatch({
    type: SET_CURRENT_BOOKING,
    payload: updatedBooking.data
  })

  dispatch(getBookingDetails(flightId))
}


export const checkAdminLoginStatus = (credentials) => async (dispatch) => {
  const {data} = await axios.get('http://localhost:3030/admin')
  
  let status = ''
  if(data.username === credentials.username 
      && data.password === credentials.password){
    status=ADMIN_LOGIN_SUCCESS
  }
  else {
    status = ADMIN_LOGIN_ERROR
  }

  dispatch({
    type: ADMIN_LOGIN_STATUS,
    payload: status
  })

}

export const adminLogout = () => ({
  type: ADMIN_LOGOUT
})