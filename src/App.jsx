import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./static/Header";
import { Home } from "./pages/home";
import { Destination } from "./pages/destination";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}
