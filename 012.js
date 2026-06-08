// question: #2

const isValidNumber = (str, base) => {
  str = str.toLowerCase();
  if (base < 2 || base > 36) return "Invalid base.";
  const getBaseValues = (base) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let values;
    if (base >= 2) {
      values = Array.from({ length: Math.min(base, 10) }, (_, i) => i).join("");
    }
    if (base > 10 && base <= 36) {
      values += alphabet.slice(0, base - 10);
    }
    return values;
  };
  const values = getBaseValues(base);
  for (const char of str) {
    if (!values.includes(char)) return false;
  }
  return true;
};

//Second Approach :
// what was problem in first approach?
// instead of building allowed values every time,
//  you can directly slice from one full string:

const isValidNumber2 = (str, base) => {
  const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
  for (const char of str.toLowerCase()) {
    const value = digits.indexOf(char);
    if (value === -1 || value >= base) return false;
  }
  return true;
};
