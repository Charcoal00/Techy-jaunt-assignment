// Class Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this._isbn = isbn; //private isbin
        this.available = true;
    }

    // Getter for ISBN
    get isbn() {
        return this._isbn;
    }

    // Method to borrow the book
    borrowBook() {
        if (this.available) {
            this.available = false;
            console.log(`You have borrowed "${this.title}".`);
        } else {
            console.log(`"${this.title}" is not available for borrowing.`);
        }
    }

    // Method to return the book
    returnBook() {
        this.available = true;
        console.log(`You have returned "${this.title}".`);
    }
}

// Class Library
class Library {
    constructor() {
        this.books = [];
    }

    // Method to add a new book
    addBook(book) {
        this.books.push(book);
        console.log(`"${book.title}" has been added to the library.`);
    }

    // Method to remove a book by its ISBN
    removeBook(isbn) {
        const index = this.books.findIndex(book => book.isbn === isbn);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1);
            console.log(`"${removedBook[0].title}" has been removed from the library.`);
        } else {
            console.log(`No book found with ISBN: ${isbn}`);
        }
    }

    // Method to find a book by its title
    findBookByTitle(title) {
        const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
        if (book) {
            return book;
        } else {
            console.log(`No book found with title: "${title}"`);
            return null;
        }
    }
}

// Class DigitalLibrary inheriting from Library
class DigitalLibrary extends Library {
    // download book of available 
    downloadBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            if (book.available) {
                console.log(`You have downloaded "${book.title}".`);
            } else {
                console.log(`"${book.title}" is not available for download.`);
            }
        } else {
            console.log(`No book found with ISBN: ${isbn}`);
        }
    }
}

// Books
const library = new DigitalLibrary();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new Book("1984", "George Orwell", "9780451524935");

library.addBook(book1);
library.addBook(book2);

library.findBookByTitle("1984").borrowBook(); // Borrowing the book
library.downloadBook("9780451524935"); // Downloading the book

book1.returnBook(); // Returning the book
library.removeBook("9780743273565"); // Removing the book by ISBN
