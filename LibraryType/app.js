"use strict";
console.log('Hello world');
class LibraryBook {
    constructor(title, author, publishedYear, genre, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.genre = genre;
        this.isAvailable = isAvailable;
    }
    borrowBook() { this.isAvailable = false; }
    returnBook() { this.isAvailable = true; }
}
class LibraryUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
    }
    borrow(book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.borrowBook();
        }
        else {
            console.log(`����� "${book.title}" ��� � �������`);
        }
    }
    return(book) {
        let index = this.borrowedBooks.indexOf(book); //���� ����� � ������� ������ ����
        if (index !== -1) { //���� �����  �� ������� �� ������� �� ������ -1
            this.borrowedBooks.splice(index, 1); //������� 1������� � ��������� ��������
            book.returnBook(); //������ ����� ���������, ������������
        }
        else {
            console.log(`Book "${book.title}" is not found.`);
        }
    }
}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    //����� ��� ���������� ����� � ����������.
    addBook(book) {
        this.books.push(book);
    }
    //����� ��� ����������� ������ ������������ .
    registerUser(user) {
        this.users.push(user);
    }
    //����� ��� ������ ���� ���� �� ������.
    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
    //����� ��� ������ ���� ��������� ����.
    findAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }
}
//. ������������� ���� �������:
//� �������� ��������� ���� � �������� �� � ����������.
//� ��������������� ���������� �������������.
//� ��������� ������������� ����� ����� � ���������� ��.
//� �������� ���������� ������ ���� �� ������ � ������ ��������� ����.
const book1 = new LibraryBook('Deception Point', 'Dan Brown', 2003, 'detective');
const book2 = new LibraryBook('Triumph Arck', 'E.M.Remark', 1990, 'history fiction');
const book3 = new LibraryBook('Code da Vinchi', 'Dan Brown', 2002, 'detective');
const user1 = new LibraryUser(1, "Nataly");
const user2 = new LibraryUser(2, "Tanya");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.registerUser(user1);
library.registerUser(user2);
user1.borrow(book1); //user takes book
console.log(library.findAvailableBooks());
user1.return(book1); //user returns book
console.log(library.findAvailableBooks());
console.log(library.findBooksByAuthor('Dan Brown'));
//# sourceMappingURL=app.js.map