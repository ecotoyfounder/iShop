const {Schema, model} = require("mongoose");

const schema = new Schema({
    name: {
        type: String

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    goods: [{
        type: Schema.Types.ObjectId, ref: "Good"
    }],
}, {
    timestamps: true
});

module.exports = model("User", schema);