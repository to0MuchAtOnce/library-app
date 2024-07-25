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

let isEditing = false;

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
    return `${this.title}, ${this.author}, ${this.numPages}, ${this.readStatus}`;
  };
}

// Push book to library array
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  renderLibrary();
}

function renderLibrary() {
  const table = document.querySelector('#tableBody');
  table.innerHTML = '';
  myLibrary.forEach((book, index) => {
    const bookRow = document.createElement('tr');

    // Create edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerHTML = '<i class="ph ph-pencil-simple edit-icon"></i>';
    editBtn.addEventListener('click', function () {
      isEditing = true;
      if (isEditing) {
        const originalSelect = document.getElementById('readStatus');
        const clonedSelect = originalSelect.cloneNode(true);

        // Remove the ID from the cloned select element to avoid duplicate IDs
        clonedSelect.removeAttribute('id');

        // Generate a unique ID for the cloned select element
        const uniqueId = 'readStatus-' + index;
        clonedSelect.id = uniqueId;
        console.log(clonedSelect.id);

        // Set the cloned select value to the current read status
        clonedSelect.value = book.readStatus;

        // Replace the text content of the read status cell with the cloned select element
        readStatusCell.textContent = '';
        readStatusCell.appendChild(clonedSelect);
        console.log('Editing');

        // Event listener to handle the selection change
        clonedSelect.addEventListener('change', function () {
          book.readStatus = clonedSelect.value;
          readStatusCell.textContent = book.readStatus + ' ';
          readStatusCell.appendChild(editBtn);
          console.log(book.readStatus);
          isEditing = false;
        });
      } else {
        // clonedSelect.display = 'none';
        console.log('Not editing');
      }
    });

    // Create cells for book details
    bookRow.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.numPages}</td>`;

    // Create read status cell
    const readStatusCell = document.createElement('td');
    readStatusCell.textContent = book.readStatus + ' ';
    readStatusCell.appendChild(editBtn);
    bookRow.appendChild(readStatusCell);

    // Create delete button
    const deleteBtnCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete btn delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('onclick', `deleteBook(${index})`);
    deleteBtnCell.appendChild(deleteBtn);
    bookRow.appendChild(deleteBtnCell);

    // Append row to table
    table.appendChild(bookRow);
  });
}

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const title = titleField.value;
  const author = authorField.value;
  const numPages = pagesField.value;

  // Access the value of the selected option in the dropdown
  const readStatus = document.getElementById('readStatus').value;

  const newBook = new Book(title, author, numPages, readStatus);

  titleField.value = '';
  authorField.value = '';
  pagesField.value = '';
  document.getElementById('readStatus').selectedindex = 0; // Reset select field to its first option

  addBookToLibrary(newBook);
  modal.style.display = 'none';
  addNewBook.style.display = 'block';
});

// Change the read status of a book
function editReadStatus(editBtn) {
  isEditing = true;
  console.log(isEditing);
  if (editBtn) {
    console.log('Hello');
  }
}
// Delete book from library
function deleteBook(index) {
  myLibrary.splice(index, 1);
  renderLibrary();
}

// Event Listeners

// Add new book
addNewBook.addEventListener('click', () => {
  modal.style.display = 'block';
  if ((modal.style.display = 'block')) {
    addNewBook.style.display = 'none';
  }
});

// Cancel adding new book
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
