import React from "react";
import ReactDOM, { hydrateRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Root from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/Auth";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const App = (
  <AuthProvider>
    <Router>
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    </Router>
  </AuthProvider>
);

if (container.hasChildNodes()) {
  hydrateRoot(container);
} else {
  root.render(App);
}
