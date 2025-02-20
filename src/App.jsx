import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./static/Header";
import { Home } from "./pages/home";
import { Destination } from "./pages/destination";
import { Crew } from "./pages/crew";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </BrowserRouter>
  );
}
