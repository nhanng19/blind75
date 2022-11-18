// Given an integer array nums, find the 
// subarray
//  which has the largest sum and return its sum.

maxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

const maxSub = nums => {
  let currentSum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += nums[i];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

const subMax = nums => {
  let sum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i){
    if (sum < 0) {
      sum = 0
    }
    sum += nums[i];
    maxSum = Math.max(maxSum, sum) 
  }
  return maxSum
}