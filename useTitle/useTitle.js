import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  useEffect(() => {
    document.querySelector("title").innerText = title;
  }, [title]);
  return {title, setTitle};
};