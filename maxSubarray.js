const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += nums[i];
    maxSum = Math.max(currentSum, maxSum);
  }
  console.log(maxSum);
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
