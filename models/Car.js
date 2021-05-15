const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// still need to finish the id object auto increment and primary KeyboardEvent. Create Date object
const carSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    cars: [
        {
            id: {
                type: Number,
                required: true,

            },

            make: {
                type: String,
                required: true
            },
            model: {
                type: String,
                required: true
            },
            year: {
                type: Number,
                required: true

            },
            userCreated: {
                type: Date,
                default: Date.now
            }
        }
    ]
},
    {
        toJson: {
            virtuals: true
        }
    });

const Car = mongoose.model("Car", carSchema);

module.exports = Car;