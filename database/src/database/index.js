const mongoose = require ("mongoose");
const {MONGO_URI} = require ("../config/envs")

const conn = mongoose.createConnection(MONGO_URI)

// const Character = conn.model("Character", require("./schemas/characterSchema"));
// const Film =conn.model("Film", require("./schemas/filmSchema"))

module.exports = {
Character :conn.model("Character", require("./schemas/characterSchema")),
Film :conn.model("Film", require("./schemas/filmSchema")), 
Planet : conn.model("Planet", require("./schemas/planetSchema"))
}