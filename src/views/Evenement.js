import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";
import BoutonLike from "../components/BoutonLike/BoutonLike";

function Evenement() {
  const params = useParams();
  const id = params.id;
  // Création du state pour sauvegarder les données de l'acutalité lié à l'id passé en paramètre à l'url
  const [eventState, setEvent] = useState(null);

  //Après le chargement de la page,
  //on récupère l'API pour passer les données,
  //correspondant à l'événement sur laquelle on a cliqué, au state
  useEffect(() => {
    Axios.get(
      `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`
    ).then((res) => {
      //Passer les données au state
      setEvent(res.data);
    }, []);
  });

  return (
    <div className="mt-5 container col-lg-12 justify-content-center">
      <div className="row mt-5">
        {eventState && (
          <div className="pb-5  justify-content-center row   mt-5">
            {/* Titre de l'événement */}
            <h1 className="text-center titlesearch ">
              {eventState.record.fields.title}
            </h1>
            {/* Image de l'événement */}
            <Image
              className=" mt-5"
              src={eventState.record.fields.cover_url}
              fluid
            />
            <div className="text-center col-lg-7">
              {/* Sous-titre */}
              <h2 className=" mt-5">{eventState.record.fields.lead_text}</h2>
              {/* Description de l'événement */}
              <p
                className=" mt-5"
                dangerouslySetInnerHTML={{
                  __html: eventState.record.fields.description,
                }}
              ></p>
            </div>

            <div className="event-infos mt-5 py-4  px-4 ml-5 col-lg-4">
              {/* Bouton pour sauvegarder dans les favoris */}
              <BoutonLike recordCard={eventState} />

              {/* Dates */}
              <div className=" mt-5">
                <h3>Dates</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: eventState.record.fields.date_description,
                  }}
                ></p>

                {/* Prix */}
                <h3>Prix ({eventState.record.fields.price_type}) :</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: eventState.record.fields.price_detail,
                  }}
                ></p>

                {/* Lieu de l'événement */}
                <h3>S'y rendre</h3>
                <p>{eventState.record.fields.address_name}</p>
                <p>{eventState.record.fields.adress_street}</p>
                <p>
                  {eventState.record.fields.address_zipcode}{" "}
                  {eventState.record.fields.address_city}
                </p>

                {/* Accès à l'événement en transport */}
                <h3>En transport</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: eventState.record.fields.transport,
                  }}
                ></p>

                {/* Information complémentaire */}
                <h3>Plus d'infos</h3>
                <ul className="more-infos">
                  <li>
                    {/* Téléphone */}
                    <a className="fa fa-phone" href="#">
                      {" "}
                      : {eventState.record.fields.contact_phone}
                    </a>
                  </li>
                  <li>
                    {/* Mail */}
                    <a className="fa fa-envelope" href="#">
                      {" "}
                      : {eventState.record.fields.contact_mail}
                    </a>
                  </li>
                  <li>
                    {/* Facebook*/}
                    <a
                      className="fa fa-facebook"
                      href={eventState.record.fields.contact_facebook}
                    >
                      {" "}
                      : {eventState.record.fields.contact_facebook}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Evenement;
