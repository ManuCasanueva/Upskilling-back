const films = require ("./films.json");
const axios =require ("axios")

module.exports = {
    list : async ()=>{
        const results = axios.get("http://database:8004/Film");
        return results.data
    },

    create: async()=>{
        throw Error ("andomal");
    }
}