"use strict";
//створюю об'єкт customer
const customer = {

  //ініціалізація властивостей об'єкта customer
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],

  //метод,отримую баланс користувача
  getBalance() {

  //метод повертає значення властивості balance  
    return this.balance;
  },

//метод, отримую доступ до поточной знижки
  getDiscount() {

//метод повертає значення властивості discount і зберігає у властивості discount  
    return this.discount;
  },

  //метод ,тут змінюю знижку,згідно умов, під час виклику (value = 0.15)
  setDiscount(value) {

  //метод оновлює властивость discount на значення value 
    this.discount = value;
  },

  // метод, отримую 
  getOrders() {
  //метод повертає масив orders 
    return this.orders;
  },

//метод, додаю нове замовлення (cost це сума замовлення, order це значення замовлення)
  addOrder(cost, order) {

  /*вираховую баланс з урахованням знижки, і на цю суму зменшую баланс користувача
  сума замовлення за мінусом суми знижки */
    this.balance -= cost - cost * this.discount;

  // додаю нове значення замовлення до масиву [orders]
    this.orders.push(order);
  },
  
};
//зміна знижки користувача на 15%
  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.

//додаю нове замовлення "Steak" на суму 5000
  customer.addOrder(5000, "Steak");
  console.log(customer.getBalance()); // 19750 (24000 -(5000 - 5000 * 0.15))

//перевіряю оновленний список замовлень
  console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


