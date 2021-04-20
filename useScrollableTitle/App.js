import useScrollableTitles from "./useScrollableTitle";

export default function App() {
  const titles = [
    "안녕",
    "React.js",
    "ES6",
    "Javascript",
    "Vue.js",
    "Svelte",
    "Typescript",
    "REST API",
    "GraphQL",
    "잘가"
  ];
  const colors = [
    "#1F18AA",
    "#AA0D3F",
    "#B3316B",
    "#D59041",
    "#8D117A",
    "#BBA872",
    "#049780",
    "#897E42",
    "#D26A6B",
    "#F0EC1C"
  ];
  const { arr, mainTitle } = useScrollableTitles(titles, colors);

  return (
    <div style={{ height: "500vh", paddingTop: "50px" }}>
      <h1 {...mainTitle}>{mainTitle.text}</h1>
      {arr.map((title, index) => {
        return <h1 {...title}>{title.text}</h1>;
      })}
    </div>
  );
}
