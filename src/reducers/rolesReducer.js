import {
  INIT_ROLES,
  SET_ADMIN_ROLE,
  SET_STAFF_ROLE
} from '../actions/types'

const INIT_STATE = {
  roles: [],
  selectedRole: 0
}

export const roles = (state = INIT_STATE, action) => {
  switch (action.type) {
    case INIT_ROLES:
      return { ...state, roles: ['admin', 'staff'], selectedRole: 0 }
    case SET_ADMIN_ROLE:
      return { ...state, selectedRole: 1 }
    case SET_STAFF_ROLE:
      return { ...state, selectedRole: 2 }
    default:
      return state
  }
}