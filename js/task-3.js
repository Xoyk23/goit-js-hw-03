function findLongestWord(string = '') {
  const worlds = string.split(' ');
  let longestWorld = '';
  for (const world of worlds) {
    if (world.length > longestWorld.length) longestWorld = world;
  }
  return longestWorld;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
