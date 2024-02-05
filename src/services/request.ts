import axios from "axios";
import { notify, notifyError } from "./toastify";
import { access } from "fs";

const api = "https://shotitz-api.vercel.app/api/v1";

interface registerProps {
  first_name: string;
  last_name: string;
  email: string;
  password: any;
  terms_agreement: boolean;
}

interface OTPDetails {
  email: string;
  otp: number;
}

interface loginProps {
  email: string;
  password: any;
}

export function getCookie(cookieName: string) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null; // Return null if the cookie is not found
}

const setConfig = (accessToken: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  return config;
};

const refreshToken = async () => {
  await axios
    .post(
      `${api}/auth/refresh/`,
      { refresh: getCookie("token") },
      { withCredentials: true }
    )
    .then((response) => {
      if (response.data.status === "success") {
        document.cookie = "token=" + response.data.data.refresh;
        localStorage.setItem("accessToken", response.data.data.access);
        console.log("refresh: " + response);
        notify(response.data.message);
      }
    })
    .catch((err) => {
      console.log("refresh error");
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
      console.log(err);
    });
};

axios.interceptors.response.use(
  (response) => {
    console.log("responding");
    // If the response is successful, return it directly
    return response;
  },
  async (error) => {
    // If the error is a 401, attempt to refresh the token
    if (error.response.status === 401 && !error.config._isRetry) {
      try {
        // Mark the request for retry to prevent an infinite loop
        error.config._isRetry = true;

        // Refresh the token
        console.log("automatically refreshing token...");
        console.log(getCookie("token"));
        await refreshToken();

        // Retry the original request
        return axios(error.config);
      } catch (refreshError) {
        console.log("refresh error");
        // Handle token refresh failure
        return Promise.reject(refreshError);
      }
    }
    else if(error.response.status === 401 && error.config._isRetry){

    }

    // For other errors, reject the promise
    return Promise.reject(error);
  }
);

export const userLogin = async (data: loginProps, router: any) => {
  await axios
    .post(`${api}/auth/login/`, data, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
      if (response.data.status === "success") {
        document.cookie = "token=" + response.data.data.refresh;
        localStorage.setItem("accessToken", response.data.data.access);
        console.log("authenticated user login");
        notify(response.data.message);
        router.push("/dashboard");
      }
    })
    .catch((err) => {
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
      console.log(err);
    });
};

export const userRegistration = async (data: registerProps, router: any) => {
  await axios
    .post(`${api}/auth/register/`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.message) {
        localStorage.setItem("userEmail", data.email);
        router.push("/auth/otp");
      }
      notify(response.data.message);
    })
    .catch((err) => {
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
      console.log(err);
    });
};

export const verifyOTP = async (data: OTPDetails, router: any) => {
  await axios
    .post(`${api}/auth/verify-email/`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
      if (response.data.message) {
        notify(response.data.message);
        router.push("/auth/login");
      }
    })
    .catch((err) => {
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
      console.log(err);
    });
};

export const recentBookingsAndImages = async (accessToken: string) => {
  await axios
    .get(`${api}/store/bookings-and-images/`, setConfig(accessToken))
    .then((response) => {
      console.log(response);
      if (response.data.status === "success") {
        console.log(response.data.message);
      }
    })
    .catch((err) => {
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
    });
};
