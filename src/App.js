import { Route, Routes } from "react-router-dom";
import "./App.css";

//! Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import { Toaster } from "react-hot-toast";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Private from "./components/Routes/Private";
import Profile from "./pages/User/Profile";
import MyCourses from "./pages/User/MyCourses";
import Settings from "./pages/User/Settings";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Blogs from "./pages/Blogs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfServices from "./pages/TermsOfServices";
import CancellationAndRefund from "./pages/CancellationAndRefund";
import Events from "./pages/Events";
import Course from "./pages/Course";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfServices />} />
        <Route path="/cancellation-and-refund" element={<CancellationAndRefund />} />

        {/* //! Protected Routes for Users  */}
        <Route path="/dashboard" element={<Private />}>
          <Route path="user/profile/:userid" element={<Profile />} />
          <Route path="user/courses" element={<MyCourses />} />
          <Route path="user/settings" element={<Settings />} />
        </Route>

        {/*//! If above routes are not found then the "*" sign will show the specified page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
