// Задача 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
    
  fix() {
    this.state *= 1.5;
  }
    
  set state(number) {
    if (number < 0) {
      this._state = 0;      
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }; 
 }
    
  get state() {
    return this._state;
  }
};

let warAndPeace = new PrintEditionItem('Война и Мир', 2003, 734);

console.log(warAndPeace.name);
console.log(warAndPeace.releaseDate); 
console.log(warAndPeace.state); 
warAndPeace.fix();
console.log(warAndPeace.state); 

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
       super(author, name, releaseDate, pagesCount);
       this.type = 'novel'; 
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
       super(author, name, releaseDate, pagesCount);
       this.type = 'fantastic';    
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
       super(author, name, releaseDate, pagesCount);
       this.type = 'detective'; 
    }
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

// Задача 2:

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
    
  addBook(book) {
    if (book.state > 30) {
      return this.books.push(book);
    } else {
        
    };
  }

  findBookBy(type, value) {
    let search = this.books.find(book => book[type] === value);
      if (typeof search === 'object') {
          return search;
      } else {
           return null;
      };
    }

  giveBookByName(bookName) {
        let bookOnHands = this.books.find(book => book.name === bookName);
        if (typeof bookOnHands === 'object') {
            let index = this.books.indexOf(bookOnHands);
            this.books.splice(index, 1);
            return bookOnHands;
        } else {
            return null;
        };
    }
}

