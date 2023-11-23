import React from "react";

// Composant Banniere : Affiche une bannière avec une image, un fond sombre et du texte.
function Banniere({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <div className="banner__sombre"></div>
      <span className="banner__txt">{texte}</span>
    </div>
  );
}

export default Banniere;
