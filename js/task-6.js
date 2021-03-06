/* Суммирование значений свойства из массива объектов
 * Напиши функцию calculateTotalPrice(allProdcuts,
 * productName), которая получает массив объектов и имя
 * продукта (значение свойства name). Возвращает общую
 * стоимость продукта (цена умноженная на количество).
 */

function calculateTotalPrice(array, prop) {
  // 1. Задать переменную аккумулятор
  let totalPrice = 0;
  // 2. Перебрать массив
  for (const object of array) {
    // console.log(object);
    // 3.Если имя обьекта в массиве совпадает с именем аргумента то делаем вычесление (цена умноженая на количество)
    if (object.name === prop) {
      totalPrice += object.price * object.quantity;
    }
    // 4.Ретурним тотал прайс
  }
  return totalPrice;
}

// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
