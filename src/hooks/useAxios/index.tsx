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

  let controller = new AbortController();

  useEffect(() => {
    return () => controller?.abort();
  }, []);

  const fetchData = async ({ url, method, data = {}, params = {} }) => {
    setLoading(true);
    console.log(url);
    console.log(method);
    controller.abort();
    controller = new AbortController();

    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        signal: controller.signal,
      });
      setResponse(result.data);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.error("Request canceled :", err);
      } else {
        setError(err.response ? err.response.data : err);
      }
    } finally {
      setLoading(false);
    }
  };
  return { response, error, loading, fetchData };
};
export default useAxios;
