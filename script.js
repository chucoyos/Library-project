let myLibrary = [
  { author: 'author1', title: 'Title1', description: 'description1' },
  { author: 'author1', title: 'Title1', description: 'description1' },
  { author: 'author1', title: 'Title1', description: 'description1' },
  { author: 'author1', title: 'Title1', description: 'description1' },
  { author: 'author1', title: 'Title1', description: 'description1' },
]

function Book(author, title, description, num_of_pages, book_id, is_read) {
  // the constructor...
  this.author = author
  this.title = title
  this.description = description
  this.num_of_pages = num_of_pages
  this.book_id = book_id
  this.is_read = is_read
}

function addBookToLibrary() {
  // do stuff here
}

function ShowBooks() {
  const tit = document.querySelector('#div1')
  // loop through array and show all the books
  for (let book of myLibrary) {
    for (let property in book) {
      tit.innerHTML = `${book[property]}`;
    }
  }
}

ShowBooks()
