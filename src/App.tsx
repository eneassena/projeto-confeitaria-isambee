import React from "react";

import CardapioPage from "ui/pages/CardapioPage/Cardapio";
import ContatoPage from "ui/pages/ContatoPage/Contato";
import HomePage from "ui/pages/HomePage/Home";
import Header from "ui/components/header/Header";

import "./styles/App.css";

import RequiredAuthPageToken from "auth.api";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route
              path="/cardapio"
              element={
                <RequiredAuthPageToken nome={""}>
                  <CardapioPage />
                </RequiredAuthPageToken>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
