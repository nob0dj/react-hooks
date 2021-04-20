import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import App from "./useState/App";
// import App from "./useScoreInput/App";
// import App from "./useConfirm/App";
// import App from "./usePreventLeave/App";
// import App from "./useRef/App";
// import App from "./useEffect/App";
// import App from "./useMouseLeave/App";
// import App from "./useTab/App";
// import App from "./useFadeIn/App";
// import App from "./useNetwork/App";
// import App from "./useScroll/App";
// import App from "./useScrollableTitle/App";
// import App from "./useFullscreen/App";
// import App from "./useNotification/App";
import App from "./useAxios/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
