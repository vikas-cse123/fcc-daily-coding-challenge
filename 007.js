// #264
const isAnagram = (str1, str2) => {
  str1 = str1.toLowerCase().trim();
  str2 = str2.toLowerCase().trim();
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};
const groupAnagrams = (words) => {
  if (words.length === 0) return [];
  const groups = [[words[0]]];
  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    let added = false;
    for (const group of groups) {
      const result = isAnagram(currentWord, group[0]);
      if (result) {
        group.push(currentWord);
        added = true;
        break;
      }
    }
    if (!added) {
      groups.push([currentWord]);
    }
  }
  return groups;
};

//Better Approach
const groupAnagrams2 = (words) => {
  const groupsByKey = {}
  for(const word of words){
    const key = word.split("").sort().join("")
    if(!groupsByKey[key]){
      groupsByKey[key] = []
    }
    groupsByKey[key].push(word)

  }
  return Object.values(groupsByKey)
}

