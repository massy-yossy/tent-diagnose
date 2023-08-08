import { useState } from "react";

import "./App.scss";
import Home from "./components/home/Home";
import TestPage from "./components/testpage/TestPage";
import { AnswerProvider } from "./providers/AnswerProvider";

function App() {
  // ホームページ用
  const [homePage, setHomePage] = useState(true);
  // 診断ページ用
  const [testPage, settestPage] = useState(false);

  return (
    <AnswerProvider>
      {homePage && <Home setHomePage={setHomePage} settestPage={settestPage} />}
      {testPage && <TestPage />}
    </AnswerProvider>
  );
}

export default App;
