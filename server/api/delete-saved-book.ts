import { Book } from "../db";

export default async (req, res, error) => {
  try {
    const { id } = req.params;

    await Book.deleteOne({ id });

    res.send();
  } catch (err) {
    error(err);
  }
};
