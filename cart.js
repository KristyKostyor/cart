'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  calculateItemPrice() {
    return this.items.reduce(
        (acc, item) => acc + item.price * item.quantity, 0);
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

  clear() {
    this.items = [];
    this.count = 0;
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
