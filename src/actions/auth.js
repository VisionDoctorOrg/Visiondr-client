import axios from "axios";
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
} from "./types";
import { REFRESH } from "./types";

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}auth/me/`,
        config
      );

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

// export const googleAuthenticate = (state, code) => async (dispatch) => {
//   if (state && code && !localStorage.getItem("access")) {
//     const config = {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     };

//     const details = {
//       state: state,
//       code: code,
//     };

//     const formBody = Object.keys(details)
//       .map(
//         (key) =>
//           encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
//       )
//       .join("&");

//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_URL}auth/o/google-oauth2/?${formBody}`,
//         config
//       );

//       dispatch({
//         type: GOOGLE_AUTH_SUCCESS,
//         payload: res.data,
//       });

//       dispatch(load_user());
//     } catch (err) {
//       dispatch({
//         type: GOOGLE_AUTH_FAIL,
//       });
//     }
//   }
// };

// export const facebookAuthenticate = (state, code) => async (dispatch) => {
//   if (state && code && !localStorage.getItem("access")) {
//     const config = {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     };

//     const details = {
//       state: state,
//       code: code,
//     };

//     const formBody = Object.keys(details)
//       .map(
//         (key) =>
//           encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
//       )
//       .join("&");

//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_URL}auth/o/facebook/?${formBody}`,
//         config
//       );

//       dispatch({
//         type: FACEBOOK_AUTH_SUCCESS,
//         payload: res.data,
//       });

//       dispatch(load_user());
//     } catch (err) {
//       dispatch({
//         type: FACEBOOK_AUTH_FAIL,
//       });
//     }
//   }
// };

// export const checkAuthenticated = () => async dispatch => {
//     if (localStorage.getItem('access')) {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         };

//         const body = JSON.stringify({ token: localStorage.getItem('access') });

//         try {
//             const res = await axios.post(`${import.meta.env.VITE_API_URL}auth/jwt/verify/`, body, config)

//             if (res.data.code !== 'token_not_valid') {
//                 dispatch({
//                     type: AUTHENTICATED_SUCCESS
//                 });
//             } else {
//                 dispatch({
//                     type: AUTHENTICATED_FAIL
//                 });
//             }
//         } catch (err) {
//             dispatch({
//                 type: AUTHENTICATED_FAIL
//             });
//         }

//     } else {
//         dispatch({
//             type: AUTHENTICATED_FAIL
//         });
//     }
// };
export const checkAuthenticated = () => {
  if (localStorage.getItem("user")) {
    // dispatch({
    //   type: AUTHENTICATED_SUCCESS,
    // });
    return true;
  } else {
    // dispatch({
    //   type: AUTHENTICATED_FAIL,
    // });
    return false;
  }
};

export const login = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}auth/login/`,
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
    // dispatch(load_user());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message,
    });
    console.log(err);
  }
};

export const signup =
  (fullName, email, password, confirmPassword, organizationName, type, phoneNumber) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };


    const jsonBody = {
      fullName,
      password,
      confirmPassword,
      organizationName,
      type,
      phoneNumber,
    };
    
    // Add the email field only if it's not an empty string
    if (email !== '') {
      jsonBody.email = email;
    }
    
    // Convert to JSON
    const body = JSON.stringify(jsonBody);
    console.log(body);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}auth/signup/`,
        body,
        config
      );
      console.log(res);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: SIGNUP_FAIL,
        payload: err.response.data.message,
      });
    }
  };

export const reset_password = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email });

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}auth/forgot-password/`,
      body,
      config
    );

    console.log(res);
    dispatch({
      type: PASSWORD_RESET_SUCCESS,
      payload: res.data.message,
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const reset_password_confirm =
  (token, newPassword, confirmPassword) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ token, newPassword, confirmPassword });

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}auth/reset-password/`,
        body,
        config
      );

      console.log(res);
      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
      });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const refresh = () => (dispatch) => {
  dispatch({
    type: REFRESH,
  });
};
