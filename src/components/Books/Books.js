import React, { Fragment, PureComponent } from 'react'
import Book from 'components/Book/Book'
import AddBook from 'components/AddBook/AddBook'


class Books extends PureComponent {
  
  state = {
    books: [],
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
        <AddBook />
      </Fragment>
    )}
 }

export default Books

