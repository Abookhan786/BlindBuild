const router = express.Router();
const appController = require("../controllers/r2q1_controller");

// Participants
router.post("/participants", appController.createParticipant);

// Events
router.post("/events", appController.createEvent);
router.get("/events", appController.getEvents);

// Registrations
router.post("/register", appController.registerEvent);
router.get("/registration-status/:id", appController.getRegistrationStatus);
router.delete("/cancel-registration/:id", appController.cancelRegistration);

// Tickets
router.post("/ticket", appController.generateTicket);
router.get("/ticket/:id", appController.getTicketDetails);

module.exports = router;
