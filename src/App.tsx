import React from "react";

import { NotFoundPage } from "ui/pages/NotFoundPage/NotFoundPage";

import "./styles/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
