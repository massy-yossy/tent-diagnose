import "./App.scss";

import { AnswerProvider } from "./providers/AnswerProvider";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <AnswerProvider>
        <Router />
      </AnswerProvider>
    </BrowserRouter>
  );
}

export default App;
