import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import BoutonLike from "../BoutonLike/BoutonLike";

function Cards(props) {
  // Récupération des props dans une variable
  const recordCard = props.recordState;

  return (
    <div className="justify-content-center m-auto container col-sm-12 ">
      {recordCard && (
        <Card className="col-sm-12 m-auto card mt-5" style={{ width: "22rem" }}>
          <a
            className="text-decoration-none"
            href={`evenement/${recordCard.record.id}`}
          >
            {/* Image de l'événement */}
            <Card.Img
              className="card-image"
              variant="top"
              src={recordCard.record.fields.cover_url}
            />
            <Card.Body>
              {/* Titre de l'événement */}
              <Card.Title className="card-title">
                {recordCard.record.fields.title}
                {/* Date de début de l'événement */}
                <p>
                  <small className="text-muted">
                    <Moment format="DD/MM/YYYY à hh:mm:ss">
                      {recordCard.record.fields.date_start}
                    </Moment>
                  </small>
                </p>
              </Card.Title>
              {/* Une partie de la description de l'événement */}
              <Card.Text className="card-lead-text">
                {recordCard.record.fields.lead_text}
              </Card.Text>
            </Card.Body>
          </a>
          <Card.Footer>
            {/* Bouton pour sauvegarder dans les favoris et envoie des données par les props */}
            <BoutonLike recordCard={recordCard} />
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}

export default Cards;
