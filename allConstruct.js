//write a function allConstruct(target,wordBank) that accepts a target string and an array of strings.
//the function return a 2D array containing all of the ways that the target string
//can be constructed by concatenating elements of wordBank array with// each element of 2D array shoulf represent one combination that constructs the target
// reuse of words of wordBank is allowed

const allConstruct = (target, wordBank, memo = {}) => {
  //if it exists in memo return the array
  if (target in memo) return memo[target];

  if (target === '') return [[]];
  const result = [];
  //it will store all the combinations of the right suffixs and will be returned
  for (let word of wordBank) { // looping thru the wordBank
    //only if element of array has same prefix
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map(way => [word, ...way]);
      // console.log(targetWays);
      memo[target] = targetWays;
      result.push(...targetWays);
    }
  }
  return result;
};
console.log(allConstruct('abcdef', ['abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(
  allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf', [
    'a',
    'aa',
    'aaf',
    'f'
  ])
);
