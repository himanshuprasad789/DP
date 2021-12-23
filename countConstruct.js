// write a func canCOnstruct(target,wordBank) that accepts a target string and an array of strings.
//the function should return the number of ways that the target can be constructed by concatening elements of the wordBank array.

const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstruct(target.slice(word.length), wordBank,memo);
      totalCount += numWaysForRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}


console.log(countConstruct('abcdef', ['abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  countConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf', [
    'a',
    'aa',
    'aaf',
    'f'
  ])
);