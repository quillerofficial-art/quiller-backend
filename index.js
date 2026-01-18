import express from "express";
const app = express();

app.use(express.json());

// --------------------
// Health Check
// --------------------
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// --------------------
// GET /books (dummy)
// --------------------
app.get("/books", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Dummy Book One",
      author: "Test Author",
      coverUrl: "https://example.com/cover1.jpg",
      type: "ebook"
    },
    {
      id: "2",
      title: "Dummy Video Post",
      author: "Video Creator",
      coverUrl: "https://example.com/video1.jpg",
      type: "video"
    }
  ]);
});

// --------------------
// POST /upload (dummy)
// --------------------
app.post("/upload", (req, res) => {
  res.json({
    key: "books/dummy.pdf"
  });
});

// --------------------
// GET /books/:id/read (dummy)
// --------------------
app.get("/books/:id/read", (req, res) => {
  res.json({
    signedUrl: "https://example.com/dummy.pdf"
  });
});

// --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});