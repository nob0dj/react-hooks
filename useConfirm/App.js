import { useRef } from "react";
import useConfirm from "./useConfirm.js";

export default function App() {
  const elem = useRef();
  const onConfirm = () => {
    elem.current.textContent = "Bye...";
    setTimeout(() => (elem.current.textContent = "Hello World"), 5000);
  };
  const onCancel = () => {
    elem.current.textContent = "Not yet deleted...";
    setTimeout(() => (elem.current.textContent = "Hello World"), 5000);
  };
  const confirmAction = useConfirm({
    message: "Are you sure?",
    onConfirm,
    onCancel
  });
  return (
    <div className="App">
      <h1 ref={elem}>Hello useConfirm</h1>
      <button onClick={confirmAction}>Delete the world</button>
    </div>
  );
}
