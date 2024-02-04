import axios from "axios";
import { notify, notifyError } from "./toastify";

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

function getCookie(cookieName: string) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  console.log(decodedCookie);

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

const setConfig = () => {
  const authToken = getCookie("token");

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      ContentType: "application/json",
    },
    withCredentials: true,
  };

  return config;
};

export const userLogin = async (data: loginProps, router: any) => {
  await axios
    .post(`${api}/auth/login/`, data, {
      withCredentials: true,
    })
    .then((response) => {
      document.cookie = "token=" + response.data.data.access;
  
      if (response.data.status === "success") {
        console.log("authenticated user login");
        notify(response.data.message);
        router.push("/")
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
        console.log("authenticated user login");
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
