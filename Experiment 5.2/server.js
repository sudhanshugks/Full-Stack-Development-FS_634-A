// server.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => res.send("🎓 Student Management API Running"));

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI;

connectDB(MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
