const express = require('express');
const bodyParser = require("body-parser");

const InitiateMongoServer = require("./config/db");
const userRoutes = require("./API/routes/user");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use("/user", userRoutes);

app.listen(port, (req, res) => {
    console.log(`Server Started at PORT ${port}`);
});
