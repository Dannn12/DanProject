const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const characterRoutes = require('./routes/characters')
app.use("/char",characterRoutes);

const server = app.listen(4_000, ()=> 
console.log(`Server successfully runnings on port ${server.address().port}`));