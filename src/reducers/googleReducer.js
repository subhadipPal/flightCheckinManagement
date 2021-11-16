import { GOOGLE_OAUTH2 } from '../actions/types'

const initialState = [];

export const googleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_OAUTH2: {
      return action.googleResponse;
    }
    default:
      return state;
  }
};