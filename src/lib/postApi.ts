import axios from "axios";
import Cookies from "js-cookie";

const PostAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}api/posts`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

PostAPI.interceptors.request.use((req) => {
  const token = Cookies.get("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default PostAPI;
