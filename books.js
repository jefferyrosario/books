
function Book(author, title, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

const myLibrary = []

function addBookToLibrary(author, title, pages, read) {
    const book = new Book(author, title, pages, read)
    myLibrary.push(book)
}


function showBooksInLibrary() {

    bookSelector = document.querySelector('.book-body')

    // Clear existing rows
    bookSelector.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const newRow = document.createElement('tr')

        for (const key in book) {
            const data = document.createElement('td')
            data.textContent = book[key]
            newRow.appendChild(data)
        }

    const actionCell = document.createElement('td')
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', () => {
        deleteBook(index)
    })
    actionCell.appendChild(deleteButton)
    newRow.appendChild(actionCell)

    bookSelector.appendChild(newRow)
    })

/** 
    for (const[index, book] of myLibrary.entries()) {
        newRow = document.createElement('tr')
        deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.setAttribute('id', index)
        deleteButton.addEventListener('click', () => {
            deleteBook(index)
        })
        for (let key in book){
            data = document.createElement('td')
            data.textContent = book[key]
            newRow.appendChild(data)
            newRow.appendChild(deleteButton)
        }
        bookSelector.appendChild(newRow)
    }
        */

}

function deleteBook(index) {
    myLibrary.splice(index, 1)
    showBooksInLibrary()
}

function showForm(){
    const form = document.getElementById("bookForm")
    form.style.display = form.style.display === "none" ? "block" : "none";
}



const submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', () => {

    const author = document.getElementById('author').value
    const title = document.getElementById('title').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value

    addBookToLibrary(author, title, pages, read)
    showBooksInLibrary()
    event.preventDefault()

}) 

const allDeleteButtons = document





