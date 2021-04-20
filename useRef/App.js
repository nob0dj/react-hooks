import {useRef} from 'react';

export default function App() {
  const potato = useRef();
  // setTimeout(() => console.log(Date.now(), potato), 3000);

  const elem = useClick(() => {
    console.log("hello world");
  });

  return (
    <div className="App">
      <h1>Hello useRef</h1>
      <p>
        <input ref={potato} placeholder="Name" />
      </p>
      <h1>Hello useClick</h1>
      <p>
        <button ref={elem}>click me, dude</button>
      </p>
    </div>
  );
}
