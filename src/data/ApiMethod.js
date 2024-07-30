import dotenv from "dotenv";

dotenv.config("../../../");

const envi = "DEV"

export const ROOT_API = `${envi=="DEV"?"http://localhost:3000":"https://faster-in.vercel.app"}`;

export const ROOT_API_V1 = `${ROOT_API}/api/v1`;

export const LOGIN_API =  `${ROOT_API_V1}/auth/login`;
export const REGISTER_API =  `${ROOT_API_V1}/auth/register`;
export const LOGOUT_API =  `${ROOT_API_V1}/auth/logout`;

export const USER_ACCOUNT_API = `${ROOT_API_V1}/account`

export const USER_ACCOUNT_PHONE =(phone)=>{
  return `${USER_ACCOUNT_API}/${phone}`
} 

export const COUNTRY_API = `${ROOT_API_V1}/country`
export const SINGLE_COUNTRY_API =(id)=>{
  return `${COUNTRY_API}/${id}`
} 


export const PRICE_API = `${ROOT_API_V1}/price`

export const QUOT_PRICE_API =(from,to,weight)=>{
  return `${PRICE_API}/price-quot/?from=${from}&to=${to}&weight=${weight}`
}




export const getRequestSend = async (url, header) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
    });
    const data = await response.json();
    return { data: data.data, message: data.message, status: data.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};

export const postRequestSend = async (url, header, dataSend) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
      body: JSON.stringify(dataSend),
    });
    const data = await response.json();
    return { data: data.data, message: data.message, status: data.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};

export const putRequestSend = async (url, header, dataSend) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
      body: JSON.stringify(dataSend),
    });
    const data = await response.json();
    return { data: data.data, message: data.message, status: data.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};

export const deleteRequestSend = async (url, header) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
    });
    const data = await response.json();
    return { data: data.data, message: data.message, status: data.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};
