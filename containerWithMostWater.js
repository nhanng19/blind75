const waterContainer = nums => {
    let result = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let smallest = Math.min(height[left], height[right]);
        let area = smallest * (left - right);
        result = Math.max(result, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
}