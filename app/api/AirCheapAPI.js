import 'whatwg-fetch';

let AirCheapAPI = {
    fetchAirports(){
        fetch('aiports.json')
        .then((response) => response.json());
    },
    
    fetchTickets(origin, destination){
        fetch('flights.json')
        .then((response) => response.json());
    }
}

export default AirCheapAPI;