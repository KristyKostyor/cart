'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    this.calculateItemPrice();
    return (this.totalPrice =
        this.items.reduce((acc, item) => acc + item.price * item.quantity, 0));
  },
  calculateItemPrice() {
    this.totalPrice =
     this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
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
    this.calculateItemPrice();
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
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
cart.totalPrice = 10;
cart.print();

/*
const getTotalPrice = (cart) => {
    for(let i = 0; i < cart.items.length; i++) {
        cart.totalPrice += cart.items[i].price * cart.items[i].quanty;
    }
    return cart.totalPrice;
}


console.log(getTotalPrice(cart));*/
