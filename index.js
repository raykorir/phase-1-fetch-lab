function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    // Convert the response to JSON
    .then((resp) => resp.json())
    // Call renderBooks() with the JSON-ified data
    .then((json) => renderBooks(json));
}
document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
