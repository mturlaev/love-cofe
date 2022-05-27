const express = require("express");
const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Boolean,
    caffeine: Boolean,
    volume: Number,
    drinkDescription: String,
})

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;