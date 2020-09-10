import React, { Component } from 'react'
import { getStarShipList } from '../../services/sw-api'
import { Link } from 'react-router-dom'

class Starships extends Component {
    state = { 
        starshipsList: []
     }

     async componentDidMount(){
         const starshipsList = await getStarShipList()
         console.log(starshipsList)
         this.setState({ starshipsList: starshipsList.results})
     }

    render() { 
        return ( 
            <>
                <h2>Star Wars Starships</h2>
                {this.state.starshipsList.map((starship) => 
                <div key={starship.model}>
                <Link
                    to={{
                        pathname: '/starship',
                        starshipState: { starship }
                    }}
                >
                    {starship.name}
                </Link> <br></br>
                </div>
                )}
            </>
         );
    }
}
 
export default Starships;