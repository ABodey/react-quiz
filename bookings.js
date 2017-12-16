import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { v1 } from 'uuid'

class Book extends PureComponent {
  static propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const { author, title } = this.props

    return(
      <li>{`${title} by ${author}`}</li>
    )
  }
}

class AddBook extends PureComponent {
  static propTypes = {
    onAddBook: PropTypes.func.isRequired,
  }

  render() {
    const { onAddBook } = this.props

    return (
      <form
        autoComplete="off"
        onSubmit={onAddBook}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          required
        />
        <button type="submit">Add Book</button>
      </form>
    )
  }
}

class Books extends PureComponent {
  state = {
    books: [],
  }

  onAddBook = (event) => {
    event.preventDefault()

    const author = event.target.author.value
    const title = event.target.title.value

    this.setState({
      books: [
        ...this.state.books,
        {
          _id: v1(),
          author,
          title,
        },
      ],
    })

    event.target.reset()
  }

  render() {
    const { books } = this.state

    return (
      <Fragment>
        {books.length
          ? (
            <ul>
              {books.map((book) => (
                <Book
                  {...book}
                  key={book._id}
                />
              ))}
            </ul>
          )
          : (
            <p>You don't have any books. Add one!</p>
          )
        }
        <AddBook onAddBook={this.onAddBook} />
      </Fragment>
    )
  }
}

class App extends PureComponent {
  render() {
    return (
      <Books />
    )
  }
}

export default App