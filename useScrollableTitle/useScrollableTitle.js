import { useEffect, useRef, useState } from "react";

const getRandomColor = () => {
  console.log("getRandom");
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const useScrollableTitle = (titles, colors) => {
  if (titles === undefined || !Array.isArray(titles))
    throw new Error("titles should be an array consist of string.");
  if (colors === undefined || !Array.isArray(colors))
    throw new Error("colors should be an array consist of string.");

  const [mainTitle, setMainTitle] = useState({
    text: "hello useScrollableTitle",
    style: {
      position: "fixed",
      top: 0,
      color: "#000",
      textDecoration: "underline"
    }
  });

  const arr = titles.map((title, index) => ({
    key: `title${index}`,
    id: `title${index}`,
    ref: useRef(),
    text: title,
    style: { marginBottom: "500px", color: colors[index] }
  }));

  const onScroll = () => {
    const { scrollY } = window;
    let currentColor = "#000",
      currentText = "hello useScrollableTitle";
    arr.some((title) => {
      if (scrollY >= title.offsetTop) {
        currentText = title.text;
        currentColor = title.style.color;
        return false; // some함수내 return true -> break, return false -> continue
      }
      // console.log(title.offsetTop, scrollY);
      return true;
    });
    setMainTitle({
      ...mainTitle,
      text: currentText,
      style: {
        ...mainTitle.style,
        color: currentColor
      }
    });
  };

  useEffect(() => {
    arr.forEach((title, index) => {
      // console.log(curr.ref.current.offsetTop);
      const {
        ref: {
          current: { offsetTop }
        }
      } = title;
      title.offsetTop = offsetTop;
    });
    // console.log(arr);

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { arr, mainTitle };
};

export default useScrollableTitle;
