const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/characterDb", {
    useNewUrlParser: true
}).then(() => console.log("connect to MongoDB")).catch(err => console.log("Couldn't connect to MongoDB"));
const characterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    ability: {
        type: String,
        required: true
    },
    fact: {
        type: String,
        required: true
    },


});

const CharacterModel = mongoose.model("Character", characterSchema);

module.exports = CharacterModel;