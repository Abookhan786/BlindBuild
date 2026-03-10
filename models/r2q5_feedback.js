const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    participantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "R2Q4_Participant", // Reusing the participant model from r2q4 pattern
        required: true
    },
    comment: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("R2Q5_Feedback", FeedbackSchema);
