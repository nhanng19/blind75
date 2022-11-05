// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

duplicates([1, 19, 4, 5, 16, 6, 9]);

const duplicates = array => {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
      return true;
    }
  }
  return false;
}