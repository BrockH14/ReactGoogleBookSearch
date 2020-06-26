import React, { Component } from "react";
import axios from "axios";
import { List } from "./List";

class Home extends Component {
  state = {
    bookInput: "",
    books: [],
    booksInDb: [],
    saved: false
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get("/api/books").then(response => {
      this.setState({ booksInDb: response.data });
    });
  };

  handleChange = event => {
    this.setState({ bookInput: event.target.value });
  };

  searchBook = event => {
    event.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.bookInput.replace(/\s/g,"+")}`
      )
      .then(incomingResult => {
        let results = incomingResult.data.items;

        results = results.map(element => {
          element = {
            id: element.id,
            title: element.volumeInfo.title,
            authors: element.volumeInfo.authors,
            description: element.volumeInfo.description,
            image: element.volumeInfo.imageLinks.thumbnail,
            link: element.volumeInfo.infoLink,
          };
          return element;
        });
        this.setState({ books: results });
      });
  };

  saveBook = event => {
    const id = event.target.id;
    const book = this.state.books.find(book => book.id === id);
    axios.post("/api/books", book);
    event.target.disabled = true;
    this.getBooks();
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.searchBook}>
          <div className="ui field">
            <label>
              Search Book:
              <input
                type="text"
                name="bookName"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <input className="ui button" type="submit" value="Submit" />
        </form>
        <div className="ui items">
          {this.state.books.map(book => (
            <List
              id={book.id}
              image={book.image}
              title={book.title}
              authors={book.authors}
              description={book.description}
              link={book.link}
              message="Save"
              buttonFunction={(id, image, title, description, link) => {
                this.saveBook(id, image, title, description, link);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;