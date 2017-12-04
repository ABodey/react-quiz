import React, { Fragment, PureComponent } from 'react'
import Book from 'components/Book/Book'
import AddBook from 'components/AddBook/AddBook'
import { v1 } from 'uuid'

class Books extends PureComponent {
  
  state = {
    books: [],
  }

  onAddBook = (event) => {
    event.preventDefault()

    const author = event.target.author.value
    const title = event.target.title.value

    this.setState({ 
      books:[
        ...this.state.books,
        { 
          _id: v1(), 
          author, 
          title 
        }
      ]
     })
     event.target.reset()
  }

  render(){
    const { books } = this.state

    return(
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
           <p>You dont have any books</p> 
         )
        }
        <AddBook onAddBook={this.onAddBook}/>
      </Fragment>
    )}
 }

export default Books

