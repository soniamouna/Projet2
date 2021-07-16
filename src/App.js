
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import Accueil from './views/Accueil';
import Favoris from './views/Favoris';
import Recherche from './views/Recherche';
import 'bootstrap/dist/css/bootstrap.min.css';
import Evenement from './views/Evenement';
import { Navbar, Container,Nav } from 'react-bootstrap';
// import { FaBroadcastTower } from "react-icons/fa";





function App() {
 
  return (
    <BrowserRouter>
      <header className="pb-5" >
      <Navbar fixed="top" className="mb-4 py-4 bgnav-gradient col-lg-12 col-md-12 col-sm-12" expand="lg">
        <Container>
          
          <Navbar.Toggle className="mb-3  " aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
            {/* <a><h1 >P<FaBroadcastTower className="pb-lg-3 " />RIS EVENT</h1></a> */}
              <Navbar.Brand className="px-2 bg-light logo-paris-event" href="#">PARIS EVENT</Navbar.Brand>
              <NavLink  className="navbar text-decoration-none " exact to ="/" activeClassName='selected' >Accueil</NavLink>
              <NavLink className="navbar text-decoration-none mx-lg-5" exact to ="/recherche" activeClassName='selected'>Recherche</NavLink>
              <NavLink className="navbar text-decoration-none "  exact to ="/favoris" activeClassName='selected'>Favoris</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        
      </header>

      

      {/* Accueil */}
      <Route exact path="/" component={Accueil}/>
      {/* Rechercher */}
      <Route exact path="/recherche" component={Recherche}/>
      {/* /Favoris */}
      <Route exact path="/favoris" component={Favoris}/>
      {/* Evenement */}
      <Route exact path="/evenement/:id" component={Evenement}/>

    </BrowserRouter>
  );
}

export default App;

// import React from 'react';

// import axios from 'axios';
// import { Component } from 'react';
// // export default class App extends React.Component {
// //   state = {
// //     persons: []
// //   }

// //   componentDidMount() {
// //     axios.get(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/record`)
// //       .then(res => {
// //         const persons = res.data;
// //         this.setState({ persons });
// //       })
// //   }

//   // render() {
//   //   return (
//   //     <ul>
//   //       { this.state.persons.map(person => <li>{person.contact_name}</li>)}
//   //     </ul>
//   //   )
//   // }
// // }


// const api = axios.create({
//   baseURL:`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records`
// })

// class App extends Component {
//   constructor() {
//     super();
//     api.get('/').then(res =>{
//       let tab=res.data.records
//       let tab2=[];
//       tab.forEach(function(tab){
//         tab2.push(tab.record); 
        
//       });
//       console.log(tab2)
      
      
//     })
//   }
  

//   render() {
//     return (
//       <div>
//             <BrowserRouter>
//       <header>
//         <NavLink exact to ="/" activeClassName='selected' >Accueil</NavLink>
//         <NavLink exact to ="/recherche" activeClassName='selected'>Recherche</NavLink>
//         <NavLink exact to ="/favoris" activeClassName='selected'>Favoris</NavLink>
//       </header>
     
     

//       {/* Accueil */}
//       <Route exact path="/" component={Accueil}/>
//       {/* Rechercher */}
//       <Route exact path="/recherche" component={Recherche}/>
//       {/* /Favoris */}
//       <Route exact path="/favoris" component={Favoris}/>

//     </BrowserRouter>
//       </div>
//     );
//   }
// }


// export default App;

