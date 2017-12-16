import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

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

export default AddBook