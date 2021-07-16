import Axios from 'axios';
import React, { UseEffect } from 'react';
import { useState, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import DATA from '../_data/que-faire-a-paris-.json';
function Recherche() {
    
    const [recordState, setRecord]=useState(null);
    const inputRef = useRef();
    function onValidateForm(event){
        event.preventDefault();
        const searchValue=inputRef.current.value;
        console.log(searchValue)
            Axios.get(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=${searchValue}`).then(
                res => { 
                    setRecord(res.data.records)
                  
                      
       })
    

}





   

   


    

    return (
        <div className="container pt-4">
            <h1 className="mt-4 pt-5 text-center font-family-paris titlesearch">Liste des événements à Paris</h1>

            {/* formulaire */}
            
             <form className="mt-4 col-lg-12 text-center search" onSubmit={onValidateForm} >
                <input ref={inputRef} className="col-lg-6 input-search text-center form-search" type="text"  placeholder="Search"  />
                
                <button className="button-search" type="submit">Rechercher</button>
            </form>  

            {recordState && <div className="mt-5 col-lg-12 row g-4">
                
                {recordState.map((value,i)=>(
                    <Card className="m-auto card " style={{ width: '20rem', height:'30rem    ' }}>
                    <a className="text-decoration-none" href={`evenement/${value.record.id}`}>
                  
                    {recordState &&<Card.Img className="w-100 fluid" variant="top" src={value.record.fields.cover_url} />}
                
                    <Card.Body>
                    {recordState &&<Card.Title className="card-title">{value.record.fields.title}</Card.Title>}
                    {recordState &&<Card.Text className="card-lead-text">{value.record.fields.lead_text}</Card.Text>}
                        
                    </Card.Body>
                    </a>
                    <Card.Footer>
                    <a style={{textDecoration:"none"}} href="#" className="heart fa fa-heart"></a>
                    </Card.Footer>
                </Card>
                ))}</div>}
           
            
         </div>
    );
}

export default Recherche;