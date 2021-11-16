import {combineReducers} from 'redux'

import {roles} from './rolesReducer'
import {googleReducer} from './googleReducer'
import flightsReducer from './flightsReducer'

const rootReducer = combineReducers({
  roles,
  googleReducer,
  flights: flightsReducer
})

export default rootReducer