import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import Cards from '../components/cards/Cards';
import '../App.css';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import DATA from '../_data/que-faire-a-paris-.json';

function Accueil() {
  const url ='https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=date_start%20desc&limit=1';
  const [recordState, setRecord]=useState(null);

     useEffect(()=>{
        Axios.get(url).then(
            res => {
                const recordsTab=res.data.records[0];
                setRecord(recordsTab);   
                console.log(recordState)     

            }
        )
     },[])

      
  

  
 
   
  
  return (
    <div className="pt-5 container col-lg-12 col-md-12 col-sm-12 ">
      <div className="py-5">
        <div className="text-center justify-content-center ">

          <h1 className="col-lg-12 col-sm-12 titlehome font-family-paris" >Bienvenue sur Paris Events</h1> 
          <hr className="hrhome m-auto"></hr>
          <p className="font-family-zen-loop phome pt-3">L'application qui permet de rechercher en direct les prochains événements Parisiens</p>
          <h2 className="font-family-crimson" >Actualité</h2>
          <p>Le dernier événement publié :</p>
        </div>
        
        {/* card */}

        {recordState &&<Card className="m-auto card" style={{ width: '20rem' }}>
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
            </Card>}





      </div>
    </div>
  );
}

export default Accueil;