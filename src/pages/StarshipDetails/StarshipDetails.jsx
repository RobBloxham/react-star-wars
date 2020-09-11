import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getStarShipDetails } from '../../services/sw-api'
import PilotList from '../../components/PilotList/PilotList'


class StarshipDetails extends Component {
    state = { url: this.props.location.starshipState.starship.url,
    starshipDetails: {}
    }

    async componentDidMount() {
        const starshipDetails = await getStarShipDetails(this.state.url)
        this.setState({ starshipDetails })
    }
    
    render() { 
        const { starshipDetails } = this.state
        return ( 
            <div>
                {starshipDetails.name ?   
            <>
                <h3>Starship Details</h3>
                <h4>Name: {starshipDetails.name}</h4>
                <h4>Model: {starshipDetails.model}</h4>
                <h4>Length: {starshipDetails.length}</h4>
                <h4>Crew: {starshipDetails.crew}</h4>
                <h4>Class: {starshipDetails.starship_class}</h4>
                <PilotList pilots={starshipDetails.pilots}/>
            </> 
            :
            <p>Loading details</p>
            }
                <Link
                    to={{
                        pathname: '/'
                    }}><button type="submit">Return</button></Link>
            </div>
         );
    }
}
 
export default StarshipDetails
