const duplicates = array => {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
      return true;
    }
  }
  return false;
};

duplicates([1, 19, 4, 5, 16, 6, 9]);
