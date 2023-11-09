import "./App.scss";

import { AnswerProvider } from "./providers/AnswerProvider";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

import { Global, css } from "@emotion/react";

const globalCss = css`
  @font-face {
    font-family: "genEi";
    src: url(./fonts/GenEiAntiquePv5-M.woff) format("woff"),
      url(./fonts/GenEiAntiquePv5-M.eot) format("eot");
    font-display: swap;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AnswerProvider>
        <Global styles={globalCss} />
        <Router />
      </AnswerProvider>
    </BrowserRouter>
  );
}

export default App;
