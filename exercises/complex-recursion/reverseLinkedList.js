function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head
  }
  const temp = reverseLinkedList(head.next)
  head.next.next = head
  head.next = null
  return temp
}

// function reverseLinkedList(head) {
//   let previous = null;
//   let current = head;
//   while(current !== null) {
//     const temp = current.next
//     current.next = previous
//     previous = current
//     current = temp
//   }
//   return previous
// }

module.exports = reverseLinkedList