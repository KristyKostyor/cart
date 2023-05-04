'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  calculateItemPrice() {
    const discountedPrice =
      this.items.reduce((acc, item) => acc + item.price * item.quantity, 0) *
      (1 - this.discount / 100);
    return `${discountedPrice.toFixed(2)} руб.`;
  },

  increaseCount(num) {
    this.count += num;
  },

  add(name, price, quantity = 1) {
    const item = {
      name,
      price,
      quantity,
    };
    this.items.push(item);
    this.increaseCount(quantity);
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount += 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount += 21;
    } else {
      console.log('Invalid promocode');
    }
  },

  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Total Price: ${this.totalPrice}`);
  },
};

cart.add('Item 1', 10, 2);
cart.add('Item 2', 15);
cart.add('Item 3', 20, 3);
cart.print();

cart.setDiscount = 'METHED';
console.log(cart.discount); // 15
console.log(cart.totalPrice); // 57.80 руб.

cart.setDiscount = 'NEWYEAR';
console.log(cart.discount); // 36
console.log(cart.totalPrice); // 50.40 руб.
