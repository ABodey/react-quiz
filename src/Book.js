import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Book extends PureComponent {
    static PropTypes ={
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired    
    }

    render() {
        const { author, title } = this.props

        return(
            <li>{`${title} by ${author}`}</li>
        )
    }

}

export default Book
