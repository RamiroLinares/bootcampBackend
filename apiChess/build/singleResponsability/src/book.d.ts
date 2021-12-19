export default class Book {
    private name;
    private authorName;
    private year;
    private price;
    private isbn;
    constructor(name: string, authorName: string, year: number, price: number, isbn: string);
    getName(): string;
    getPrice(): number;
}
