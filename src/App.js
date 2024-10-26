import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MDBIcon } from "mdb-react-ui-kit";

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
import Services from "./pages/Services";
import Event from "./pages/Event";
import { useEffect } from "react";
import AOS from "aos";
import ChangePassword from "./pages/User/ChangePassword";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import EventRegistrations from "./pages/Admin/Events/EventRegistrations";
import ChatBot from "./components/ChatBot";
import ContactUsEnquiries from "./pages/Admin/Contacts/ContactUsEnquiries";
import GetServiceEnquiry from "./pages/Admin/Services/GetServiceEnquiry";
import GetAllUsers from "./pages/Admin/Users/GetAllUsers";
import GetAllCourses from "./pages/Admin/Courses/GetAllCourses";
import CreateCourse from "./pages/Admin/Courses/CreateCourse";
import GetCourseEnquiries from "./pages/Admin/Courses/GetCourseEnquiries";
import Cart from "./pages/User/Cart";
import PaymentSuccess from "./pages/Payment/PaymentSuccess";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

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
        <Route path="/courses/course/:id" element={<Course />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfServices />} />
        <Route
          path="/cancellation-and-refund"
          element={<CancellationAndRefund />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/event/:slug" element={<Event />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />

        {/* //! Protected Routes for Users */}
        <Route path="/dashboard" element={<Private />}>
          <Route path="user/profile/:userid" element={<Profile />} />
          <Route path="user/courses" element={<MyCourses />} />
          <Route path="user/settings" element={<Settings />} />
          <Route
            path="user/profile/:userid/change-password"
            element={<ChangePassword />}
          />
          <Route path="user/cart" element={<Cart />} />
          <Route path="user/payment" element={<PaymentSuccess />} />
        </Route>

        {/* //! Protected Routes for Users */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/profile/:userid" element={<Profile />} />
          <Route path="admin/settings" element={<Settings />} />
          <Route
            path="admin/profile/:userid/change-password"
            element={<ChangePassword />}
          />
          <Route
            path="admin/events/get-event-registrations"
            element={<EventRegistrations />}
          />
          <Route
            path="admin/contacts/get-contact-enquiries"
            element={<ContactUsEnquiries />}
          />
          <Route
            path="admin/services/get-service-enquiries"
            element={<GetServiceEnquiry />}
          />
          <Route path="admin/users/get-all-users" element={<GetAllUsers />} />
          <Route
            path="admin/courses/get-all-courses"
            element={<GetAllCourses />}
          />
          <Route
            path="admin/courses/create-course"
            element={<CreateCourse />}
          />
          <Route
            path="admin/courses/get-course-enquiries"
            element={<GetCourseEnquiries />}
          />
        </Route>

        {/*//! If above routes are not found then the "*" sign will show the specified page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <div
        style={{ borderRadius: "50%", cursor: "pointer", zIndex: "1" }}
        onClick={() => window.scrollTo({ top: 0, left: 0 })}
      >
        <MDBIcon
          fas
          icon="arrow-circle-up"
          style={{
            fontSize: "28px",
            position: "fixed",
            bottom: "22px",
            right: "22px",
            padding: "14px",
            margin: 0,
            borderRadius: "50%",
            boxShadow: "none",
          }}
          color="white"
          background="linearGradient(to right,#9d50bb 0%,#6e48aa 51%,#9d50bb 100%)"
          className="btn-grad"
        />
      </div>

      <ChatBot />
    </>
  );
}

export default App;
