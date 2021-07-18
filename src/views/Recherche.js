import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import Cards from "../components/cards/Cards";

function Recherche() {
  // Création du state pour sauvegarder les données de l'actualité en fonction de la recherche
  const [recordState, setRecord] = useState(null);

  // Création du state pour sauvegarder toutes les données de toutes les actualités de l'API
  const [recordSearchState, setRecordSearch] = useState(null);

  //Après le chargement de la page, récupération de toutes les données de toutes les actualités de l'API pour le passer au state
  useEffect(() => {
    Axios.get(
      "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records"
    ).then((res) => {
      setRecordSearch(res.data.records);
    });
  }, []);

  const inputRef = useRef();

  // Fonction qui s'effectuera la de submission du formulaire
  // pour passer les données de l'API, récupérées en fonction de la recherche faite, au state
  function onValidateForm(event) {
    event.preventDefault();
    //Récupération de la valeur courante entrée dans le input
    const searchValue = inputRef.current.value;
    //Récupération des données dans l'API en fonction de la valeur entrée dans l'input
    Axios.get(
      `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=15&search=${searchValue}`
    ).then((res) => {
      //Passer les données dans le state
      setRecord(res.data.records);
    });
  }

  return (
    <div className="container pt-4">
      <h1 className="mt-4 pt-5 text-center font-family-paris titlesearch">
        Liste des événements à Paris
      </h1>

      {/* Formulaire de recherche */}

      <form
        className="mt-4 col-lg-12 text-center search"
        onSubmit={onValidateForm}
      >
        <input
          ref={inputRef}
          className="col-lg-6 input-search text-center form-search"
          type="text"
          placeholder="Recherche"
        />

        <button className="button-search" type="submit">
          Rechercher
        </button>
      </form>

      {recordState && (
        <div className="mt-5 mb-5 col-lg-12 row g-4">
          <h2>Résultat(s) de la recherche:</h2>
          {/* S'il n'y pas de résultat suite à la recherche un message nous l'informera 
          sinon les résultats s'afficheront sous forme de plusieurs card*/}
          {recordState.length ? (
            <div className="row col-lg-12">
              {recordState.map((value, i) => (
                <div className="col-lg-4 ">
                  <Cards recordState={value} />
                </div>
              ))}
            </div>
          ) : (
            <h1 className="text-center">Pas de résultat! </h1>
          )}
        </div>
      )}

      {/* Tous les événements */}
      {recordSearchState && (
        <div className="mt-5 mb-5 col-lg-12 row g-4">
          <h2>Retrouvez tous les événements qui se déroulent à Paris ! </h2>
          <div className="row col-lg-12">
            {recordSearchState.map((value, i) => (
              <div className="col-lg-4 ">
                <Cards recordState={value} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Recherche;
