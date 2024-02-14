import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Search from "./routes/Search";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
