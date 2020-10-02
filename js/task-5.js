function checkForSpam(str) {
  if (str.toLowerCase().includes('sale')) {
    str = true;
  } else if (str.toLowerCase().includes('spam')) {
    str = true;
  } else {
    str = false;
  }
  return str;
}
// Написать нормализацию текста в нижний регистр
// написать цикл который будет реагировать на спам или сейл

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
