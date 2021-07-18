import React from "react";

function Error() {
  return (
    // Affichage d'un message d'erreur si l'url est incorrecte
    <div className="mt-5 text-center">
      <h1 className="pt-5">OOPS ! Erreur 404</h1>
      <a href="/">
        <h2>Retour vers l'accueil </h2>
      </a>
    </div>
  );
}

export default Error;
