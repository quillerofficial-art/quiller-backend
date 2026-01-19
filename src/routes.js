import express from "express";
const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

router.get("/books", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Dummy Book",
      author: "Quiller",
    },
  ]);
});

router.get("/books/:id/read", (req, res) => {
  const { id } = req.params;

  if (id !== "1") {
    return res.status(404).json({
      error: {
        code: "BOOK_NOT_FOUND",
        message: "Book does not exist",
      },
    });
  }

  res.json({
    signedUrl: "https://example.com/dummy.pdf",
  });
});

export default router;