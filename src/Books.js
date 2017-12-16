import React, { PureComponent } from 'react';

class Books extends PureComponent {
state = {
    books: []
}

    onAddBook = (event) => {
        event.preventDefault();

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
            ]
        })
        event.target.reset();
    }

    render() {
        return (
            <div >
                {books.length ? (
                    <ul> {books.map((book => {
                        <Book { ...book} key={book._id}
                        />
                    }))}
                    </ul>    
                ) : (
                    <p> None found </p>
                )}
                <AddBook onAddBook={this.onAddBook} />
            </div>
        );
    }
}

export default Books;
