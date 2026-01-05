import { Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Superstars from "./components/Superstars";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/superstars" element={<Superstars />} />
    </Routes>
  );
}
