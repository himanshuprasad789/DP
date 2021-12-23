/*
write a function 'canConstruct(target,wordBank)' that accepts a target string and an array of string
The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements 
of the 'wordBank' array
you may use the elements of wordBank as mamy times as needed
*/

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank,memo) === true) {
        memo[target] = true;
        // console.log(memo)
        return memo[target];
      }
    }
  }
  memo[target] = false;
  // console.log(memo)
  return false;
}

console.log(canConstruct('abcdef', ['abc', 'cd', 'def', 'abcd']))
console.log(canConstruct('purple',['purp','p','ur','le','purpl']))
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(canConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf', [
  'a', 'aa', 'aaa','aaaaa','aaaaaa'
]))

