const product = nums => {
  let results = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    results[i] = left;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    results[i] = right * results[i];
    right *= nums[i];
  }

  console.log(results);
}

product([1, 2, 3, 4]);