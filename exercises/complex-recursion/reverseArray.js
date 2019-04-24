// // ReverseString Array
// var reverseString = function(str) {
//   if(str.length === 1) {
//     return str
//   } else {
//     return [].concat(reverseString(str.slice(1)), str[0])
//   }
// };

// module.exports = reverseString

// ReverseString Array Divide and Conquor
var reverseString = function(str) {
  function helper(start, end, arr) {
    if(start >= end) {
      return
    } else {
      const temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      helper(start + 1, end -1, arr)
    }
    return arr
  }
  return helper(0, str.length -1, str)
}

module.exports = reverseString