
const BASE_URL = https://journeyplanner.integration.sl.se/v2/trips

const functionName = async () => { 
    const response = await fetch("BASE_URL") 
    const data = await response.json() 

console.log(data.journeys[0].legs[0].origin.coord)
}
    