const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const characterRoutes = require('./routes/characters')
app.use("/char",characterRoutes);

const server = app.listen(4101, ()=> 
console.log(`Server successfully runnings on port ${server.address().port}`));