import {
  INIT_ROLES,
  SET_ADMIN_ROLE,
  SET_STAFF_ROLE,
  ADMIN_LOGIN_STATUS,
  ADMIN_LOGOUT
} from '../actions/types'

import {
  DEFAULT_ROLE_ID,
  ADMIN_ROLE_ID,
  STAFF_ROLE_ID
} from '../constants'

const INIT_STATE = {
  roles: [],
  selectedRole: DEFAULT_ROLE_ID,
  adminLoginStatus: ADMIN_LOGIN_STATUS
}

export const roles = (state = INIT_STATE, action) => {
  switch (action.type) {
    case INIT_ROLES:
      return { ...state, roles: ['admin', 'staff']}
    case SET_ADMIN_ROLE:
      return { ...state, selectedRole: ADMIN_ROLE_ID }
    case SET_STAFF_ROLE:
      return { ...state, selectedRole: STAFF_ROLE_ID }
    case ADMIN_LOGIN_STATUS:
      return {...state, adminLoginStatus: action.payload}
    case ADMIN_LOGOUT:
      return {...state, selectedRole: DEFAULT_ROLE_ID, adminLoginStatus: ADMIN_LOGIN_STATUS}
    default:
      return state
  }
}