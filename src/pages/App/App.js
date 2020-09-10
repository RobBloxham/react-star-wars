import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Starships from '../Starships/Starships'
import StarshipDetails from '../StarshipDetails/StarshipDetails';

class App extends Component {
  state = {  }
  render() { 
    return (  
      <>
      <Route 
      exact path ='/'
      render={() =>
        <Starships />
      }
      />
       <Route 
          exact path='/starship'
          render={( { location }) => 
            <StarshipDetails
              location={location} 
            />
          }
        />

      </>
    );
  }
}
 
export default App;

