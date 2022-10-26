const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/characterDb", {
    useNewUrlParser: true
}).then(() => console.log("connect to MongoDB")).catch(err => console.log("Couldn't connect to MongoDB"));
const characterSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        required: true,
        unique: true
    },
    ability: {
        type: String,
        require: true
    },
    fact: {
        type: String,
        require: true
    },


});

const CharacterModel = mongoose.model("Character", characterSchema);

module.exports = CharacterModel;