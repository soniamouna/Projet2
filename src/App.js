import "./App.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Accueil from "./views/Accueil";
import Favoris from "./views/Favoris";
import Recherche from "./views/Recherche";
import "bootstrap/dist/css/bootstrap.min.css";
import Evenement from "./views/Evenement";
import Error from "./views/Error";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      {/*** Menu Navbar ***/}
      <header className="pb-5">
        <Navbar
          fixed="top"
          className="mb-4 py-4 bgnav-gradient col-lg-12 col-md-12 col-sm-12"
          expand="lg"
        >
          <Container>
            <Navbar.Toggle
              className="mb-3  "
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* Logo */}
                <Navbar.Brand
                  className="px-2 bg-light logo-paris-event"
                  href="/"
                >
                  PARIS EVENT
                </Navbar.Brand>
                <NavLink
                  className="navbar text-decoration-none "
                  exact
                  to="/"
                  activeClassName="selected"
                >
                  Accueil
                </NavLink>
                <NavLink
                  className="navbar text-decoration-none mx-lg-5"
                  exact
                  to="/recherche"
                  activeClassName="selected"
                >
                  Recherche
                </NavLink>
                <NavLink
                  className="navbar text-decoration-none "
                  exact
                  to="/favoris"
                  activeClassName="selected"
                >
                  Favoris
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/*** Route vers les différentes pages ***/}
      {/* Accueil */}
      <Switch>
        <Route exact path="/" component={Accueil} />
        {/* Rechercher */}
        <Route exact path="/recherche" component={Recherche} />
        {/* /Favoris */}
        <Route exact path="/favoris" component={Favoris} />
        {/* Evenement */}
        <Route exact path="/evenement/:id" component={Evenement} />

        {/* Error page */}
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
