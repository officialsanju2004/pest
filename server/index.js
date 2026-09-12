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

// On Vercel, the serverless runtime imports `app` directly and handles
// requests itself, so app.listen() must NOT be called there.
// For local development (e.g. `npm start`), we still need to listen on
// a port or the server never actually starts.
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// ❌ No mongoose.connect() — MongoDB removed

module.exports = app;