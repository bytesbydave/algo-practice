function generate(rows) {
  return pascalsRecursive(rows)
}

function pascalsRecursive(rows, arr = [[1]]) {
  if (rows<2) {
    return arr
  }
  const prevLine = arr[arr.length-1]
  const newLine = [1]
  for (let i = 1; i < prevLine.length; i++) {
    newLine.push(prevLine[i] + prevLine[i-1])
  }
  newLine.push(1)
  arr.push(newLine)
  return pascalsRecursive(rows - 1, arr)
}

module.exports = generate
