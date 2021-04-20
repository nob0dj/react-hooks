import useMouseLeave from "./useMouseLeave";

export default function App() {
  const bgChanger = (bool) => {
    const color = bool ? "springgreen" : "deeppink";
    document.body.style.backgroundColor = color;
  };
  const { target } = useMouseLeave(bgChanger);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 ref={target}>HelloWorld</h1>
    </>
  );
}
