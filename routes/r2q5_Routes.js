const express = require("express");
const router = express.Router();
const r2q5_controller = require("../controllers/r2q5_controller");

// Feedback Routes
router.post("/feedback", r2q5_controller.submitFeedback);
router.get("/feedback", r2q5_controller.getAllFeedback);
router.put("/feedback/:id", r2q5_controller.editFeedback);
router.delete("/feedback/:id", r2q5_controller.deleteFeedback);

// Rating Routes
router.post("/rating", r2q5_controller.submitRating);
router.get("/rating/average", r2q5_controller.getAverageRating);

module.exports = router;
