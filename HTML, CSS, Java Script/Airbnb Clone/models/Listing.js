const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            // This ternary operator works like if-else. In the first part before ? there is a condition and after that results for both true and false are given separated by : respectively
            default: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637",
            set: (v)=> v === "" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637" : v
        }        
    },
    price: {
        type: Number,
        min: 1
    },
    location: {
        type: String
    },
    country: {
        type: String
    },
})

const Listing = mongoose.model("Listing", listingSchema)

module.exports = Listing;