const mongoose = require("mongoose");

const BadgeSchema = new mongoose.Schema({
    badgeId: {
        type: String,
        required: true,
        unique: true
    },
    ticketId: {
        type: String,
        required: true
    },
    participantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "R2Q4_Participant",
        required: true
    },
    generatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("R2Q4_Badge", BadgeSchema);
