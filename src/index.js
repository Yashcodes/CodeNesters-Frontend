import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/Auth";
import { FirebaseProvider } from "./context/Firebase";
import { UserProfileProvider } from "./context/UserProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseProvider>
    <AuthProvider>
      <UserProfileProvider>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Router>
      </UserProfileProvider>
    </AuthProvider>
  </FirebaseProvider>
);
