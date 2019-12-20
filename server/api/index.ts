import express from "express";
import searchBooks from "./search-books";
import getBooks from "./get-saved-books";
import saveBook from "./save-book";
import deleteBook from "./delete-saved-book";

const apiRouter = express.Router();

apiRouter
  .get("/search-books", searchBooks)
  .get("/books", getBooks)
  .post("/book", saveBook)
  .delete("/book/:id", deleteBook);

export default apiRouter;
