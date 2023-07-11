const planet = require ("../data")
const {response} = require ("../utils")

module.exports = (req,res) =>{
    const planets = planet.list()
    response(res,200,planets)
}