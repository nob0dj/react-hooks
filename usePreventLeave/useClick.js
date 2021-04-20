import { useEffect, useRef } from "react";

const useClick = (f) => {
  const elem = useRef();
  //componentDidMount만 실행!
  //componentWillUnMount처리 하지 않으면 eventHandler 누적됨.
  //componentDidMount에서 요소가 존재할때  추가해야한다.
  useEffect(() => {
    console.log(elem);
    elem.current.addEventListener("click", f);

    //effect clenaup function : componentWillUnMount
    return () => {
      console.log("effect clenaup function");
      elem.current?.removeEventListener("click", f);
    };
  }, []);
  return elem;
};

export default useClick;