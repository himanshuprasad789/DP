const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers,memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }
  
  memo[targetSum] = shortestCombination;
  return memo[targetSum];
}

// m = targetSum
// n = numbers length

// Brute force multiplication

// time O(n^m * m)
// space O(m^2)

// memoized
// time O(m*n*m)
// space O(m^2)


console.log(bestSum(8,[2,3,5]))
console.log(bestSum(8,[1,4,5]))
console.log(bestSum(100, [1, 2, 5, 25, 10]))