import Iinvoice from "./invoice.interface";
import Book from './book';
export default class InvoicePrint {
    constructor(private invoice: Iinvoice, private book: Book ){
      this.invoice=invoice;
      this.book=book;
    }
    printInvoice() {
      console.log("Printing Invoice")
      console.log(`${this.book.getName()} Invoice quantity: ${this.invoice.getQuantity()}`);
      console.log(`Discount Rate: ${this.invoice.getDiscountRate()}`);
      console.log(`Tax Rate: ${this.invoice.getTaxRate()}`);
      console.log(`TOTAL: ${this.invoice.getTotal()}`); 
  }
}