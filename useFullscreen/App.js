import useFullscreen from "./useFullscreen";

export default function App() {
  //callback함수 : alert사용불가(fullscreen mode시 해제됨.)
  const callback = () => console.log("fullscreen mode으로 전환했습니다.");
  const { elem, requestFullscreen, exitFullscreen } = useFullscreen(callback);

  return (
    <div>
      <h1>hello useFullscreen</h1>
      <div style={{ position: "relative" }}>
        <img
          ref={elem}
          onClick={exitFullscreen}
          src="https://d.pr/i/2mBrBb+"
          width="80%"
        />
        <button
          onClick={requestFullscreen}
          style={{ position: "absolute", left: "10px", top: "10px" }}
        >
          fullscreen
        </button>
      </div>
    </div>
  );
}
