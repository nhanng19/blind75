const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {
    let sLetter = s[i];
    let tLetter = t[i];

    sMap[sLetter] = (sMap[sLetter] || 0) + 1;
    tMap[tLetter] = (tMap[tLetter] || 0) + 1;
  }

  for (let key in sMap) {
    if (sMap[key] !== tMap[key]) {
      return false;
    }
  }
  return true;
};

