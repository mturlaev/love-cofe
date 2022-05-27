const Drink = require("../models/Drink.model")

module.exports.DrinksController = {
    getDrinks: (req, res) => {
        Drink.find().select("_id name price").then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    getStockId: (req, res) => {
        Drink.findById(req.params.id).then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    getDrinksByStocksId: (req, res) => {
        Drink.find({stock: true }).then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
    postDrinks: (req, res) => {
        Drink.create({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            caffeine: req.body.caffeine,
            volume: req.body.volume,
            drinkDescription: req.body.drinkDescription,
        }).then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    }, deleteDrinksId: (req, res) => {
        Drink.findByIdAndRemove(req.params.id).then(() => {
            res.json("удалено")
        }).catch((e) => {
            res.json("ошибка")
        })
    }, pathDrinksId: (req, res) => {
        Drink.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            caffeine: req.body.caffeine,
            volume: req.body.volume,
            drinkDescription: req.body.drinkDescription,
        }).then((data) => {
            res.json(data)
        }).catch((e) => {
            res.json("ошибка")
        })
    },
}