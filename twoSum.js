var twoSum = function(nums, target){
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                results.push(i);
                results.push(j);
            }
        }
    }
    return results
}

twoSum([2, 7, 11, 15], 9);
