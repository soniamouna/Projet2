import React from "react";
import Axios from "axios";
import { useState } from "react";
import "../App.css";
import { useEffect } from "react";
import Cards from "../components/cards/Cards";

function Accueil() {
  const url =
    "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_start%20desc&rows=1";

  // Création du state pour sauvegarder les données de l'actualité la plus récente 

  const [recordState, setRecord] = useState(null);

  //Après le chargement de la page,
  //on récupère l'API pour passer les données
  //de l'événement le plus récente (en fonction de date_start) de l'API au state
  useEffect(() => {
    Axios.get(url).then((res) => {
      setRecord(res.data.records[0]);
    });
  }, []);

  return (
    <div className="pt-5 container col-lg-12 col-md-12 col-sm-12 ">
      <div className="py-5">
        <div className="text-center justify-content-center ">
          <h1 className="col-lg-12 col-sm-12 titlehome font-family-paris">
            Bienvenue sur Paris Events
          </h1>
          <hr className="hrhome m-auto"></hr>
          <p className="font-family-zen-loop phome pt-3">
            L'application qui permet de rechercher en direct les prochains
            événements Parisiens
          </p>
          <h2 className="font-family-crimson">Actualité</h2>
          <p>Le dernier événement publié :</p>
        </div>

        {/* Appel du component Cards et envoie des données par les props */}
        <Cards recordState={recordState} />
      </div>
    </div>
  );
}

export default Accueil;
