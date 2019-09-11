const mongoose = require("mongoose");
const express = require("express");
const app = express();


const moodRouter = require("./routes/mood");
const artistRouter = require("./routes/artist");
const trackRouter = require("./routes/track");

app.get("/api/mood", (req, res) => {
    res.send(moodRouter);
});
app.get("/api/artist", (req, res) => {
    res.send(artistRouter);
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")} y-api`);
});

module.exports = app;