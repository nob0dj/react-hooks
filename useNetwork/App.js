import useNetwork from "./useNetwork";

export default function App() {
  const { status, style } = useNetwork();
  console.log(status);
  return (
    <>
      <h1 style={style}>{status ? "We are online." : "We are offline."}</h1>
    </>
  );
}
