import React, { useEffect, useState } from "react";
import Cards from "../components/cards/Cards";

function Favoris() {
  const [listFavState, setListFav] = useState([]);

  useEffect(() => {
    setListFav(JSON.parse(localStorage.getItem("event-fav")));
  }, []);

  return (
    <div className="container mt-5 pb-5">
      <h1 className="mt-5 pt-5 text-center font-family-paris titlesearch">Liste des favoris :</h1>
      {listFavState && 
        <div className=" col-lg-12 row g-4">
          <div className="row col-lg-12">
            {listFavState.map((value, i) => (
              <div className="col-lg-4">
                <Cards recordState={value} />
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
}

export default Favoris;
