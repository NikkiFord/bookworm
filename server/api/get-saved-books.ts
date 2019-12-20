import { Book } from "../db";

export default async (_, res, error) => {
  try {
    const books = await Book.find();

    res.json(books);
  } catch (err) {
    error(err);
  }
};
