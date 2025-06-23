import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}api/auth`,
});

API.interceptors.request.use((req) => {
  const token = Cookies.get("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
