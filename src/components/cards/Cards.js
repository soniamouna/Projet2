import React from 'react';
import { Card} from 'react-bootstrap';
import DATA from '../../_data/que-faire-a-paris-.json'
import { useState } from 'react';
import { useEffect } from 'react';

function Cards() {
    const [recordState, setRecord]=useState(null);
    useEffect(()=>{

      // Axios.get("https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records").then(
      //   (res)=>{
      //     const tab=res.data.records
      //     const recordTab=[];
      //     tab.forEach(function(tab){
      //        recordTab.push(tab.record);
      //     })
      //     console.log(recordTab)
      //     setRecord(recordTab);


      setRecord(DATA[0]);
      
       
        },[])
        
    return (
        <div className="justify-content-center m-auto container">
            <Card className="m-auto card" style={{ width: '20rem' }}>
                <a className="text-decoration-none" href="/evenement">
                {recordState &&<Card.Img variant="top" src={recordState.fields.cover_url} />}
                <Card.Body>
                {recordState &&<Card.Title className="card-title">{recordState.fields.title}</Card.Title>}
                {recordState &&<Card.Text className="card-lead-text">{recordState.fields.lead_text}</Card.Text>}
                    
                </Card.Body>
                </a>
                <Card.Footer>
                <a style={{textDecoration:"none"}} href="#" className="heart fa fa-heart"></a>
                </Card.Footer>
            </Card>

      
        </div>
    
    );
}

export default Cards;