import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {  Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DATA from '../_data/que-faire-a-paris-.json'


function Evenement() {

    const params=useParams();
    const id = params.id;
    const [event, setEvent]=useState(null)

    useEffect(()=>{
       // Axios.get("https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records").then(
            //   (res)=>{
            //     const tab=res.data.records
            //     const recordTab=[];
            //     tab.forEach(function(tab){
            //        recordTab.push(tab.record);
            //     })
        setEvent(
            DATA.filter(d=>d.recordid===id)[0]
        );
    },[]);

    return (
        <div className="container col-lg-12 justify-content-center">
            <div className="row">

                <div className="col-lg-9">
                    {event && <h1>{event.fields.title}</h1>}
                    <Image src="https://img.passeportsante.net/1000x526/2021-05-06/i106626-signes-bonne-sante-du-chat.jpg" fluid />
                </div>

                <div className="col-lg-2">
                     {/* bouton de sauvegarde */}
                    <p>sauvegarde</p>
                    {/* dates */}
                    <h3>Dates</h3>
                    <p>date</p>

                    {/* prix */}
                    <h3>prix</h3>
                    <p>prix</p>

                    {/* map */}


                    {/* transport */}
                    <h3>transport</h3>
                    <p>coordonnées</p>

                    {/* plus d'infos */}
                    <h3>Plus d'info</h3>
                    <ul>
                        <li><a  href="">téléphone</a></li>
                        <li><a  href="">mail</a></li>
                        <li><a  href="">fb</a></li>
                    </ul>

                </div>
               
            </div>

        </div>
    );
}

export default Evenement;