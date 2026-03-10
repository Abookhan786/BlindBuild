const TicketSchema = new mongoose.Schema({
  registrationId: {
    type: String,
    required: true,
    ref: "Registration"
  },
  userId: {
    type: String,
    required: true,
    ref: "User"
  },
  eventId: {
    type: String,
    required: true,
    ref: "Event"
  },
  qrCode: {
    type: String, 
    required: true
  },
  issuedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ["Valid", "Invalid"],
    default: "InValid"
  }
});

module.exports = mongoose.model("Ticket", TicketSchema);