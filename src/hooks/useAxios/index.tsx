import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const axiosInstance = axios.create({
    baseURL: "http://merorachana-cms/wp-json/wp/v2",
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // let controller = new AbortController();

  // useEffect(() => {
  //   return () => controller?.abort();
  // }, []);

  const fetchData = async (
    { url, method, data = {}, params = {} },
    onSuccess
  ) => {
    setLoading(true);
    // controller.abort();
    // controller = new AbortController();

    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        // signal: controller.signal,
      });
      setResponse(result.data);
      if (onSuccess) onSuccess(result.data);
    } catch (err: any) {
      if (axios.isCancel(err)) {
        console.error("Request canceled :", err.message);
      } else {
        setError(err.response ? err.response.data : err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return { response, error, loading, fetchData };
};
export default useAxios;
