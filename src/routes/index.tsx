import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Favorites } from "../pages/Favorites";
import { Pokemon } from "../pages/Pokemon";

export const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="/pokemon/:id" element={<Pokemon />} />
  </Routes>
);
