// Принципи ООП:
// інкапсуляція - приховання логіки (особливостей реалізації)
// спадкування  - перевикористання структури та логіки (альт. назва - спеціалізація, is a)
// поліморфізм  - можливість через однаковий інтерфейс працювати з різними типами (в js поліморфізм підтипів)

class User {
  constructor(name, surname, age, isMale, email) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isBanned = false;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User("Test", "Testovych", 25, false, "test@test.com");

//спадкоємець
class Moderator extends User {
  constructor(name, surname, age, isMale, email, permission) {
    super(name, surname, age, isMale, email); //виклик конструктора базового класу
    this.permission = permission;
  }

  sendMassages(user, message) {
    return `Moderator ${this.getFullName()} send message "${message}" to user ${user.getFullName()}`;
  }
}

const moderator1 = new Moderator(
  "Mod",
  "Madovych",
  25,
  false,
  "test@test.com",
  { canRead: true, canWrite: true }
);

console.log(moderator1.getFullName());

document.write(moderator1.sendMassages(user1, "Your messege is beautiful"));

// Task: Реалізувати клас Admin, який є модератором, і на додачу має
// властивість category (1,2)
// реалізує логіку (забанити або зняти бан з конкретного користувача):
// - bann
// - unbann

// Створити об'єкт класу Admin, протустувати роботу методі bann, unbann
class Admin extends Moderator {
  constructor(name, surname, age, isMale, email, permission, category) {
    super(name, surname, age, isMale, email, permission);
    this._category = category;
  }

  ban(user) {
    user.isBanned = true;
  }

  unban(user) {
    user.isBanned = false;
  }
}

const admin1 = new Admin(
  "admin",
  "adminovych",
  25,
  false,
  "test@test.com",
  { canRead: true, canWrite: true },
  1
);

admin1.ban(user1);
console.log(user1);
admin1.unban(user1);
console.log(user1);

console.log(admin1.getFullName);
document.write(`<p>${admin1.sendMassages(user1, "dlfkdfl")}</p>`);
