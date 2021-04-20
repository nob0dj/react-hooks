import defaultAxios from "axios";
import { useEffect, useState, useRef } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  //console.log(axiosInstance);
  const [status, setStatus] = useState({
    loading: true,
    error: null,
    data: null
  });
  if (!options || !options.url) return;

  useEffect(() => {
    axiosInstance(options).then((response) => {
      // console.log(response);
      // console.log(status);

      setStatus({
        ...status,
        loading: false,
        data: response.data
      });
    });
  }, []);

  return { status };
};

export default useAxios;