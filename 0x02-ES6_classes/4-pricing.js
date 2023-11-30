/* eslint-disable-next-line no-unused-vars */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(a) {
    this._amount = a;
  }

  get currency() {
    return this._currency;
  }

  set currency(c) {
    this._currency = c;
  }

  displayFullPrice() {
    const amt = this.amount;
    const cur = this.currency._code;
    const name = this.currency._name;
    return `${amt} ${name} ${cur}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
