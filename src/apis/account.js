import { axiosInstance, getResponse, KEY_API } from './index';

export async function apiRegister(obj, apiSucc) {
  await axiosInstance
    .post(`${KEY_API.ACCOUNT}/register`, obj)
    .then((res) => {
      const resResult = getResponse(res);
      apiSucc(resResult);
    })
    .catch((error) => {
      if (error?.response?.data) apiSucc(error.response.data);
    });
}

export async function apiLogin(email, password, apiSucc) {
  const obj = {
    email,
    password,
  };
  await axiosInstance
    .post(`${KEY_API.AUTH}/getToken`, obj)
    .then((res) => {
      const resResult = getResponse(res);
      apiSucc(resResult);
    })
    .catch((error) => {
      if (error?.response?.data) apiSucc(error.response.data);
    });
}

export async function apiLogout(email, apiSucc) {
  const obj = {
    email,
  };
  await axiosInstance.post(`${KEY_API.ACCOUNT}/logout`, obj).then((res) => {
    const resResult = getResponse(res);
    apiSucc(resResult);
  });
}

export async function apiWithdrawal(obj, apiSucc) {
  await axiosInstance.post(`${KEY_API.ACCOUNT}/withdrawal`, obj).then((res) => {
    const resResult = getResponse(res);
    apiSucc(resResult);
  });
}
