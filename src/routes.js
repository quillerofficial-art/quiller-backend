import express from "express";

const router = express.Router();

// HEALTH
router.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// DUMMY BOOKS
router.get("/books", (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: "1",
        title: "Dummy Book One",
        author: "Quiller"
      },
      {
        id: "2",
        title: "Dummy Book Two",
        author: "Quiller"
      }
    ]
  });
});

// DUMMY READ
router.get("/books/:id/read", (req, res) => {
  res.json({
    success: true,
    signedUrl: "https://example.com/dummy.pdf"
  });
});

// DUMMY UPLOAD
router.post("/upload", (req, res) => {
  res.json({
    success: true,
    key: "books/dummy.pdf"
  });
});

export default router;