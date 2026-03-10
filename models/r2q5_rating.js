const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    participantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "R2Q4_Participant",
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("R2Q5_Rating", RatingSchema);
