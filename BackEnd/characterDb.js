const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CharacterStorage", {
    useNewUrlParser: true
}).then();

const characterSchema = mongoose.Schema({
    CharacterName: {
        type: String,
        require: true
    },
    CharacterAge: {
        type: Number,
        required: true,
        unique: true
    },
    CharacterAbility: {
        type: String,
        require: true
    },
    CharacterInterestingFact: {
        type: String,
        require: true
    },


});

const CharacterModel = mongoose.model("Character", characterSchema);

module.exports = { CharacterModel }