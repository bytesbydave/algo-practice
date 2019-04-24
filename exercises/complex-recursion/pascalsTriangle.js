function pascalsTriangle(row, col) {
  if (row === col || col === 1) {
    return 1;
  } else {
    return pascalsTriangle(row - 1, col - 1) + pascalsTriangle(row - 1, col);
  }
}

module.exports = pascalsTriangle;