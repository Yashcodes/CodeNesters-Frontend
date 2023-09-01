import { Route, Routes } from "react-router-dom";
import "./App.css";

//! Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

//! Stylesheets
import "./components/Layout/styles/Header.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
