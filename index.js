import express from "express";

const app = express();

// Health check route (MANDATORY)
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Railway production port support
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});