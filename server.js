const API_KEY = `Vj2SkS9Z_BcNVhSS-BDss1j0HwsDvo2wRAK0lZpT4rFQNKXTVnGi9oDxKwxC3TCM8Iaw3rU0H_sXfIxhtHpLtjYk8mJJ2F1wz-yBvpiG-vh3W9qV4YcRnC3PIl8NYXYx`;
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000;
let config = {
    headers: {
        'Access-Control-Allow-Origin': "*",
        'mode': 'cors',
        crossDomain: true
    }
}
app.listen(port, () =>{
    console.log(`server is up and running at http://localhost:${port}`)
})


let yelpREST = axios.create({
    baseURL: "https://api.yelp.com/v3/",
    header:{
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
    },
})

let restaurants = [];


app.get('/restaurant', function(req,res){

    yelpREST("/businesses/search",{
        params:{
            location:"Las Vegas",
            term: "coffee",
            limit: 10,
        }
    }, config).then(({ data }) => {
        
        let { businesses } = data
        // console.log(businesses)
        businesses.forEach((b) =>{
            restaurants.push(b.name)
        })
    }).catch(err =>{
        console.log(err)
    })

    res.send(restaurants)
})