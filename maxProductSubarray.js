// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.
// 
// The test cases are generated so that the answer will fit in a 32-bit integer.

maxProductSubArray([2, 3, -2, 4]);

const maxProductSubArray = nums => {
  let currentMax = nums[0];
  let currentMin = nums[0];
  let finalMax = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let temp = currentMax
    currentMax = Math.max(Math.max(currentMax * nums[i], currentMin * nums[i]), nums[i]);
    currentMin = Math.max(Math.max(temp * nums[i], currentMin * nums[i]), nums[i]);
    finalMax = Math.max(currentMax, finalMax);
  }
  return finalMax;
}

