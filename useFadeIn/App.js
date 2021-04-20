import useFadeIn from "./useFadeIn";

export default function App() {
  const elem1 = useFadeIn({
    duration: 1
  });
  const elem2 = useFadeIn({
    duration: 3,
    delay: 1,
    defaultStyle: {
      transform: "translateX(100px)"
    }
  });
  return (
    <>
      <h1 {...elem1}>hello useFadeIn</h1>
      <p {...elem2}>https://www.w3schools.com/cssref/css3_pr_transition.asp</p>
    </>
  );
}
