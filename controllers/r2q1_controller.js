const Participant = require("../models/r2q1_participant");
const Event = require("../models/r2q1_events");
const Registration = require("../models/r2q1_registration");
const Ticket = require("../models/r2q1_ticket");
const bcrypt = require("bcryptjs");
const QRCode = require("qrcode");

// ---------------- PARTICIPANTS ----------------

// Create Team/Participant
exports.createParticipant = async (req, res) => {
  try {
    const { Teamname, TeamMembers, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const participant = new Participant({
      Teamname,
      TeamMembers,
      password: hashedPassword
    });

    await participant.save();
    res.status(201).json({ message: "Team created successfully", participant });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ---------------- EVENTS ----------------

// Create Event
exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ---------------- REGISTRATION ----------------

// Register Participant for Event
exports.registerEvent = async (req, res) => {
  try {
    const { ParticipantId, eventId } = req.body;

    const registration = new Registration({
      ParticipantId,
      eventId,
      status: "Registered"
    });

    await registration.save();
    res.status(201).json({ message: "Registered successfully", registration });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Registration Status
exports.getRegistrationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findById(id);

    if (!registration) return res.status(404).json({ message: "Registration not found" });
    res.json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Cancel Registration
exports.cancelRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findByIdAndUpdate(
      id,
      { status: "Not Registered" },
      { new: true }
    );

    if (!registration) return res.status(404).json({ message: "Registration not found" });
    res.json({ message: "Registration cancelled", registration });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ---------------- TICKETS ----------------

// Generate Ticket
exports.generateTicket = async (req, res) => {
  try {
    const { registrationId, userId, eventId } = req.body;

    // Use a unique string for QR data (ticket info + timestamp)
    const qrData = `${registrationId}-${userId}-${eventId}-${Date.now()}`;

    // Generate QR code as base64 image string
    const qrCodeImage = await QRCode.toDataURL(qrData);

    // Create ticket
    const ticket = new Ticket({
      registrationId,
      userId,
      eventId,
      qrCode: qrCodeImage,
      status: "Valid"
    });

    await ticket.save();

    res.status(201).json({
      message: "Ticket generated successfully",
      ticket
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Ticket Details
exports.getTicketDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findById(id);

    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};