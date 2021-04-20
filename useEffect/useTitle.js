import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  useEffect(() => {
    document.querySelector("title").innerText = title;
  }, [title]);
  return setTitle;
};

export default useTitle;