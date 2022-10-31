





class Node {
    constructor(data) {
      this.data = data;
      this.next;
    }
  }
  
  /**
   * Class to represent a queue using an array to store the queued items.
   * Follows a FIFO (First In First Out) order where new items are added to the
   * back and items are removed from the front.
   */
  class Queue {
    constructor() {
      this.head;
      this.tail;
      this.length = 0;
    }
  
  
    isEmpty() {
      if (this.head == null) {
        return true;
      }
      return false;
    }
  
  
    enqueue(item) {
      if (this.isEmpty()) {
        this.head = item;
        this.tail = item;
        this.length++;
        return this.length;
      }
      this.tail.next = item;
      this.tail = item;
      this.length++;
      return this.length;
    }
  
  
    dequeue() {
      if (this.isEmpty()) {
        return undefined;
      }
      var popNode = this.head;
      this.head = this.head.next;
      popNode.next = null;
      this.length--;
      return popNode;
    }
  
  
    front() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.head.data;
    }
  
  
    /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
    compareQueues(q2) {
        if (this.size() != q2.size()) {
            return false;
        }

        let temp = new Queue();
        let isEqual = true;

        while(this.head && q2.head) {
            if(this.head.data !== q2.head.data) {
                isEqual = false;
                break;
            }
            temp.enqueue(this.dequeue());
            temp.enqueue(q2.dequeue);
        }
        while(temp.head) {
            q2.enqueue(temp.dequeue());
            this.enqueue(temp.dequeue());
        }
        return isEqual;
     }
  
    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome(size = this.length) {

        let tempQ = new Queue();
        let tempStack = new Stack();
        let isPal = true;

        while(this.head) {
            let node = this.dequeue();
            tempQ.enqueue(node);
            tempStack.push(node.data);
        }

        while (tempQ.head) {
            let node = tempQ.dequeue();
            if (node.data !== tempStack.pop()) isPal = false;
            this.enqueue(node);
        }
        return isPal;
     }
  
    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
      return this.length;
    }
  }
  
  const newQueue1 = new Queue();
  const newQueue2 = new Queue();
  const newQueue3 = new Queue();
  const newNode1 = new Node(1);
  const newNode2 = new Node(2);
  const newNode3 = new Node(3);
  const newNode4 = new Node(4);
  // Queue 1 = [head -> 1,2,3,4 <-tail]
  newQueue1.enqueue(newNode1)
  newQueue1.enqueue(newNode2)
  newQueue1.enqueue(newNode3)
  newQueue1.enqueue(newNode4)
  // Queue 2 = [head -> 1,2,3,4 <-tail]
  newQueue2.enqueue(newNode1)
  newQueue2.enqueue(newNode2)
  newQueue2.enqueue(newNode3)
  newQueue2.enqueue(newNode4)
  // Queue 3 = [head -> 1,2,3,3,2,1 <-tail]
  newQueue3.enqueue(newNode1)
  newQueue3.enqueue(newNode2)
  newQueue3.enqueue(newNode3)
  newQueue3.enqueue(newNode3)
  newQueue3.enqueue(newNode2)
  newQueue3.enqueue(newNode1)
  
  // compareQueues()
  console.log(newQueue1.compareQueues(newQueue2)); // should return true
  console.log(newQueue1.compareQueues(newQueue3)); // should return false
  
  // isPalindrome()
  console.log(newQueue1.isPalindrome()); // should return false
  console.log(newQueue3.isPalindrome()); // should return true
  
  