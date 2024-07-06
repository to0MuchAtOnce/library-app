const cards = document.querySelector('.cards');
const table = document.getElementById('table');
const addBtn = document.querySelector('.addBtn');
const cancelBtn = document.querySelector('.cancelBtn');
const addNewBook = document.querySelector('.add-new-book');
const modal = document.querySelector('.modal');

const titleField = document.getElementById('titleField');
const authorField = document.getElementById('authorField');
const pagesField = document.getElementById('pagesField');
const form = document.getElementById('form');

titleField.value = '';
authorField.value = '';
pagesField.value = '';

const myLibrary = [];

function Book(title, author, numPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.numPages}, ${this.isRead}`;
  };
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  renderLibrary();
}

function renderLibrary() {
  const table = document.querySelector('#tableBody');
  table.innerHTML = '';
  myLibrary.forEach((book, index) => {
    const bookRow = document.createElement('tr');
    bookRow.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.numPages}</td>
    <td>${book.readStatus}</td>
    <td><button
      class="delete btn delete-btn"
      id="delete"
      onclick="deleteBook(${index})"
    >Delete</button></td>`;
    table.appendChild(bookRow);
  });
}

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const title = titleField.value;
  const author = authorField.value;
  const numPages = pagesField.value;
  let readStatus;
  if (document.getElementById('yes').checked) {
    readStatus = 'Yes';
  } else if (document.getElementById('no').checked) {
    readStatus = 'No';
  } else {
    readStatus = 'N/A';
  }

  const newBook = new Book(title, author, numPages, readStatus);

  titleField.value = '';
  authorField.value = '';
  pagesField.value = '';
  document.getElementById('yes').checked = false;
  document.getElementById('no').checked = false;

  addBookToLibrary(newBook);
});

function deleteBook(index) {
  myLibrary.splice(index, 1);
  renderLibrary();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('yes').checked = false;
  document.getElementById('no').checked = false;
});

addNewBook.addEventListener('click', () => {
  modal.style.display = 'block';
  if ((modal.style.display = 'block')) {
    addNewBook.style.display = 'none';
  }
});

cancelBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  if ((modal.style.display = 'none')) {
    if ((addNewBook.style.display = 'none')) {
      addNewBook.style.display = 'block';
    } else {
      cancelNewBook.style.display = 'none';
    }
  }
});
