class Book {
    constructor(title, isbn, author) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById("book-list");
        //Create tr elemnt
        const row = document.createElement("tr");
        // Insert data
        row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">x</a></td>
  `;

        list.appendChild(row);
    }

    showAlert(msg, type) {
        // Create div
        const div = document.createElement("div");
        // add classes
        div.className = `alert ${type}`;
        // add text
        div.appendChild(document.createTextNode(msg));
        // get parent
        const container = document.querySelector(".container");
        // Insert alert
        container.insertBefore(div, form);

        // Timeout after 2 sec
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 2000);
    }
    deleteBook(target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }
    clearFields() {
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}

document.getElementById("book-form").addEventListener("submit", function(e) {
    // Get form value
    const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn").value;

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("Please fill all fields", "error");
    } else {
        // Add Book to list
        ui.addBookToList(book);

        //Show Success
        ui.showAlert("Book Added", "success");

        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

document.getElementById("book-list").addEventListener("click", function(e) {
    // Instantiate
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);
    // Show succ delete
    ui.showAlert("Book Removed", "success");
    e.preventDefault();
});