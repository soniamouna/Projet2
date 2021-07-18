import Axios from "axios";
import { useState, useRef } from "react";
import { Card } from "react-bootstrap";
import Moment from "react-moment";
import Cards from "../components/cards/Cards";

function Recherche() {
  const [recordState, setRecord] = useState(null);

  const inputRef = useRef();
  function onValidateForm(event) {
    event.preventDefault();
    const searchValue = inputRef.current.value;
    console.log(searchValue);
    Axios.get(
      `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?limit=15&search=${searchValue}`
    ).then((res) => {
      setRecord(res.data.records);
    });
  }

  return (
    <div className="container pt-4">
      <h1 className="mt-4 pt-5 text-center font-family-paris titlesearch">
        Liste des événements à Paris
      </h1>

      {/* formulaire */}

      <form
        className="mt-4 col-lg-12 text-center search"
        onSubmit={onValidateForm}
      >
        <input
          ref={inputRef}
          className="col-lg-6 input-search text-center form-search"
          type="text"
          placeholder="Search"
        />

        <button className="button-search" type="submit">
          Rechercher
        </button>
      </form>

      {recordState && (
        <div className="mt-5 col-lg-12 row g-4">
          <h2>Résultats de la recherche:</h2>
          <div className="row col-lg-12">
            {recordState.map((value, i) => (
              <div className="col-lg-4">
                <Cards recordState={value} />
              </div>
              // <Card className="m-auto mt-5 card " style={{ width: "20rem" }}>
              //   <a
              //     className="text-decoration-none"
              //     href={`evenement/${value.record.id}`}
              //   >
              //     {recordState && (
              //       <Card.Img
              //         className="w-100 fluid"
              //         variant="top"
              //         src={value.record.fields.cover_url}
              //       />
              //     )}

              //     <Card.Body>
              //       <Card.Title className="card-title">
              //         {value.record.fields.title}
              //         <p>
              //           <small className="text-muted">
              //             <Moment format="DD/MM/YYYY à hh:mm:ss">
              //               {value.record.fields.date_start}
              //             </Moment>
              //           </small>
              //         </p>
              //       </Card.Title>

              //       {recordState && (
              //         <Card.Text className="card-lead-text">
              //           {value.record.fields.lead_text}
              //         </Card.Text>
              //       )}
              //     </Card.Body>
              //   </a>
              //   <Card.Footer>
              //     <svg
              //       xmlns="http://www.w3.org/2000/svg"
              //       width="16"
              //       height="16"
              //       fill="currentColor"
              //       class="bi bi-suit-heart"
              //       viewBox="0 0 16 16"
              //     >
              //       <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              //     </svg>
              //   </Card.Footer>
              // </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Recherche;
