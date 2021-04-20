import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    //x, y로 변수명 재할당
    const { scrollX: x, scrollY: y } = window;
    // console.log(`x = ${x}, y = ${y}`);

    setState({ x, y });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { state };
};

export default useScroll;
