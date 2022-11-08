// Given an integer array nums, find the 
// subarray
//  which has the largest sum and return its sum.

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);


const maxSubArray = nums => {
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