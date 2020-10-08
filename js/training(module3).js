// Деструкторизация

// 1.Копирование массива с помощью spread(расспыления)
const testArray = [25, 2563262, 23, 12, 14, 15, 15, 16, 20];
const testArray2 = [...testArray];

// Если изменим массив 1 то второй не поменяется т.к. это отдельный массив в другой ячейке памяти
testArray[1] = 52;

console.log(testArray);
console.log(testArray2);
// 2. Копирование обьекта с помощью spread(расспыления)
const testObject = {
  name: 'Rahlo',
  age: 25,
  sex: true,
};

const testObject2 = { ...testObject };
console.log(testObject);
console.log(testObject2);

testObject2.name = 'Anchor';
testObject2.age = 29;
testObject2.sex = false;
console.log(testObject);
console.log(testObject2);

// Функция которая принимает параметры не как массив

// 1. К примеру нам надо найти минимальное или максимальное число это можно сделать с помощью метода Math.
// Метод Math. не работает с массивами следовательно нам нужно разбить массив спредом на числа

const numbers = [23, 233, 12, 13, 99, -1, 0, 55, 66];
// 2. Расспыляем Массив и используем на него метод Матс мин
const Min = Math.min(...numbers);

console.log('This is Min Number: ', Min);

const Max = Math.max(...numbers);

// 3. Расспыляем Массив и используем на него метод Матс макс
console.log('This is Max Number: ', Max);
