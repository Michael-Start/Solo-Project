const mongoose = require('mongoose'); //import mongoose to communicate with mongoDB
const dbName = 'cats'; //define database name here
// const { envFilePasswordVariable } = process.env //destructure DB password from .env, if you have one

//allowing mongoose to connect to the DB
//mongoose.connect(`remoteMongoConnectLink`) //if you're using a remote mongo server -- DON'T FORGET TO PUT PASSWORD IN VIA ${} TEMPLATING
mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the database: ${dbName}`))
    .catch(err => console.log(`Something went wrong when connecting to the database: ${dbName} --`, err));