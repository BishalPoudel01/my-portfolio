import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Index from "./components/HomePage/Index";


const App = () => {
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </>
  );
};

export default App;
