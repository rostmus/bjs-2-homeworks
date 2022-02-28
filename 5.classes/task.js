class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5
    }

    set state(state) {
        if (state <= 0) {
            this._state = 0
        } else if (state > 100) {
            this._state = 100
        } else {
            this._state = state
        }
    }
    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount)
        this.author = author
        this.type = 'book'

    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author)
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author)
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author)
        this.type = 'detective'
    }
}


class Library {
    constructor(name) {
        this.name = name
        this.books = []
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        const result = this.books.find(bookFind => bookFind[type] == value)
        if (result === undefined) {
            return null
        } else {
            return result
        }
    }

    giveBookByName(bookName) {
        const result2 = this.books.findIndex(bookFind2 => bookFind2.name == bookName)
        if (result2 === -1) {
            return null
        } else {
            this.books.splice(result2, 1)
            return this.books[result2]
        }
    }

}

const library = new Library('бибилиотека 1')
const book1 = new Book('агония', 1920, 120, 'ленин')


class Student {
    constructor(name, gender, age) {
        this.name = name
        this.gender = gender
        this.age = age
        this.marks = {}
    }
    addMark(mark, namePredmet) {
        if (mark < 1 || mark > 5) {
            return 'ошибка, оценка должна быть числом от 1 до 5'
        } else if (this.marks[namePredmet] === undefined) {
         this.marks[namePredmet] = [mark]
     } else {
         this.marks[namePredmet].push(mark)
     }
    }

    addAverage(namePredmet) {
        let sum = 0
        for (let i = 0; i < this.marks[namePredmet].length; i++) {
            sum += this.marks[namePredmet][i]

        }
        return sum/this.marks[namePredmet].length
    }

    addAverageAll() {
        let sum = 0
        let lama = 0
        for (let key in this.marks) {
            let markOne = this.marks[key]
            for (let i = 0; i < markOne.length; i++) {
                sum += markOne[i]
                lama += 1
            }
        }
        return sum/lama
    }

}
const student1 = new Student('vasya', 'm', 18)

