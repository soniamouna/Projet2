import React from "react";
import Axios from "axios";
import { useState } from "react";
import "../App.css";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import Cards from "../components/cards/Cards";

function Accueil() {
  const url =
    "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_start%20desc&rows=1";
  const [recordState, setRecord] = useState(null);



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

        {/* card */}

          <Cards recordState={recordState} />
        {/* {recordState && <Card className="m-auto card" style={{ width: "20rem" }}>
            <a
              className="text-decoration-none"
              href={`evenement/${recordState.record.id}`}
            >
              <Card.Img
                variant="top"
                src={recordState.record.fields.cover_url}
              />
              <Card.Body>
                <Card.Title className="card-title">
                  {recordState.record.fields.title}
                  <p>
                    <small className="text-muted">
                      <Moment format="DD/MM/YYYY à hh:mm:ss">
                        {recordState.record.fields.date_start}
                      </Moment>
                    </small>
                  </p>
                </Card.Title>

                <Card.Text className="card-lead-text">
                  {recordState.record.fields.lead_text}
                </Card.Text>
              </Card.Body>
            </a>
            <Card.Footer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-suit-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
              <span> J'aime</span>
            </Card.Footer>
          </Card>} */}

           {/* {recordState &&<Card className="m-auto card" style={{ width: '20rem' }}>
        <a className="text-decoration-none" href={`evenement/${recordState.record.id}`}>
                <Card.Img variant="top" src={recordState.record.fields.cover_url} />
                <Card.Body>
                <Card.Title className="card-title">{recordState.record.fields.title}</Card.Title>
               <Card.Text className="card-lead-text">{recordState.record.fields.lead_text}</Card.Text>
                    
                </Card.Body>
                </a>
                <Card.Footer>
                <a style={{textDecoration:"none"}} href="#" className="heart fa fa-heart"></a>
                </Card.Footer>
            </Card>} */}
      </div>
    </div>
  );
}

export default Accueil;
