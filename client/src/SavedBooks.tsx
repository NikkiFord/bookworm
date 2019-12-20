import React from "react";

import { Card } from "./bootstrap";
import Book from "./Book";

const SavedBooks = ({ savedBooks, deleteBook }: any) => {
  console.log(savedBooks);
  return (
    <Card bg="light">
      <Card.Header className="text-muted">Saved Books</Card.Header>
      <Card.Body>
        {savedBooks.length === 0 && <h4 className="text-muted">Nothing here.</h4>}
        {savedBooks.map((book: any) => (
          <Book
            key={book.id}
            className="mb-4"
            book={book}
            isSaved={true}
            deleteBook={deleteBook}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default SavedBooks;
