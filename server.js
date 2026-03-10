const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const round1Routes = require("./routes/round1Routes");
const r2q1Routes = require("./routes/r2q1_Routes");

// Connect to MongoDB 
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/blindbuild", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("🚀 Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));


dotenv.config();

const app = express();
app.use(express.json());



// Root route
app.get("/", (req, res) => {
  res.send("🚀 BlindBuild API running...");
});

// Routes
app.use("/api/round1", round1Routes);
app.use("/api/r2q1", r2q1Routes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});