const mongoose = require('mongoose')
const express = require("express");
const app = express();

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/spotiffy-api', { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})


module.exports = mongoose