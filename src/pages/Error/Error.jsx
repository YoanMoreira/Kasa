import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import '../../styles/ErrorPage.scss';
import Navbar from '../../components/Navbar/Navbar';

function Error() {
  return (
    <div>
      <Navbar />
      <main>
        <div className='errorPage'>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </main>
    </div>
  );
}

export default Error;
