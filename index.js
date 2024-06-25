const cards = document.querySelector('.cards');
const table = document.getElementById('table');

const myLibrary = [];

function Book(title, author, numPages, isRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.numPages}, ${this.isRead}`;
  };
}

function addBookToLibrary() {
  myLibrary.forEach((book) => {
    let row = table.insertRow();
    let title = row.insertCell(0);
    let author = row.insertCell(1);
    let numPages = row.insertCell(2);
    let isRead = row.insertCell(3);
    title.innerHTML = book.title;
    author.innerHTML = book.author;
    numPages.innerHTML = book.numPages;
    isRead.innerHTML = book.isRead;
  });
}

const theHobbit = new Book(
  'The Hobbit',
  'By J.R.R. Tolkien',
  '295',
  'Not read'
);
myLibrary.push(theHobbit);

const trainspotting = new Book(
  'Trainspotting',
  'By Irvine Welsh',
  '344',
  'Read'
);
myLibrary.push(trainspotting);

addBookToLibrary();
