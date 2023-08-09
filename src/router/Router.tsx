import {FC, memo} from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../components/home/Home"

const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  )
})

export default Router
