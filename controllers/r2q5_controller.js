const Feedback = require("../models/r2q5_feedback");
const Rating = require("../models/r2q5_rating");

// ---------------- FEEDBACK ----------------

// 1. Submit feedback
exports.submitFeedback = async (req, res) => {
    try {
        const { participantId, comment } = req.body;
        const feedback = new Feedback({ participantId, comment });
        await feedback.save();
        res.status(201).json({ message: "Feedback submitted successfully", feedback });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 2. View feedback (All)
exports.getAllFeedback = async (req, res) => {
    try {
        const feedbackList = await Feedback.find().populate("participantId");
        res.json(feedbackList);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 5. Edit feedback
exports.editFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;
        const feedback = await Feedback.findByIdAndUpdate(
            id,
            { comment, updatedAt: Date.now() },
            { new: true }
        );
        if (!feedback) return res.status(404).json({ message: "Feedback not found" });
        res.json({ message: "Feedback updated successfully", feedback });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 6. Delete feedback
exports.deleteFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const feedback = await Feedback.findByIdAndDelete(id);
        if (!feedback) return res.status(404).json({ message: "Feedback not found" });
        res.json({ message: "Feedback deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ---------------- RATINGS ----------------

// 3. Submit rating
exports.submitRating = async (req, res) => {
    try {
        const { participantId, score } = req.body;
        const rating = new Rating({ participantId, score });
        await rating.save();
        res.status(201).json({ message: "Rating submitted successfully", rating });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 4. View average rating (Aggregation)
exports.getAverageRating = async (req, res) => {
    try {
        const stats = await Rating.aggregate([
            {
                $group: {
                    _id: null,
                    averageRating: { $avg: "$score" },
                    totalRatings: { $sum: 1 }
                }
            }
        ]);

        if (stats.length === 0) {
            return res.json({ averageRating: 0, totalRatings: 0 });
        }

        res.json({
            averageRating: stats[0].averageRating.toFixed(1),
            totalRatings: stats[0].totalRatings
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
