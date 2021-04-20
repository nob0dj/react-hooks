import { useEffect, useRef } from "react";

/**
 * 지정한 target요소에서 mouseleave이벤트 발생시
 * 위/아래 좌표값(offsetY)을 통해 처리를 달리한다.
 *
 * @param {} onMouseLeave
 */
const useMouseLeave = (onMouseLeave) => {
  const target = useRef();
  if (!onMouseLeave || typeof onMouseLeave !== "function") return;

  const handler = (e) => {
    console.log(e);
    const { offsetY } = e;
    onMouseLeave(offsetY <= 0);
  };
  useEffect(() => {
    target.current.addEventListener("mouseleave", handler);
    return () => {
      target.current.removeEventListener("mouseleave", handler);
    };
  }, []);

  return { target };
};

export default useMouseLeave;
