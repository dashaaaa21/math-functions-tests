const { add, subtract } = require('./math');

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        console.error(` ${message} | Очікувалось: ${expected}, Отримано: ${actual}`);
        process.exit(1);
    } else {
        console.log(` ${message}`);
    }
}

assertEqual(add(2, 3), 6, 'Сума 2 + 3 = 6');
assertEqual(subtract(10, 4), 6, 'Різниця 10 - 4 = 6');

console.log(" Усі тести пройдено успішно!");