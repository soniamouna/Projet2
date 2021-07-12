
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import Accueil from './views/Accueil';
import Favoris from './views/Favoris';
import Recherche from './views/Recherche';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';




// function App() {
  
// state = {
//   persons: []
// }

// componentDidMount(){
//   axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => {
//       const persons = res.data;
//       this.setState({ persons });
//     })
// }

//   return (
    // <BrowserRouter>
    //   <header>
    //     <NavLink exact to ="/" activeClassName='selected' >Accueil</NavLink>
    //     <NavLink exact to ="/recherche" activeClassName='selected'>Recherche</NavLink>
    //     <NavLink exact to ="/favoris" activeClassName='selected'>Favoris</NavLink>
    //   </header>

    //   <ul>
    //     { this.state.persons.map(person => <li>{person.name}</li>)}
    //   </ul>

    //   {/* Accueil */}
    //   <Route exact path="/" component={Accueil}/>
    //   {/* Rechercher */}
    //   <Route exact path="/recherche" component={Recherche}/>
    //   {/* /Favoris */}
    //   <Route exact path="/favoris" component={Favoris}/>

    // </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';

import axios from 'axios';
import { Component } from 'react';
// export default class App extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/record`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

  // render() {
  //   return (
  //     <ul>
  //       { this.state.persons.map(person => <li>{person.contact_name}</li>)}
  //     </ul>
  //   )
  // }
// }


const api = axios.create({
  baseURL:`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records`
})

class App extends Component {
  constructor() {
    super();
    api.get('/').then(res =>{
      let tab=res.data.records
      let tab2=[];
      tab.forEach(function(tab){
        tab2.push(tab.record); 
        
      });
      console.log(tab2)
      
      
    })
  }
  

  render() {
    return (
      <div>
            <BrowserRouter>
      <header>
        <NavLink exact to ="/" activeClassName='selected' >Accueil</NavLink>
        <NavLink exact to ="/recherche" activeClassName='selected'>Recherche</NavLink>
        <NavLink exact to ="/favoris" activeClassName='selected'>Favoris</NavLink>
      </header>
     
     

      {/* Accueil */}
      <Route exact path="/" component={Accueil}/>
      {/* Rechercher */}
      <Route exact path="/recherche" component={Recherche}/>
      {/* /Favoris */}
      <Route exact path="/favoris" component={Favoris}/>

    </BrowserRouter>
      </div>
    );
  }
}


export default App;