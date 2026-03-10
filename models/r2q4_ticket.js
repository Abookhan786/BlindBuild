const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    ticketId: {
        type: String,
        required: true,
        unique: true
    },
    participantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "R2Q4_Participant",
        required: true
    },
    isValid: {
        type: Boolean,
        default: true
    },
    status: {
        type: String,
        default: "Valid"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("R2Q4_Ticket", TicketSchema);
