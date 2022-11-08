// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

product([1, 2, 3, 4]);

const product = nums => {
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
}