import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import CreateUser from "./components/CreateUser"
import Sample from "./components/Sample"
import View from "./components/View"
import RewardNew from "./components/RewardNew"
import Home from "./components/Home"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<View />} />
        <Route path="/new" element={<CreateUser />} />
        <Route path="/:id/reward/new" element={<RewardNew />} />
        <Route path="/" element={<Sample />} />
      </Routes>
    </>
  )
}

export default App
