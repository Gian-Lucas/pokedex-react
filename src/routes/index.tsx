import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Favorites } from "../pages/Favorites";

export const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/favorites" element={<Favorites />} />
  </Routes>
);
