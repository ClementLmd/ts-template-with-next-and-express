import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../components/App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My TypeScript App</title>
    </Helmet>
    <App />
  </React.StrictMode>
);
