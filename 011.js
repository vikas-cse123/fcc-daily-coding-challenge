// question : #1
const isBalanced = (str) => {
  const countVowel = (text) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (const char of text) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  };
  const firstHalfStr = str.slice(0, str.length / 2);
  const secondHalfStr = str.slice(Math.ceil(str.length / 2));
  return countVowel(firstHalfStr) === countVowel(secondHalfStr);
};
