// question : #3
const fibonacciSequence = (arr, length) => {
  if (length === 0) return [];
  const series = arr.slice(0,length);
  for (let i = series.length; i < length; i++) {
  
    series.push(series[i - 2] + series[i - 1]);
  }
  return series;
};

// Second Approach
// Using while looop : Keep adding numbers until the array reaches the required length

const fibonacciSequence2 = (start, length) => {
  if (length === 0) return [];
  let series = start.slice(0, length);
  while (series.length < length) {
    const last = series[series.length-1]
    const secondLast = series[series.length-2]
    series.push(last+secondLast);
  }
  return series
};