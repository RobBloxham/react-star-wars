const baseUrl="https://swapi.dev"

export function getStarShipList(){
    return fetch(`${baseUrl}/api/starships`)
    .then(res => res.json())
}

export function getStarShipDetails(apiUrl){
    return fetch(`${apiUrl}`)
    .then(res => res.json())
}
