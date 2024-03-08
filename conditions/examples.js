//умови
let age = 18;
if (age >= 18) {
console.log("Ви повнолітні.");
}


let score = 75;
if (score >= 60) {
console.log("Ви склали іспит.");
} else {
console.log("Ви не склали іспит.");
}

//тернарний оператор
let isLogged = true;
let message = isLogged ? "Ви увійшли в систему" : "Будь ласка, увійдіть";
console.log(message);

//switch case structure
let day = 3;
let dayName;
switch (day) {
case 1:
dayName = "Понеділок";
break;
case 2:
dayName = "Вівторок";
break;
case 3:
dayName = "Середа";
break;
case 4:
dayName = "Четвер";
break;
case 5:
dayName = "П'ятниця";
break;
default:
dayName = "Вихідний";
}
console.log(`Сьогодні ${dayName}.`);


for (var i = 0; i < 5; i++) {
    console.log(i); // Виведе числа від 0 до 4
    }


    var count = 0;
while (count < 3) {
console.log(count); // Виведе числа 0, 1, 2
count++;
}


var num = 5;
do {
console.log(num); // Виведе число 5
} while (num < 5);

for (var i = 0; i < 5; i++) {
    if (i === 2) {
    continue; // Пропустити значення 2
    }
    console.log(i); // Виведе числа 0, 1, 3, 4
    }

    for (var i = 0; i < 5; i++) {
        if (i === 3) {
        break; // Завершити цикл при значенні 3
        }
        console.log(i); // Виведе числа 0, 1, 2
        }

        try {
            // Код, який може викликати помилку
            } catch (error) {
            // Обробка помилки
            } finally {
            }