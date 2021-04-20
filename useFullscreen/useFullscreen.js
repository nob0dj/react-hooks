import { useRef } from "react";

const useFullscreen = (callback) => {
  const elem = useRef();
  const requestFullscreen = () => {
    //cross browsing issue 처리
    if (elem.current.requestFullscreen)
      //Promise객체 리턴
      elem.current.requestFullscreen().then(() => {
        callback();
      });
    else if (elem.current.mozRequestFullscreen)
      elem.current.mozRequestFullscreen();
    // firefox
    else if (elem.current.webkitRequestFullscreen)
      elem.current.webkitRequestFullscreen();
    // opera
    else if (elem.current.msRequestFullscreen)
      elem.current.msRequestFullscreen(); // ie
  };
  const exitFullscreen = () => {
    if (document.fullscreen) document.exitFullscreen();
  };
  return { elem, requestFullscreen, exitFullscreen };
};

export default useFullscreen;
