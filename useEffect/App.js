import useTitle from './useTitle'

export default function App() {
  const [no, setNo] = useState(0);
  const [name, setName] = useState("홍길동");

  //componentDidMount, componentDidUpdate, componenWillUpdate
  // useEffect(() => console.log("hello world"));

  //dependency
  //componentDidMount
  // useEffect(() => console.log("hello world"), []);

  //componentDidMount, 특정 component에 대해 componenDidUpdate
  useEffect(() => console.log("hello world"), [name]);

  const setTitle = useTitle("Loading...");
  // setTimeout(() => setTitle("Home"), 3000);

  return (
    <div className="App">
      <div>
        <p>{no}</p>
        <button onClick={() => setNo(no + 1)}>+</button>
        <button onClick={() => setNo(no - 1)}>-</button>
      </div>
      <br />
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={({ target: { value } }) => {
            setName(value);
            setTitle(value);
          }}
        />
      </div>
    </div>
  );
}
