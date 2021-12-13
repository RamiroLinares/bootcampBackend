import Iinvoice from "./invoice.interface";
import Book from './book';
export default class InvoicePersistance {
  constructor(private invoice: Iinvoice, private book: Book) {
    this.invoice = invoice;
    this.book = book;
  }
  saveToFile(fileName) {
    
    let str=`${this.book.getName()} Invoice quantity: ${this.invoice.getQuantity()}`
    +`\n Discount Rate: ${this.invoice.getDiscountRate()}`
    +`\n Tax Rate: ${this.invoice.getTaxRate()}`
    +`\n TOTAL: ${this.invoice.getTotal()}`;

    const fs = require('fs');
    fs.writeFile(`${fileName}.txt`, str, function (err) {
      if (err) throw err;
    });
  }
}