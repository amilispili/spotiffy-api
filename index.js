const mongoose = require("mongoose");
const express = require("express");
const app = express();

//taken from web-auth spotify toot
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');


const moodRouter = require("./routes/mood");
const artistRouter = require("./routes/artist");
const trackRouter = require("./routes/track");


//taken from web-auth spotify toot
var client_id = 'e7be30bde50f4ae9b1b77c3761d94463'; // Your client id
var client_secret = '9ea3d875a17a491b87c9bfdfcfffb082'; // Your secret
var redirect_uri = 'spotiffy://home'; // Your redirect uri


app.get("/api/mood", (req, res) => {
    res.send(moodRouter);
});
app.get("/api/artist", (req, res) => {
    res.send(artistRouter);
});
app.get("api/track", (req, res) => {
    res.send(trackRouter);
})

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")} spot-iffy is up`);
});

module.exports = app;