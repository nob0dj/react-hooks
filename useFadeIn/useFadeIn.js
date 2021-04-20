import { useEffect, useRef } from "react";

const useFadeIn = ({ duration = 1, delay = 0, defaultStyle }) => {
  const elem = useRef();
  /**
   * css transition property
   * https://www.w3schools.com/cssref/css3_pr_transition.asp
   */
  useEffect(() => {
    elem.current.style.transition = `all ${duration}s ${delay}s`;
    elem.current.style.opacity = 1;
    elem.current.style.transform = "translateX(0)";
  });

  return { ref: elem, style: { ...defaultStyle, opacity: 0 } };
};

export default useFadeIn;
