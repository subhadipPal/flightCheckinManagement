import {LOAD_FLIGHTS, LOAD_BOOKINGS, SET_CURRENT_BOOKING} from '../actions/types'

const INIT_STATE = []

const flightsReducer = (state = INIT_STATE, action ) => {
  switch(action.type) {
    case LOAD_FLIGHTS:
      return {...state, flights: action.payload}
    case LOAD_BOOKINGS:
      return {...state, bookings: action.payload}
    case SET_CURRENT_BOOKING:
      return {...state, currentBooking: action.payload}
    default:
      return state
  }
}

export default flightsReducer