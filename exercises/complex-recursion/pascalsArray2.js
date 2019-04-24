function pascalsArr2(rowIndex, arr = [1]) {
  if (arr.length - 1 === rowIndex) {
    return arr;
  }
  const prevLine = arr;
  const newLine = [1];
  for (let i = 1; i < prevLine.length; i++) {
    newLine.push(prevLine[i] + prevLine[i - 1]);
  }
  newLine.push(1);
  return pascalsArr2(rowIndex, newLine);
}

module.exports = pascalsArr2;
