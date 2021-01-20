const {Schema, model} = require("mongoose");

const schema = new Schema({
    day: {type: Date, unique: true},
    goods: [{
        priceForPack: {type: Number},
        priceForKg: {type: Number},
        link: {type: String},
        shop: {type: String},
        name: {type: String},
        weight: {type: Number},
        brand: {type: String}
    }],

});

module.exports = model("PriceDay", schema);