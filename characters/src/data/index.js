const axios = require("axios")
const characters = require ("./characters.json");


module.exports = {
    list: async ()=>{
       const results = axios.get("http://database:8004/Character");
       return results.data
    },

    create: async()=>{
        throw Error ("andomal");
    }
};