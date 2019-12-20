import axios from "axios";

const { GOOGLE_BOOKS_API_ROOT, GOOGLE_BOOKS_API_KEY } = process.env;

export default async (req, res, error) => {
  try {
    const { q } = req.query;

    const { data } = await axios.get(`${GOOGLE_BOOKS_API_ROOT}/volumes`, {
      params: { q, key: GOOGLE_BOOKS_API_KEY }
    });

    const books = data.items?.map(({ id, volumeInfo: {
      authors,
      description,
      imageLinks,
      infoLink,
      title
    }}) => ({
      id,
      authors,
      description,
      image: imageLinks?.thumbnail,
      link: infoLink,
      title
    }));

    res.json(books || []);
  } catch (err) {
    error(err);
  }
};
