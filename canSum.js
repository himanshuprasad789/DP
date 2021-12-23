const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers,memo) === true) {
      memo[targetSum] = true;
      // console.log(memo);
      return true
    };
  }
  memo[targetSum] = false;
  return false;
}

console.log(canSum(7,[3,2]))         //  true
console.log(canSum(7, [5, 3, 4, 7])) //  true
console.log(canSum(7, [2, 4]))       //  false
console.log(canSum(8, [2, 3, 5]))    //  true
console.log(canSum(500, [1, 14]))    // false

