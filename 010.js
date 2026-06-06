//question : #283

const zipStrings = (a, b) => {
  let result = "";
  for (let i = 0; i < a.length || i < b.length; i++) {
    if (a[i]) {
      result = `${result}${a[i]}`;
    }
    if (b[i]) {
      result = `${result}${b[i]}`;
    }
  }
  return result;
};

// Better Approach
const zipStrings2 = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  let result = ""
  for (let i = 0; i < maxLength; i++) {
    if(i < a.length){
      result += a[i]

    }
    if(i < b.length){
      result += b[i]

    }
    return result
  }
};
