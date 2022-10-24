const express = require("express");
const { CharacterModel } = require("./characterDb")

const app = express();

const server = app.listen(4494, () => console.log(`server successfully started on port $(server.address().port}`));