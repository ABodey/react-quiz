# React Quiz

This quiz is designed to test your familiarity with basic React components.

## Rules

1. **Make an initial commit when you start your work**
1. You have **40 minutes** to complete what you can.
1. You must complete this work on your own within the allotted time
    * Keep a good commit history to show progression of work.
    * You **need to manage your time** to have PR and last commit before deadline (remember, you can
    open PR and take advantage of travis checking your commits by pushing frequently).
1. You may use normal resources that a software developer uses on the job (docs, google, your prior work)
1. You may install npm packages of your choosing
1. Use general best practices and common sense
    * Highly recommended to implement what is needed, no more no less
    * Blind boilerplate may not be helpful and will likely create more work
    * **Focus effort on requirements of the lab**
1. Total possible points are 50. You will be graded out of 35 points

## Overarching requirements
* Do a fork and PR like a normal lab
* Use create-react-app to bootstamp your react app

## Requirements

Build an app that has a list of books. Use the following component structure:

* `App` - top level App component
  * `Books` - component that owns "books" state
    * [`Book`] - component that displays each book title and author
    * `AddBook` - form for adding a new book with title and author
    
You can use `setState` and `props` (no redux required)
    
Books should have a title and an author.

There are no testing requirements

map state to props