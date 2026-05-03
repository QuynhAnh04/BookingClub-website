import { Routes, Route } from "react-router-dom"
// import Home from "../pages/Home"
import Login from "../pages/Login/Login.tsx"
import Register from "../pages/Register/Register"
import Me from "../pages/Me/Me"
import CourtDetailGalleryDemo from "../pages/CourtDetail/CourtDetailGalleryDemo"
import CourtSearch from "../pages/CourtSearch/CourtSearch"

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/me" element={<Me />} />
      <Route path="/court-detail-demo" element={<CourtDetailGalleryDemo />} />
      <Route path="/courts/search" element={<CourtSearch />} />
    </Routes>
  )
}

export default AppRoutes
