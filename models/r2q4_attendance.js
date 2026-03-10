const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
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
    checkInTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("R2Q4_Attendance", AttendanceSchema);
