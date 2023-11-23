import { NavLink } from "react-router-dom";

// Composant NoPage : Affiche une page d'erreur 404.
function NoPage() {
  return (
    <>
      {/* Conteneur de l'erreur */}
      <div className="errorContainer">
        {/* Numéro de l'erreur */}
        <p className="errorContainer__Number">404</p>

        {/* Texte de l'erreur */}
        <p className="errorContainer__Text">
          Oups! La page que vous demandez n'existe pas.
        </p>

        {/* Lien pour retourner à la page d'accueil */}
        <NavLink to="/" className="errorContainer__Link">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </>
  );
}

export default NoPage;
