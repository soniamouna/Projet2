import React, { useEffect, useState } from "react";
import Cards from "../components/cards/Cards";

function Favoris() {
  // Création du state pour la liste des favoris 
  const [listFavState, setListFav] = useState([]);

  //Après le chargement de la page,
  //on passe les données du localStorage au state sous forme de JSON
  useEffect(() => {
    setListFav(JSON.parse(localStorage.getItem("event-fav")));
  }, []);

  return (
    <div className="container mt-5 pb-5">
      <h1 className="mt-5 pt-5 text-center font-family-paris titlesearch">
        Liste des favoris :
      </h1>
      {listFavState && (
        <div className=" col-lg-12 row g-4">
          {/* S'il n'y pas de favoris un message nous l'informera 
          sinon les favoris s'afficheront sous forme de plusieurs card*/}
          {listFavState.length ? (
            <div className="row col-lg-12">
              {listFavState.map((value, i) => (
                <div className="col-lg-4">
                  {/* Appel du component card envoie des données par les props*/}
                  <Cards recordState={value} />
                </div>
              ))}
            </div>
          ) : (
            <h1 className="text-center">Aucun favoris ! </h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Favoris;
