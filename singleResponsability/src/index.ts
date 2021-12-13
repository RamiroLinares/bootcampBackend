import Book from "./book";
import Invoice from "./invoice";
import InvoicePrint from './invoicePrinter';
import InvoicePersistance from './invoicePersistance';

const book = new Book("Clean Code", "Bob", 1995, 49, "SD-456-ASD");
const invoice = new Invoice(book, 1, 50, 0.14);
invoice.calculateTotal();

const printer= new InvoicePrint(invoice,book);
printer.printInvoice()
const persistence = new InvoicePersistance(invoice, book);
persistence.saveToFile('text'); 