import React, { useState } from "react";
import axios from "axios";

import { Form, Button, Card } from "./bootstrap";
import Octicon, { Search } from "@primer/octicons-react";
import Book from "./Book";
import Loading from "./Loading";

const SearchBooks = ({ savedBooks, saveBook, deleteBook }: any) => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState();
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const searchBooks = async (e: any) => {
    try {
      e.preventDefault();
      if (!query) return;
      if (!searchPerformed) {
        setSearchPerformed(true);
      }
      setLoading(true);
      const { data } = await axios.get("/api/search-books", {
        params: {
          q: query
        }
      });
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setLoading(false);
      setResults(data);
    } catch (err) {
      setLoading(false);
      alert(err.response.data);
    }
  };

  const isSaved = (book: any) =>
    savedBooks.reduce(
      (saved: boolean, savedBook: any) => saved || savedBook.id === book.id,
      false
    );

  return (
    <>
      <Card bg="light" className="mb-5">
        <Card.Body>
          <Form>
            <Form.Group controlId="book">
              <Form.Label>Book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a book title"
                onChange={(e: any) => setQuery(e.target.value)}
                onSubmit={searchBooks}
              />
            </Form.Group>
            <Button
              variant="info"
              type="submit"
              className="float-right"
              onClick={searchBooks}>
              Search <Octicon className="ml-2" icon={Search} />
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Loading show={loading} variant="search" />
      {searchPerformed && !loading && results.length === 0 && <h4>No results.</h4>}
      {results.length > 0 && !loading && (
        <Card bg="light">
          <Card.Header className="text-muted">Results</Card.Header>
          <Card.Body>
            {results.map((book: any) => (
              <Book
                key={book.id}
                className="mb-4"
                book={book}
                isSaved={isSaved(book)}
                saveBook={saveBook}
                deleteBook={deleteBook}
              />
            ))}
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default SearchBooks;
