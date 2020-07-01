import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";
import BookList from "../components/BookList/bookList";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  state = {
    books: [],
  };

componentDidMount() {
  this.getSavedBooks();
}

getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
  };

deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.getSavedBooks())
      .catch(err => console.log(err));
  };

render() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                <Jumbotron>
                <h1>Books On My List</h1>
                </Jumbotron>
                  <Card title="Saved Books" icon="download">
                  {this.state.books.length ? (
                    <List>
                      {this.state.books.map(book => (
                        <BookList
                          key={book._id}
                          title={book.title}
                          link={book.link}
                          authors={book.authors.join(", ")}
                          description={book.description}
                          image={book.image}
                          Button={() => (
                            <DeleteBtn
                              onClick={() => this.deleteBook(book._id)}
                              className="btn btn-danger ml-2"
                            >
                              Delete
                            </DeleteBtn>
                          )}
                        />
                      ))}
                    </List>
                  ) : (
                    <h2 className="text-center">No Saved Books</h2>
                  )}
                  </Card>
                </Col>
            </Row>
        </Container>
    )
}
}

export default Saved;