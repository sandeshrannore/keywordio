import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import CreateAds from "../pages/CreateAds.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import TextAdForm from "../components/TextAdForm.jsx";
import MediaAdForm from "../components/MediaAdForm.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/ads" element={<CreateAds />} />
      <Route path="/text-ad" element={<TextAdForm />} />
      <Route path="/media-ad" element={<MediaAdForm />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoutes;
