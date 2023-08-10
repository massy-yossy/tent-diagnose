import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/home/Home";
import { TenttypeRouter } from "./TenttypeRouter";

const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {TenttypeRouter.map((tent) => (
        <Route key={tent.path} path={tent.path} element={tent.compornent} />
      ))}
    </Routes>
  );
});

export default Router;
