import { GOOGLE_OAUTH2 } from './types'

export const googleOAuth2 = (googleResponse) => {
  return (dispatch) => {
    if (typeof googleResponse === 'undefined') {
      googleResponse = []
    }

    dispatch({ type: GOOGLE_OAUTH2, googleResponse })
  }
}
