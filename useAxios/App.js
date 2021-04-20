import useAxios from './useAxios';

const App = () => {
  const {
    status: { loading, error, data }
  } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });

  const [loadingDot, setLoadingDot] = useState("loading");
  useEffect(() => {
    setTimeout(() => {
      setLoadingDot(loadingDot + ".");
    }, 100);
  }, [loadingDot]);

  return (
    <div>
      <h1>hello useAxios</h1>
      <p>{loading ? <span>{loadingDot}</span> : "data load complete!"}</p>
      <p>{data != null ? JSON.stringify(data) : ""}</p>
    </div>
  );
};

export default App;
