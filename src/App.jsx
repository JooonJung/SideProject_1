import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TempPage from "./TempPage";
import ReviewDetail from "./ReviewDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoomList from "./RoomList";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TempPage />} />
        <Route exact path="/review/:reviewId" element={<ReviewDetail />} />
        <Route exact path="/승계방" element={<RoomList />} />
      </Routes>
    </Router>
  );
}
