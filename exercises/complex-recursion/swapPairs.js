var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  } else {
    const temp = head.next;
    head.next = temp.next;
    temp.next = head;
    head.next = swapPairs(head.next);
    return temp;
  }
};

module.exports = swapPairs;
