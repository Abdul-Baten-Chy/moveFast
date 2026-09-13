import axios from "axios";

function useExiosSecure() {
  const secureAxios = axios.create({
    baseURL: "http://localhost:3000",
  });
  return secureAxios;
}

export default useExiosSecure;
