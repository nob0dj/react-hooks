import useScroll from "./useScroll";

export default function App() {
  const { state } = useScroll();

  return (
    <div style={{ height: "500vh", paddingTop: "50px" }}>
      <h1
        style={{
          position: "fixed",
          top: 0,
          color: state.y > 500 ? "deeppink" : "springgreen"
        }}
      >
        hello useScroll
      </h1>
    </div>
  );
}
