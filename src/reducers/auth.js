import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
  FACEBOOK_AUTH_SUCCESS,
  FACEBOOK_AUTH_FAIL,
  LOGOUT,
  REFRESH,
} from "../actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  isAuthenticated: null,
  user: JSON.parse(localStorage.getItem("user")),
  error: null,
  message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.data.accessToken);
      localStorage.setItem("user", JSON.stringify(payload.data));
      return {
        ...state,
        isAuthenticated: true,
        access: payload.accessToken,
        user: payload,
      };
    case GOOGLE_AUTH_SUCCESS:
    case FACEBOOK_AUTH_SUCCESS:
      localStorage.setItem("access", payload.accessToken);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.accessToken,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: payload,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };
    case GOOGLE_AUTH_FAIL:
    case FACEBOOK_AUTH_FAIL:
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
        localStorage.removeItem("access");
      return {
        ...state,
        access: null,
        isAuthenticated: false,
        user: null,
        error: payload,
      };
    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("user");
      return {
        ...state,
        access: null,
        isAuthenticated: false,
        user: null,
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        message: payload,
      };
    case PASSWORD_RESET_FAIL:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
    case PASSWORD_RESET_CONFIRM_FAIL:
    case ACTIVATION_SUCCESS:
    case ACTIVATION_FAIL:
      return {
        ...state,
        error: payload,
      };
    case REFRESH:
      return {
        ...state,
        error: null,
        user: null,
      };
    default:
      return state;
  }
}
