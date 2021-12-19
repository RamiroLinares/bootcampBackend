"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(name, authorName, year, price, isbn) {
        this.name = name;
        this.authorName = authorName;
        this.year = year;
        this.price = price;
        this.isbn = isbn;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
exports.default = Book;
//# sourceMappingURL=book.js.map