import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {  Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DATA from '../_data/que-faire-a-paris-.json';
import { Card} from 'react-bootstrap';
import Axios from 'axios';



function Evenement() {

    const params=useParams();
    const id = params.id;
    const [eventState, setEvent]=useState(null)

    useEffect(()=>{
       Axios.get(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`).then(
              (res)=>{
                  console.log(res.data.record)
                setEvent(res.data.record)
              
    },[]);

})

    return (
        <div className="mt-5 container col-lg-12 justify-content-center">
            <div className="row mt-5">
            
            {eventState && 
                <div className="pb-5 row  mt-5">
                    <h1 className="text-center titlesearch font-family-paris">{eventState.fields.title}</h1>
                    <Image className=" mt-5" src={eventState.fields.cover_url} fluid />
                    <div className="text-center col-lg-8">
                        {/* Sous-titre */}
                        <h2 className=" mt-5">{eventState.fields.lead_text}</h2>
                        {/* Description de l'événement */}
                        <p  className=" mt-5" dangerouslySetInnerHTML={{__html: eventState.fields.description}}></p>
                    </div>

                    <div className=" mt-5 col-lg-3">
                        {/* bouton de sauvegarde */}
                        <a style={{textDecoration:"none"}} href="#" className="heart fa fa-heart"> Sauvegarde</a>
                     
                        {/* dates */}
                        <div className=" mt-5">
                            <h3 >Dates</h3>
                            <p dangerouslySetInnerHTML={{__html: eventState.fields.date_description}}></p> 

                            {/* prix */}
                            <h3>Prix ({eventState.fields.price_type}) :</h3>
                            <p dangerouslySetInnerHTML={{__html: eventState.fields.price_detail}}></p>

                            {/* map */}
                            <h3>S'y rendre</h3>
                            <p>{eventState.fields.address_name}</p>
                            <p>{eventState.fields.adress_street}</p>
                            <p>{eventState.fields.address_zipcode} {eventState.fields.address_city}</p>

                            {/* transport */}
                            <h3>En transport</h3>
                            <p dangerouslySetInnerHTML={{__html: eventState.fields.transport}}></p> 

                            {/* plus d'infos */}
                            <h3>Plus d'info</h3>
                            <ul style={{listStyle:"none"}}>
                                <li><a style={{textDecoration:"none"}} href="#">{eventState.fields.contact_phone}</a></li>
                                <li><a style={{textDecoration:"none"}} href="#">{eventState.fields.contact_mail}</a></li>
                                <li><a style={{textDecoration:"none"}} href="https://www.facebook.com/BUTOHPARIS">{eventState.fields.contact_facebook}</a></li>
                            </ul> 

                        </div>
                    </div>
                </div>

            }
            
        </div>

    </div>
    );
}

export default Evenement;