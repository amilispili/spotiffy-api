const mongoose = require("../connection");
const express = require("express");

const artistSchema = new mongoose.Schema ({
    "name": String,
    "genre": String,
    "birthday": Number,
    "image": String
    },
    "_links": {
        "self": {
            "href": String,
        },
    }
});

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;
