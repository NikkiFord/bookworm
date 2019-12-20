import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: String,
  authors: [String],
  description: String,
  image: String,
  link: String,
  title: String
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
