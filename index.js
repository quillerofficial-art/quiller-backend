import express from "express";

const app = express();
app.use(express.json());

// HEALTH CHECK
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// DUMMY BOOK LIST
app.get("/books", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Dummy Book One",
      author: "Test Author",
      cover: "https://dummyimage.com/200x300/000/fff",
    },
    {
      id: "2",
      title: "Dummy Book Two",
      author: "Another Author",
      cover: "https://dummyimage.com/200x300/333/fff",
    },
  ]);
});

// DUMMY READ API
app.get("/books/:id/read", (req, res) => {
  res.json({
    signedUrl: "https://example.com/dummy.pdf",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});