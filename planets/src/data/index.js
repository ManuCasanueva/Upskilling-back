const planets = require ("./planets.json")
const axios =require ("axios")

module.exports =  {
    list: () =>{
        const results = axios.get("http://database:8004/Planet");
       return results.data
    },
    create:()=>{
        throw Error("andomal")
    }
}