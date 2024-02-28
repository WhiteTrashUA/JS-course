// const user = {
//   name: name,
//   spec: "kotleta",
//   serValue: 6,
//   loseLess: 12,
//   logInfo: function () {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`spec is : ${this.spec}`);
//     console.log(`serValue is : ${this.serValue}`);
//     console.log(`loseLess is : ${this.loseLess}`);
//     console.groupEnd();
//   },
// };
// const Ivan = {
//   name: "Ivan",
//   spec: "Kiber",
//   serValue: 6,
//   loseLess: 12,
// };

// const Ann = {
//   name: "Ann",
//   spec: "gamer",
//   serValue: 12,
//   loseLess: 2,
// };

// const Nata = {
//   name: "Nata",
//   spec: "hostes",
//   serValue: 10,
//   loseLess: 22,
// };

// user.logInfo.apply(Ivan);
// user.logInfo.call(Ann);
// const natainfo = user.logInfo.bind(Nata);
// natainfo();
//////////////////////2///////////////
// const cart = {
//   showItems() {
//     console.log("Визначення: ", this.items);
//   },
// };
// const html = {
//   items: [
//     `HTML - це стандартна мова розмітки для вебсторінок,
//     а допомогою HTML ви можете створити свій власний вебсайт,
//     Мова HTML легка для вивчення - ви будете насолоджуватись навчанням та власними результатами`,
//   ],
// };

// const css = {
//   items: [
//     `CSS (англ. Cascading Style Sheets, укр. Каскадні таблиці стилів) — це спеціальна мова стилю сторінок[en], що використовується для опису їхнього зовнішнього вигляду. Самі ж сторінки написані мовами розмітки даних.`,
//   ],
// };
// document
//   .querySelector(".btn1")
//   .addEventListener("click", cart.showItems.bind(html));
// document
//   .querySelector(".btn2")
//   .addEventListener("click", cart.showItems.bind(css));
////////////////////3////////////////

const shop = {
  name: name,
  price: 11,
  value: 6,
  showInfo: function () {
    console.log(
      "продукт: " + this.name + " вартість: " + this.price * this.value + "грн",
    );
  },
  // logInfo: function () {
  //   console.group(`${name} info:`);
  //   console.log(`Товар : ${this.name}`);
  //   console.log(`Вартість за кг : ${this.spec}`);
  //   console.log(`Кількість в кг : ${this.serValue}`);
  //   console.groupEnd();
  // },
};
const banana = {
  name: "banan",
  price: 30,
  value: 4.5,
};

const cherry = {
  name: "chery",
  price: 58,
  value: 1.3,
};

const jrange = {
  name: "orange",
  price: 89,
  value: 3.4,
};
shop.showInfo.bind(banana)();
shop.showInfo.bind(cherry)();
shop.showInfo.bind(jrange)();
