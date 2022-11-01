product([1, 2, 3, 4]);

const product = (nums) => {
  let results = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    results[i] = left;
    left = left * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    results[i] = right * results[i];
    right = right * nums[i];
  }

  return results;
};
