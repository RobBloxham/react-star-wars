import React, { Component } from 'react'
import { getStarShipDetails } from '../../services/sw-api'

class StarshipDetails extends Component {
    state = { url: this.props.location.starshipState.starship.url,
        starshipDetails: {}
    }

    async componentDidMount() {
        console.log(this.state.url)
        const starshipDetails = await getStarShipDetails(this.state.url)
        console.log(starshipDetails)
        this.setState({ starshipDetails })
    }
    
    render() { 
        const { starshipDetails } = this.state
        return ( 
            <>
                <h2>{starshipDetails.name}</h2>
                <h4>Model: {starshipDetails.model}</h4>
                <h4>Class: {starshipDetails.starship_class}</h4>
                <h4>Crew: {starshipDetails.crew}</h4>
                <h4>Passengers: {starshipDetails.passengers}</h4>

            </>
         );
    }
}
 
export default StarshipDetails
