let myLibrary = [];

const addBook = document.querySelector(".addBook");
const modal = document.querySelector('.modal');
const submitBook = document.querySelector(".submitBook");
const bookShelf = document.querySelector('.bookShelf');

addBook.addEventListener('mousedown', function () { modal.style.opacity = "100%"});
submitBook.addEventListener('mousedown', () => addBookToLibrary()); 

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.appendBook = function() {
        const newBook = document.createElement("div");
        newBook.classList.add("book");
        bookShelf.appendChild(newBook);

        let bookTitle = document.createElement('p');
        newBook.appendChild(bookTitle);
        bookTitle.textContent = '"' + title + '"';

        let bookAuthor = document.createElement('p');
        newBook.appendChild(bookAuthor);
        bookAuthor.textContent = author;

        let bookPages = document.createElement('p');
        newBook.appendChild(bookPages);
        bookPages.textContent = pages + " pages";

        if (document.querySelector(".read:checked")) {
            checked = "Read";
        } else {
            checked = "Not read";
        }

        let bookRead = document.createElement('p');
        newBook.appendChild(bookRead);
        bookRead.textContent = checked;
        
    }
}


function addBookToLibrary() {
    modal.style.opacity = "0";
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector('.pages').value;
    let read = document.querySelector('.read').value;

    const book = new Book(title, author, pages, read);

    book.appendBook();
}