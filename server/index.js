const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { enquiryRoutes } = require("./Routes/EnquiryRoutes");

const app = express();

// ✅ CORS — allow your frontend(s)
app.use(
  cors()
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Health check route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ✅ Routes
app.use("/web/api/enquiry", enquiryRoutes);

// ❌ No app.listen() — Vercel handles it
// ❌ No mongoose.connect() — MongoDB removed

module.exports = app;