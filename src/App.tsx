import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "ui/components/header/Header"
import HomePage from "ui/pages/HomePage/Home";
import ContatoPage from "ui/pages/ContatoPage/Contato";
import CardapioPage from "ui/pages/CardapioPage/Cardapio";

import "./styles/App.css";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>    
          <Route element={<Header />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/cardapio" element={<CardapioPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
