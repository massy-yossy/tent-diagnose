/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FC, useState, useEffect } from "react";

import TestPage from "../testpage/pages/TestPage";
import { useAnswer } from "../../hooks/useAnswer";
import Startpage from "../startpage/Startpage";

const Home: FC = memo(() => {
  // ホームページ用
  const [homePage, setHomePage] = useState(false);
  // 診断ページ用
  const [testPage, settestPage] = useState(true);

  const { setAnswer } = useAnswer();

  useEffect(() => {
    setAnswer([]);
  }, []);

  return (
    <>
      {homePage && (
        <Startpage
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
