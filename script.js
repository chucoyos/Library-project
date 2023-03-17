let myLibrary = [
  {
    author: 'Marijn Haverbeke',
    title: 'Eloquent JavaScript',
    description: 'A modern introduction to...',
    num_of_pages: 640,
    is_read: false,
  },
  {
    author: 'Jon Duckett',
    title: 'The definitive guide to HTML5',
    description: 'A modern introduction to...',
    num_of_pages: 550,
    is_read: false,
  },
  {
    author: 'Eric Freeman',
    title: 'Design Patterns',
    description: 'Design patterns are typical...',
    num_of_pages: 640,
    book_id: 1,
    is_read: false,
  },
  {
    author: 'Kyle Simpson',
    title: 'Clean JavaScript',
    description: 'A modern introduction to...',
    num_of_pages: 420,
    book_id: 1,
    is_read: false,
  }
]

function Book(
  author,
  title,
  description,
  num_of_pages,
  book_id,
  is_read
) {
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
  const cardContainer = document.querySelector('.card-container')
  // loop through array and show all the books
  for (let book of myLibrary) {
    const card = document.createElement('div')
    const title = document.createElement('div')
    const author = document.createElement('div')
    const description = document.createElement('div')
    const num_of_pages = document.createElement('div')
    const btn_container = document.createElement('div')
    const btn_read = document.createElement('button')
    const btn_remove = document.createElement('button')
    const btn_show = document.createElement('button')
    card.classList.add('card')
    title.classList.add('title')
    author.classList.add('author')
    description.classList.add('description')
    num_of_pages.classList.add('pages')
    btn_container.classList.add('button-container')
    btn_read.classList.add('read')
    btn_show.classList.add('show')
    btn_read.addEventListener('click', () => {
      if (book.is_read === false) {
        book.is_read = true
        btn_read.classList.add('read-true')
      } else {
        book.is_read = false
        btn_read.classList.remove('read-true')
      }
    })
    btn_remove.classList.add('remove')
    btn_remove.addEventListener('click', () => {
      btn_remove.parentElement.parentElement.animate(
        [
          // keyframes
          { transform: 'translateY(0)' },
          { transform: 'translateY(-100%)', opacity: 0 },
        ],
        {
          // timing options
          duration: 600,
          iterations: 1,
        }
      )
      setTimeout(() => {
        btn_remove.parentElement.parentElement.remove()
        myLibrary.splice(myLibrary.indexOf(book), 1)
      }, 500)
    })

    btn_show.addEventListener('click', () => {
      const main = document.querySelector('.container')
      const modal = document.createElement('div')
      const modal_content = document.createElement('div')
      const modal_title = document.createElement('div')
      const modal_author = document.createElement('div')
      const modal_description = document.createElement('div')
      const modal_num_of_pages = document.createElement('div')
      main.appendChild(modal)
      modal.appendChild(modal_content)
      modal_content.appendChild(modal_title)
      modal_content.appendChild(modal_author)
      modal_content.appendChild(modal_description)
      modal_content.appendChild(modal_num_of_pages)
      modal.classList.add('modal')
      modal_content.classList.add('modal-content')
      modal_title.classList.add('modal-title')
      modal_author.classList.add('modal-author')
      modal_description.classList.add('modal-description')
      modal_num_of_pages.classList.add('modal-pages')
      modal_title.innerHTML = `${book.title}`
      modal_author.innerHTML = `${book.author}`
      modal_description.innerHTML = `${book.description}`
      modal_num_of_pages.innerHTML = `${book.num_of_pages} pages`
      modal.addEventListener('click', () => {
        modal.classList.add('modal-hide')
        setTimeout(() => {
          modal.remove()
        }, 500)
      })
    })
    cardContainer.appendChild(card)
    for (let property in book) {
      card.appendChild(title)
      card.appendChild(author)
      card.appendChild(description)
      card.appendChild(num_of_pages)
      card.appendChild(btn_container)
      title.innerHTML = `${book.title}`
      author.innerHTML = `${book.author}`
      description.innerHTML = `${book.description}`
      num_of_pages.innerHTML = `Pages: ${book.num_of_pages}`
      btn_container.appendChild(btn_read)
      btn_container.appendChild(btn_remove)
      btn_container.appendChild(btn_show)
      btn_read.innerHTML = 'Read'
      btn_remove.innerHTML = 'Remove'
      btn_show.innerHTML = 'Show'
    }
  }


  const newBook = document.querySelector('.newBookBtn').addEventListener('click', (e) => {
    e.preventDefault()
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const description = document.querySelector('#description')
    const num_of_pages = document.querySelector('#num_of_pages')
    myLibrary.push({
      author: author.value,
      title: title.value,
      description: description.value,
      num_of_pages: pages.value,
      is_read: false,
    })
    if(author.value !== '' && title.value !== '' && description.value !== '') {
      addToView()
      title.value = ''
      author.value = ''
      description.value = ''
      num_of_pages.value = ''
    } else {
      alert('Please fill all the fields')
    }
  })
}
function addToView() {
  const cardContainer = document.querySelector('.card-container')
  const card = document.createElement('div')
  const title = document.createElement('div')
  const author = document.createElement('div')
  const description = document.createElement('div')
  const num_of_pages = document.createElement('div')
  const btn_container = document.createElement('div')
  const btn_read = document.createElement('button')
  const btn_remove = document.createElement('button')
  const btn_show = document.createElement('button')
  card.classList.add('card')
  title.classList.add('title')
  author.classList.add('author')
  description.classList.add('description')
  num_of_pages.classList.add('pages')
  btn_container.classList.add('button-container')
  btn_read.classList.add('read')
  btn_show.classList.add('show')
  btn_remove.classList.add('remove')
  cardContainer.appendChild(card)
  card.appendChild(title)
  card.appendChild(author)
  card.appendChild(description)
  card.appendChild(num_of_pages)
  card.appendChild(btn_container)
  btn_container.appendChild(btn_read)
  btn_container.appendChild(btn_remove)
  btn_container.appendChild(btn_show)
  btn_read.innerHTML = 'Read'
  btn_remove.innerHTML = 'Remove'
  btn_show.innerHTML = 'Show'
  title.innerHTML = `${myLibrary[myLibrary.length - 1].title}`
  author.innerHTML = `${myLibrary[myLibrary.length - 1].author}`
  description.innerHTML = `${myLibrary[myLibrary.length - 1].description}`
  num_of_pages.innerHTML = `Pages: ${myLibrary[myLibrary.length - 1].num_of_pages}`
  btn_read.addEventListener('click', () => {
    if (myLibrary[myLibrary.length - 1].is_read === false) {
      myLibrary[myLibrary.length - 1].is_read = true
      btn_read.classList.add('read-true')
    } else {
      myLibrary[myLibrary.length - 1].is_read = false
      btn_read.classList.remove('read-true')
    }
  }
  )
  btn_remove.addEventListener('click', () => {
    btn_remove.parentElement.parentElement.animate(
      [
        // keyframes
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)', opacity: 0 },
      ],
      {
        // timing options
        duration: 600,
        iterations: 1,
      }
    )
    setTimeout(() => {
      btn_remove.parentElement.parentElement.remove()
      myLibrary.splice(myLibrary.indexOf(myLibrary[myLibrary.length - 1]), 1)
    }, 500)
  }
  )
  btn_show.addEventListener('click', () => {
    const main = document.querySelector('.container')
    const modal = document.createElement('div')
    const modal_content = document.createElement('div')
    const modal_title = document.createElement('div')
    const modal_author = document.createElement('div')
    const modal_description = document.createElement('div')
    const modal_num_of_pages = document.createElement('div')
    main.appendChild(modal)
    modal.appendChild(modal_content)
    modal_content.appendChild(modal_title)
    modal_content.appendChild(modal_author)
    modal_content.appendChild(modal_description)
    modal_content.appendChild(modal_num_of_pages)
    modal.classList.add('modal')
    modal_content.classList.add('modal-content')
    modal_title.classList.add('modal-title')
    modal_author.classList.add('modal-author')
    modal_description.classList.add('modal-description')
    modal_num_of_pages.classList.add('modal-pages')
    modal_title.innerHTML = `${myLibrary[myLibrary.length - 1].title}`
    modal_author.innerHTML = `Author: ${myLibrary[myLibrary.length - 1].author}`
    modal_description.innerHTML = `Description: ${myLibrary[myLibrary.length - 1].description}`
    modal_num_of_pages.innerHTML = `${myLibrary[myLibrary.length - 1].num_of_pages} pages`
    modal.addEventListener('click', () => {
      modal.classList.add('modal-hide')
      setTimeout(() => {
        modal.remove()
      }, 500)
    })
  }
  )
  
}
ShowBooks()
