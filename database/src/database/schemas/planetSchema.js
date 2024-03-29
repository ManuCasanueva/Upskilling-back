const {Schema} = require ("mongoose");
const { Planet } = require("..");

const planetSchema = new Schema({
    "_id": String,
    "name": String,
    "rotation_period": String,
    "orbital_period": String,
    "diameter": String,
    "climate": String,
    "gravity": String,
    "terrain": String,
    "surface_water": String,
    "residents": [{type:String, ref:"Character"}],
    "films": [{type:String, ref:"Film"}]
})

planetSchema.statics.list = async function () {
    return await this.find()
    .populate ("residents", ["_id","name"])
    .populate ("films", ["_id","title"])
}

planetSchema.statics.get = async function (id) {
    return await this.findById(id)
    .populate ("residents", ["_id","name"])
    .populate ("films", ["_id","title"])
}

planetSchema.statics.insert = async function (planets) {
    const response = await this.create(planets);
    return { data: response };
}

module.exports = planetSchema;