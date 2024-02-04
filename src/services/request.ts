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

export const userLogin = async (data: any) => {
  await axios
    .post(`${api}/auth/login/`, data, {
      withCredentials: true,
    })
    .then((response) => {
      // document.cookie = "token=" + response.data.payload.token;
      console.log(response)
      if (response.data.payload) {
        console.log("authenticated user login");
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

export const userRegistration = async (data: registerProps) => {
  await axios
    .post(`${api}/auth/register/`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      // document.cookie = "token=" + response.data.payload.token;
      if (response.data.message) {
        console.log("authenticated user login");
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