import express from "express";
const router = express.Router();
const books = [];



router.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

router.get("/books", (req, res) => {
  res.json(books);
});

router.get("/books/:id/read", (req, res) => {
  const book = books.find(b => b.id === id);

if (!book) {
  return res.status(404).json({
    error: {
      code: "BOOK_NOT_FOUND",
      message: "Book does not exist"
    }
  });
}

res.json({
  signedUrl: `https://example.com/${book.key}`
});
});


router.post("/upload", (req, res) => {
  const id = Date.now().toString();

const newBook = {
  id,
  title,
  author,
  key: `books/${id}.pdf`
};

books.push(newBook);

return res.json({
  id,
  key: newBook.key
});
});

export default router;