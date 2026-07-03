import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import "./index.css";


/* Lazy Load Pages */
const Home = lazy(() => import("./Pages/Home"));

const About = lazy(() => import("./Pages/About"));

const NotFound = lazy(() => import("./Pages/NotFound"));
const Experience = lazy(() => import("./Pages/Experience"));
const Contact = lazy(() => import("./Pages/Contact"));
const Project = lazy(() => import("./Pages/Project"));


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen text-xl font-semibold">
            Loading...
          </div>
        }
      >
        <Routes>
          {/* Layout Route */}
          <Route element={<App />}>
             
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Experience" element={<Experience/>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
