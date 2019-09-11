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

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
