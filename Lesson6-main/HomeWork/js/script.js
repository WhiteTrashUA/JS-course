class Abonent {
  static type = "Abonent";
  constructor(options) {
    this.name = options.name;
    // this.phone = options.phone;
  }

  firstName = "";
  numPhone = "";

  set name(newName) {
    const nameRow = newName.split(" ");
    this.firstName = nameRow[0];
    this.numPhone = nameRow[1];
  }

  get name() {
    return ` Name : ${this.firstName} number : ${this.numPhone}`;
  }
}

const Kris = new Abonent({
  name: "Kristina 123312",
});
const Ann = new Abonent({
  name: "Ann 4444444",
});
const Terry = new Abonent({
  name: "Terry 111111111",
});

console.log(Kris, Ann, Terry);
