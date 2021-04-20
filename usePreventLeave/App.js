import usePreventLeave from "./usePreventLeave";

export default function App() {
  const { enablePreventLeave, disablePreventLeave } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePreventLeave}>See me before you go!</button>
      &nbsp;
      <button onClick={disablePreventLeave}>
        you can go without any alert!
      </button>
    </div>
  );
}
