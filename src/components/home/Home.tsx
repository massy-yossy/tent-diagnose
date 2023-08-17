/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FC, useState, useEffect } from "react";

import { useAnswer } from "../../hooks/useAnswer";

import TestPage from "../testPage/pages/TestPage";
import StartPage from "../startPage/page/StartPage";



const Home: FC = memo(() => {
  // ホームページ用
  const [homePage, setHomePage] = useState(true);
  // 診断ページ用
  const [testPage, settestPage] = useState(false);

  const { setAnswer } = useAnswer();

  useEffect(() => {
    setAnswer([]);
  }, []);

  return (
    <>
      {homePage && (
        <StartPage
          homePage={homePage}
          setHomePage={setHomePage}
          testPage={testPage}
          settestPage={settestPage}
        />
      )}
      {testPage && <TestPage />}
    </>
  );
});

export default Home;
