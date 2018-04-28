import { REQUEST_USER_SIGNIN, FAIL_USER_SIGNIN, SUCCESS_USER_SIGNIN, USER_SIGNOUT } from "../actions";

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  errorMessage: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_SIGNIN:
      return Object.assign({}, state, {
        isAuthenticationg: true,
        errorMessage: null
      })
    case FAIL_USER_SIGNIN:
      return Object.assign({}, state, {
        isAuthenticationg: false,
        errorMessage: action.errorMessage
      })
    case SUCCESS_USER_SIGNIN:
      return Object.assign({}, state, {
        isAuthenticationg: false,
        currentUser: action.user,
        errorMessage: null
      });
    case USER_SIGNOUT:
      return Object.assign({}, state, initialState)
    default:
      return state;
  }
};

export default userReducer;
