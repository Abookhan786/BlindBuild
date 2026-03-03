const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const mathRoutes = require("./routes/mathRoutes");
const dfsRoutes = require("./routes/dfsRoutes");

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection URI
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/blindbuild";

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB Atlas (kriya26 DB)"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Root route
app.get("/", (req, res) => {
  res.send("🚀 BlindBuild API running...");
});

// Routes
app.use("/api/m1", mathRoutes);
app.use("/api/d1", dfsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});