import axios from 'axios'

import {
  INIT_ROLES,
  SET_ADMIN_ROLE,
  SET_STAFF_ROLE,
  LOAD_FLIGHTS,
  LOAD_BOOKINGS,
  SET_CURRENT_BOOKING
} from './types'


export const initRoles = () => ({
  type: INIT_ROLES
})

export const setNewRole = (roleId = 0) =>
(roleId === 1 ?
  { type: SET_ADMIN_ROLE } :
  { type: SET_STAFF_ROLE })


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