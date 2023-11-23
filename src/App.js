// Importation des bibliothèques et composants nécessaires
import React from "react";
import "./styles/app.scss";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import FichLogement from "./pages/logement/FichLogment";
import NoPage from "./pages/error/NoPage";

// Composant principal de l'application React
const App = () => {
 return (
    <HashRouter>
      <Routes>
        {/* Route pour rediriger vers la page d'accueil en cas d'URL '/' */}
        <Route path="/" element={<Navigate replace to="/accueil" />} />

        {/* Route pour la page d'accueil */}
        <Route path="/accueil" element={<Home />} />

        {/* Route pour la page À propos */}
        <Route path="/about" element={<About />} />

        {/* Route pour la page des fiches de logement, avec paramètre d'identifiant ':id' */}
        <Route path="/logement/:id" element={<FichLogement />} />

        {/* Route pour gérer les pages non reconnues */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
 );
};

export default App;