import React from 'react';
import emptyStar from "../../assets/images/rate/startRempli.png";
import fullStar from "../../assets/images/rate/startVide.png";

// Composant Rate : Affiche une notation sous forme d'étoiles en fonction du score.
// Props :
//   - score : Le score à afficher sous forme d'étoiles.
function Rate(props) {
  // Récupération du score depuis les props
  const score = props.score;

  // Tableau des notes possibles (1 à 5)
  const notes = [1, 2, 3, 4, 5];

  return (
    <div className="rate-contenair">
      {/* Boucle sur chaque note pour afficher l'étoile correspondante */}
      {notes.map((note) =>
        score >= note ? (
          // Affiche une étoile pleine si le score est supérieur ou égal à la note
          <img
            key={note.toString()}
            className="etoile"
            src={emptyStar}
            alt="star"
          />
        ) : (
          // Affiche une étoile vide si le score est inférieur à la note
          <img
            key={note.toString()}
            className="etoile"
            src={fullStar}
            alt="star"
          />
        )
      )}
    </div>
  );
}

export default Rate;
