import React, { Component } from 'react'
import { getPilots } from '../../services/sw-api'

class PilotList extends Component {
    state = { 
        urls: this.props.pilots,
        pilotList: []
     }

    async componentDidMount(){
        console.log(this.props.pilots)
        const promises = await getPilots(this.state.urls)
        const pilotObjects = await Promise.all(promises)
        this.setState({ pilotList: pilotObjects })
       
    }

    render() { 
        const {pilotList} = this.state 
        return ( 
            <>
             {pilotList.length
                ?
             <>
             <p>Notable Pilots:</p>
                 {pilotList.map((pilot, idx)=>
             <p key={idx}>{pilot.name}</p>  
                 )}
             </>
            :
            <p>This ship has no notable Pilots</p>
            }
            </>
         );
    }
}
 
export default PilotList
