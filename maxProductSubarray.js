const maxProduct = nums => {
  let currentMax = nums[0];
  let currentMin = nums[0];
  let finalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = currentMax;
    currentMax = Math.max(Math.max(currentMax * nums[i], currentMin * nums[i]), nums[i]);
    currentMin = Math.max(Math.max(temp * nums[i], currentMin * nums[i]), nums[i])
    finalMax = Math.max(Math.max(currentMax, finalMax));
  }
  console.log(finalMax)
}

productMax([2, 3, -2, 4]);


