const howSum = (targetSum, numbers,memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers,memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }   
  }
  memo[targetSum]=null
  return null; 
}
// brute force
//m=targetSum
//n=array.length
// o(m^n*n)
console.log(howSum(7,[3,2]))  
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(7, [2, 4]))
console.log(howSum(8, [2, 3, 5]))   
console.log(howSum(600, [7, 14]))
