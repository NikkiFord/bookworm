import React, { useState, useEffect } from "react";
import { useRoutes, navigate } from "hookrouter";
import axios from "axios";
import "./App.css";

import { Container, Row, Col, Navbar, Nav, Jumbotron } from "./bootstrap";
import SearchBooks from "./SearchBooks";
import SavedBooks from "./SavedBooks";

const routes = {
  "/search": () => (savedBooks: any, saveBook: any, deleteBook: any) => (
    <SearchBooks
      savedBooks={savedBooks}
      saveBook={saveBook}
      deleteBook={deleteBook}
    />
  ),
  "/saved": () => (savedBooks: any, _: any, deleteBook: any) => (
    <SavedBooks
      savedBooks={savedBooks}
      deleteBook={deleteBook}
    />
  )
};

const App: React.FC = () => {
  const [savedBooks, setSavedBooks] = useState<any[]>([]);

  const saveBook = async (book: any) => {
    try {
      await axios.post("/api/book", { book });
      setSavedBooks([...savedBooks, book]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBook = async (id: any) => {
    try {
      await axios.delete(`/api/book/${id}`);
      setSavedBooks(savedBooks.filter((savedBook) => savedBook.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const route = useRoutes(routes) || routes["/search"]();
  const pageContent = route(savedBooks, saveBook, deleteBook);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/books");
        setSavedBooks(data);
      } catch (err) {
        alert(err.response.data);
      }
    })();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Bookworm</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link onClick={() => navigate("/search")}>Search</Nav.Link>
                <Nav.Link onClick={() => navigate("/saved")}>Saved</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Jumbotron className="text-center">
            <h1>Bookworm</h1>
            <h3>Search for Books and Save for Later!</h3>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>{pageContent}</Col>
      </Row>
    </Container>
  );
};

export default App;
