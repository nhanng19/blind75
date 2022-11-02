minimum([10, 8, 13, 12, 5, 9])

const minimum = nums => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[right] >= nums[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    } 
    return nums[left];
}