var containsDuplicates = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            return true;
        }
    }
    return false;
}
    
containsDuplicates([1,19,4,5,16,6,9])
