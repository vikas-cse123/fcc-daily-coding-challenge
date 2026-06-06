const getBingoRange = (letter) => {
  const ranges = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75],
  };
  letter = letter.toUpperCase();
  const range = ranges[letter];
  if (!range) return "Invalid letter";
  const result = [];
  const [start, end] = range;
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

//Second Approach
//question : #281

const getBingoRange2 = (letter) => {
  const ranges = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75],
  };
  letter = letter.toUpperCase();
  const range = ranges[letter];
  if (!range) return "Invalid letter";
  const [start, end] = range;
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
};
