import { useEffect, useState } from "react";

const useNetwork = () => {
  const [status, setStatus] = useState(navigator.onLine);
  const handler = () => {
    setStatus(window.location.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  }, []);
  return {
    status,
    style: {
      // 동적으로 status를 추적해 color를 결정한다.
      color: status ? "#000" : "#f00"
    }
  };
};

export default useNetwork;