import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import imgBannerAbout from "../../assets/images/banner/aboutBanner.png";
import Collapse from "../../components/collapse/Collapse";
import CollapseData from "../../datas/collapses.json";

// Composant About : Représente la page "À propos" de l'application.
const About = () => {
  return (
    <div className="about">
      {/* En-tête de la page */}
      <Header />

      <main>
        {/* Bannière de la page "À propos" */}
        <Banner image={imgBannerAbout} titre="" />

        <div className="collapse">
          <div className="collapse__dropdown">
            {/* Boucle sur les données des collapses pour afficher chaque section pliable */}
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  {/* Utilisation du composant Collapse pour chaque section */}
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
