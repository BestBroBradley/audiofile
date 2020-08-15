import axios from 'axios'

const APIKEY = process.env.REACT_APP_APIKEY

let yelpURL = ""

export default {
    yelpSearch: function(search) {
        const { type, term } = search
        switch (type) {
            case "locale":
                yelpURL = ""
                return axios.create({
                    baseURL: `https://api.yelp.com/v3/businesses/search/${term}`,
                    headers: {
                        Authorization: `Bearer${APIKEY}`,
                        "Context-type": "application/json"
                    }
                })                
            case "store":
                yelpURL = ""
                return axios.get(yelpURL)
            default:
                break;
        }
    }
}