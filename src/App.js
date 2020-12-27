import React, { Component } from "react";
import { ZoneRecherche } from "./components/zoneRecherche/zone-recherche.component";
import "./App.css";
import { FicheList } from "./components/fiche-list/fiche-list.component";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/supplements/header.component";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
// import { Test } from "./test";



class App extends Component {
  constructor() {
    super();

    this.state = {
      monstres: [],
      champsRecherche: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((users) => this.setState({ monstres: users })); 
  }

  gererChangement = (e) => {
    this.setState({ champsRecherche: e.target.value });
  };

  render() {
    const { monstres, champsRecherche } = this.state;
    const monstresFiltre = monstres.filter((monstre) =>
      monstre.name.toLowerCase().includes(champsRecherche.toLowerCase())
    );
    
    return (
      <div className="App">
        <h1>Monstres carrousel</h1>

        <ZoneRecherche
          placeholder="Cherche monstres"
          gererChangement={(e) => //est éxecutée une fois lors du chargement du composant
            this.setState({ champsRecherche: e.target.value })
          }
        />
        {/* <FicheList monstres={monstresFiltre} /> */}

          <div>
          <BrowserRouter>
          <Header />   
            <Switch>
              {/* <Route exact path="/" component={ FicheList } /> */}
              <Route exact path="/" render={(props) => <FicheList {...props} monstres={monstresFiltre} idSet={"set1"} />} />
              <Route path="/monstres/1" render={(props) => <FicheList {...props} monstres={monstresFiltre} idSet={"set1"} nbCard={props.nbCard} />} />
              <Route path="/monstres/2" render={(props) => <FicheList {...props} monstres={monstresFiltre} idSet={"set2"} />} />
              <Route path="/monstres/3" render={(props) => <FicheList {...props} monstres={monstresFiltre} idSet={"set3"} />} />
              <Route path="/monstres/4" render={(props) => <FicheList {...props} monstres={monstresFiltre} idSet={"set4"} />} />
            </Switch>
          </BrowserRouter>
          </div>
      </div>
    );
  }
}

export default App;
