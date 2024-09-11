console.log('Hello world');
interface IBook {
	title: string,
	author: string,
	publishedYear: number,
	genre: string,
	isAvailable: boolean
}

class LibraryBook implements IBook {
	constructor(
		public title: string,
		public author: string,
		public publishedYear: number,
		public genre: string,
		public isAvailable: boolean = true
	) { }
	borrowBook(): void { this.isAvailable = false; }
	returnBook(): void { this.isAvailable = true; }
}

interface User {
	id: number;
	name: string;
	borrowedBooks: IBook[];
}
class LibraryUser implements User {
	public borrowedBooks: IBook[] = [];
	constructor(
		public id: number,
		public name: string,
		
	) { }

	borrow(book: LibraryBook): void {
		if (book.isAvailable) {
			this.borrowedBooks.push(book);
			book.borrowBook();
		}
		else { console.log(`книги "${book.title}" нет в наличии`) }
	}
	return(book: LibraryBook): void {
		let index = this.borrowedBooks.indexOf(book);//ищем книги в массиве взятых книг
		if (index !== -1) {//если книга  не найдена по индексу то вернет -1
			this.borrowedBooks.splice(index, 1);//удаляем 1элемент с указанным индексом
			book.returnBook();//делаем книгу доступной, возвращенной
		} else {
			console.log(`Book "${book.title}" is not found.`);
		}
	}
}



 class Library {
	 public books: LibraryBook[] = [];
	 public users: LibraryUser[] = [];
	  //метод для добавления книги в библиотеку.
	 addBook(book: LibraryBook): void {
		 this.books.push(book);
	 }
	//метод для регистрации нового пользователя .
	 registerUser(user: LibraryUser): void {
		 this.users.push(user);
	 }

	 //метод для поиска всех книг по автору.
	 findBooksByAuthor(author: string): LibraryBook[] {
		 return this.books.filter(book=>book.author===author);
}
  //метод для поиска всех доступных книг.

	 findAvailableBooks(): LibraryBook[] {
		 return this.books.filter(book=>book.isAvailable);
	 }
}
//. Протестируйте вашу систему:
//• Создайте несколько книг и добавьте их в библиотеку.
//• Зарегистрируйте нескольких пользователей.
//• Позвольте пользователям брать книги и возвращать их.
//• Выведите результаты поиска книг по автору и список доступных книг.

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

user1.borrow(book1);//user takes book
console.log(library.findAvailableBooks());
user1.return(book1);//user returns book
console.log(library.findAvailableBooks());
console.log(library.findBooksByAuthor('Dan Brown'));
