import Book from "./book";
import Iinvoice from './invoice.interface';

export default class Invoice implements Iinvoice {
  private total: number;
  constructor(
    private book: Book,
    protected quantity: number,
    private discountRate: number,
    private taxRate: number
  ) {}

  calculateTotal() {
    this.total=this.book.getPrice()*(this.discountRate/100)*(1+this.taxRate)
  }
  getQuantity(){
    return this.quantity;
  }
  getDiscountRate(){
    return this.discountRate;
  }
  getTaxRate() {
      return this.taxRate;
  }
  getTotal(){
    return this.total;
  }


}