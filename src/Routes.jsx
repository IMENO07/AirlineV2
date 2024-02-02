import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Statistics = React.lazy(() => import("pages/Statistics"));
const Flights = React.lazy(() => import("pages/Flights"));
const Edit = React.lazy(() => import("pages/Edit"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
