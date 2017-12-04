import React from 'react'

const AddBook = ({ onAddBook }) => (
  <form onSubmit={onAddBook}> 
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

export default AddBook
