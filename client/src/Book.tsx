import React, { useState } from "react";

import { Card, Image, Container, Row, Col, Button } from "./bootstrap";
import Octicon, { LinkExternal, Bookmark, X } from "@primer/octicons-react";
import Loading from "./Loading";

const Book = ({ book, className, isSaved, saveBook, deleteBook }: any) => {
  const [loading, setLoading] = useState(false);
  const { title, authors, image, link, description } = book;

  const saveClick = async () => {
    setLoading(true);
    await saveBook(book);
    setLoading(false);
  };

  const deleteClick = async () => {
    setLoading(true);
    await deleteBook(book.id);
    setLoading(false);
  };

  return (
    <Card className={className}>
      <Card.Header>
        {isSaved && <Button variant="danger" className="float-right" onClick={deleteClick}>
          {!loading && <Octicon icon={X} />}
          <Loading variant="save" show={loading} />
        </Button>}
        {!isSaved && saveBook && <Button variant="info" className="float-right" onClick={saveClick}>
          { !loading && <>Save
          <Octicon className="ml-2" icon={Bookmark} />
          </>}
          <Loading variant="save" show={loading} />
        </Button>}
        {link && (
          <Button
            variant="info"
            className="float-right mr-2"
            onClick={() => window.open(link, "_blank")}>
            View
            <Octicon className="ml-2" icon={LinkExternal} />
          </Button>
        )}
        <h5>{title}</h5>
        {authors && authors.length > 0 && (
          <h6 className="text-muted">by {authors.join(", ")}</h6>
        )}
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            {image && (
              <Col xs={3} className="text-center">
                <Image src={image} />
              </Col>
            )}
            <Col>{description || <h5>No description.</h5>}</Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Book;
