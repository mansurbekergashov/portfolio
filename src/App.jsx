import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProjects from "./pages/AllProjects";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <BrowserRouter className="bg-white dark:bg-[#050505] text-[#050505] dark:text-white pt-10">
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home dark={dark} />}></Route>
        <Route path="/allProjects" element={<AllProjects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
