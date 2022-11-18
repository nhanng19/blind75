const container = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let result = 0;
  while (left < right) {
    let smallest = Math.min(nums[left], nums[right]);
    let area = smallest * (left - right);
    result = Math.max(result, area);

    if (nums[left] < nums[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};

