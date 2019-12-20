import React from "react";
import { useTransition, animated } from "react-spring";

import { Card } from "./bootstrap";
import Book from "./Book";

const SavedBooks = ({ savedBooks, deleteBook }: any) => {
  const transitions = useTransition(
    savedBooks,
    book => book.id,
    {
      from: { transform: "translate3d(-1500px,0,0)" },
      enter: { transform: "translate3d(0,0px,0)" },
      leave: { transform: "translate3d(1500px,0,0)" }
    }
  );

  return (
    <Card bg="light">
      <Card.Header className="text-muted">Saved Books</Card.Header>
      <Card.Body>
        {transitions.map(({ item: book, props, key }: any) => (
          <animated.div key={key} style={props}>
            <Book
              className="mb-4"
              book={book}
              isSaved={true}
              deleteBook={deleteBook}
            />
          </animated.div>
        ))}
        {transitions.length === 0 && <h4 className="text-muted">Nothing here.</h4>}
      </Card.Body>
    </Card>
  );
};

export default SavedBooks;
