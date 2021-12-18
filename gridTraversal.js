//given grid os size m*n
//find the number of ways to move from top left to bottom right
// knowing that you can move either right or down


//finding base cases
// if the size of the grid is 1,1 i.e there is one cell
// we do nothing in that as starting and ending point are same
// size of grid is 0,n or m,0 => 0  beacuse grid dont have any cells
// create the tree on the paper to realise things better

// const grid = (m, n) => {
//   if (n == 1 && m == 1) return 1;
//   if (n == 0 || m == 0) return 0;
//   return grid(m-1, n)+grid(m,n-1)
// }
// console.log(grid(18,18));

//using memoization function
const grid = (m, n, memo = {}) => {
  const key = m + ',' + n;
  if(key in memo) return memo[key];
  if (n == 1 && m == 1) return 1;
  if (n == 0 || m == 0) return 0;
  memo[key] = grid(m - 1, n, memo) + grid(m, n - 1, memo); // key is m,n and value for that is no of possible paths
  return memo[key];
}
console.log(grid(10, 10));


