import {
  LOAD_FLIGHTS,
  LOAD_BOOKINGS, 
  CURRENT_BOOKING, 
  CURRENT_FLIGHT_ID,
} from '../actions/types'

const INIT_STATE = {
  flights: [],
  bookings: [],
  currentBooking: null,
  currentFlightId: null
}

const flightsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_FLIGHTS:
      return { ...state, flights: action.payload, bookings: [], currentBooking: null, currentFlightId: null }
    case LOAD_BOOKINGS:
      return { ...state, bookings: action.payload }
    case CURRENT_BOOKING:
      return { ...state, currentBooking: action.payload }
    case CURRENT_FLIGHT_ID:
      return { ...state, currentFlightId: action.payload }
    default:
      return state
  }
}

export default flightsReducer