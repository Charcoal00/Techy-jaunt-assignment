// Book Class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this._isbn = isbn;
    this.available = true;
  }

  get isbn() {
    return this._isbn;
  }

  set isbn(value) {
    console.log("ISBN cannot be changed directly.");
  }

  borrowBook() {
    if (this.available) {
      this.available = false;
      console.log(`You borrowed "${this.title}".`);
    } else {
      console.log(`"${this.title}" is not available.`);
    }
  }

  returnBook() {
    this.available = true;
    console.log(`You returned "${this.title}".`);
  }
}

// Library Class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Added "${book.title}" to the library.`);
  }

  removeBook(isbn) {
    this.books = this.books.filter(book => book.isbn !== isbn);
    console.log(`Removed book with ISBN: ${isbn} from the library.`);
  }

  findBookByTitle(title) {
    const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (book) {
      return `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Available: ${book.available}`;
    } else {
      return `No book titled "${title}" found.`;
    }
  }
}

// DigitalLibrary Class that Inherits from Library
class DigitalLibrary extends Library {
  downloadBook(isbn) {
    const book = this.books.find(book => book.isbn === isbn);
    if (book) {
      if (book.available) {
        console.log(`Downloading "${book.title}"...`);
      } else {
        console.log(`"${book.title}" is not available for download.`);
      }
    } else {
      console.log(`No book with ISBN: ${isbn} found.`);
    }
  }
}

// Testing the Code
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "0987654321");

const library = new Library();
library.addBook(book1);
library.addBook(book2);

console.log(library.findBookByTitle("1984"));

const digitalLibrary = new DigitalLibrary();
digitalLibrary.addBook(book1);
digitalLibrary.addBook(book2);

digitalLibrary.downloadBook("1234567890");

book1.borrowBook();
digitalLibrary.downloadBook("1234567890");

book1.returnBook();
digitalLibrary.downloadBook("1234567890");
