"use strict"

//оголошую клас
  class Storage {

//оголошую приватну властивість значення для зберігання масиву товарів 
    #items
// конструктор він приймає початкове значення масиву товарів
  constructor(items) {

// ініціалізую приватну властивість, значення якоі рередано  до конструктора
  this.#items = items;
    }
// метод повертає масив товара що зберігається в приватній властивості items
    getItems()
    { return this.#items; }

// метод додає новий товар до масиву товарів
  addItem(newItem) {
// використовую метод push для додавання нового товару в масив товарів
  this.#items.push(newItem);
    }
// метод приймає рядок старого масива за допомогою метода перебирає його і видаляє з масиву той єлемент який не відповідає умові
    removeItem(itemToRemove) {
      
// використовую метод filter для перебору і видалення товару з масиву товарів.При цьому метод filter створює новий масив.
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
  
};

// створюю єкземпляр класу, передаючи в конструктор початковий масив товарів
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

// перевіряю масив
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

//додаю новий товар "Droid" до масиву товарів, методом addItem звернувшись до екземпляра класу storage
  storage.addItem("Droid");
  console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

//видаляю товар "Prolonger" з масиву товарів, методом removeItem звернувшись до екземпляра класу storage
  storage.removeItem("Prolonger");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//спробую видалити товар "Scaner" з масиву товарів, методом removeItem звернувшись до екземпляра класу storage,але його там немає в масиві товарів
// //масив лишається незмінним
  storage.removeItem("Scaner");
  console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
