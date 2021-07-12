import CardGroup from "../components/cardgroup/CardGroup";

function Accueil(){
    return(
        <div>
            <h1>Bienvenue sur Paris Events</h1>
            <p>L'application qui permet de rechercher en direct les prochains événements Parisiens</p>

            <h2>Actualité</h2>
            <p>Le dernier événement publié:</p>

            <CardGroup/>

        </div>
    )
}

export default Accueil;
