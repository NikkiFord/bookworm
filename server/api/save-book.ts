import { Book } from "../db";

export default async (req, res, error) => {
  try {
    const { book } = req.body;

    const newBook = new Book(book);

    const { id } = await newBook.save();

    res.send(id);
  } catch (err) {
    error(err);
  }
};
