import React from "react";
import { Link } from "react-router-dom";
import logements from "../../datas/logement.json";
import Card from "../cards/Card";

// Composant Gallery : Affiche une galerie de logements.
const Gallery = () => {
  return (
    <div className="home_gallery">
      {/* Boucle sur chaque logement dans le fichier JSON */}
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            {/* Lien vers la page détaillée du logement */}
            <Link to={`/logement/${logement.id}`}>
              {/* Utilisation du composant Card pour afficher les détails du logement */}
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
