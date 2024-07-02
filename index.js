const cards = document.querySelector('.cards');
const table = document.getElementById('table');
const btn = document.querySelector('.btn');

const titleField = document.getElementById('titleField');
const authorField = document.getElementById('authorField');
const pagesField = document.getElementById('pagesField');
const isRead = document.getElementById('yes');

titleField.value = '';
authorField.value = '';
pagesField.value = '';
isRead.value = '';

const myLibrary = [];

function Book(title, author, numPages, isRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.numPages}, ${this.isRead}`;
  };

  console.log('info', this.info);
}

function addBookToLibrary(title, author, numPages, isRead) {
  let row = table.insertRow();
  let titleCell = row.insertCell(0);
  let authorCell = row.insertCell(1);
  let numPagesCell = row.insertCell(2);
  let isReadCell = row.insertCell(3);

  titleCell.innerHTML = title;
  authorCell.innerHTML = author;
  numPagesCell.innerHTML = numPages;
  isReadCell.innerHTML = isRead ? 'Yes' : 'No';

  const book = new Book(title, author, numPages, isRead);
  myLibrary.push(book);
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary(
    titleField.value,
    authorField.value,
    pagesField.value,
    isRead.checked
  );
  console.log('is Read: ', isRead.checked);
});

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'Not read');
// myLibrary.push(theHobbit);

// const trainspotting = new Book('Trainspotting', 'Irvine Welsh', '344', 'Read');
// myLibrary.push(trainspotting);

// const terrorist = new Book('Terrorist', 'John Updike', '320', 'Not read');
// myLibrary.push(terrorist);
