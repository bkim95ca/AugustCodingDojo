class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
  
    constructor() {
      this.head = null;
    }
  
    isEmpty() {
      if (this.head) {
        return false;
      } else {
        return true;
      }
    }

    removeHead() {
        if (this.isEmpty()) {
          return false
        }
        else {
          const newHead = this.head.next;
          this.head.next = null;
          this.head = newHead;
        }
      }
    
  /**
   * Retrieves the data of the second to last node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
   secondToLast() { 
    let dataToReturn;
    if(this.isEmpty()){
        return null;
    }
    else if(this.head.next===null){
        return null;
    }
    else{
        let runner= this.head;
        while(runner.next.next !=null){
            runner=runner.next;
            dataToReturn=runner.data;
        }
        return dataToReturn;
    }
}
  
  /**
   * Removes the node that has the matching given val as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {
    if(this.head == null) {
        return null;
    }
    if(this.head.data == val) {
        this.removeHead();
    }

    let runner = this.head;
    while (runner.next != null) {
        runner = runner.next;
        if (runner.next.data == val) {
            var temp = runner.next.next;
            runner.next.next = null;
            runner.next = temp;
            return true;
        } 
    }
  }
  
  // EXTRA
  /**
   * Inserts a new node before a node that has the given value as its data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} newVal The value to use for the new node that is being added.
   * @param {any} targetVal The value to use to find the node that the newVal
   *    should be inserted in front of.
   * @returns {boolean} To indicate whether the node was pre-pended or not.
   */
  prepend(newVal, targetVal) {}
  
  
    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(arrayOfValues, runner = this.head) {
      if (runner) {
        while (runner.next) {
          runner = runner.next
        }
      } else {
        this.head = new ListNode(arrayOfValues[0])
        runner = this.head
        arrayOfValues = arrayOfValues.filter((i) => i != arrayOfValues[0])
      }
      for (const val of arrayOfValues) {
        runner.next = new ListNode(val);
        runner = runner.next
      }
    }
  
    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
      const arr = [];
      let runner = this.head;
  
      while (runner) {
        arr.push(runner.data);
        runner = runner.next;
      }
      return arr;
    }
  }
  
  /******************************************************************* 
  */
  const emptyList = new SinglyLinkedList();
  
  const list1 = new SinglyLinkedList()
  list1.insertAtBackMany([44, 56, 87])
  
  const list2 = new SinglyLinkedList()
  list2.insertAtBackMany([3, 8, 7, 45, 33, 9])
  console.log(list2.removeVal(45));
  console.log(list2.toArr());
  
  const list3 = new SinglyLinkedList()
  list3.insertAtBackMany([100])
  
  
  
  
  
  