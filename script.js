class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  /**
   * Returns the size of the LinkedList
   */
  get size() {
    return this._size;
  }

  /**
   * Returns the first Node of the LinkedList
   */
  get head() {
    return this._head;
  }

  /**
   * Returns the last Node of the LinkedList
   */
  get tail() {
    return this._tail;
  }

  /**
   * Add a new Node containing value to the end of the list
   */
  append(value) {
    let node = new Node(value);
    if (this._tail === null) {
      this._head = node;
      this._tail = node;
      this._size++;
      return;
    }
    this._tail.nextNode = node;
    this._tail = node;
    this._size++;
  }

  /**
   * Add a new Node containing value to the start of the list
   */
  prepend(value) {
    if (this._head === null) {
      this._head = node;
      this._tail = node;
      this._size++;
      return;
    }
    let node = this._head;
    this._head = new Node(value, node);
    this._size++;
  }

  /**
   * Returns the node at the given index
   */
  at(index) {
    let node = this._head;
    for (let i = 0; i < index; i++) {
      if (node === null) {
        return node;
      }
      node = node.nextNode;
    }
    return node;
  }

  /**
   * Removes the last element of the list
   */
  pop() {
    let node = this._head;
    if (node === null) {
      return;
    }
    if (node.nextNode === null) {
      this._head = null;
      this._tail = null;
      this._size--;
    }
    while (node.nextNode.nextNode !== null) {
      node = node.nextNode;
    }
    this._tail = node;
    node.nextNode = null;
    this._size--;
  }

  /**
   * Returns true if the passed value is in the list, otherwise returns false
   */
  contains(value) {
    let node = this._head;
    for (let i = 0; i < this._size; i++) {
      if (value === node.value) {
        return true;
      }
      node = node.nextNode;
    }
    return false;
  }

  /**
   * Returns the index of the node containing the passed value, or null if not found
   */
  find(value) {
    let node = this._head;
    for (let i = 0; i < this._size; i++) {
      if (value === node.value) {
        return i;
      }
      node = node.nextNode;
    }
    return null;
  }

  /**
   * Returns a representation of the LinkedList object as a string
   */
  toString() {
    let string = "";
    let node = this._head;
    for (let i = 0; i < this._size; i++) {
      string += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    string += `null`;
    return string;
  }

  /**
   * Insert a new node with the provided value at the given index
   */
  insertAt(value, index) {
    if (index < 0) {
      return;
    } else if (index >= this._size) {
      this.append(value);
      return;
    }

    let node = this._head;
    if (index === 0) {
      let newNode = new Node(value, node);
      if (this._head.nextNode === null) {
        this._tail = newNode;
      }
      this._head = newNode;
      this._size++;
      return;
    }

    for (let i = 1; i < index; i++) {
      node = node.nextNode;
    }
    node.nextNode = new Node(value, node.nextNode);
    this._size++;
  }

  /**
   * Remove the node at the given index
   */
  removeAt(index) {
    if (index < 0 || index >= this._size) {
      return;
    } else if (index === 0) {
      if (this._head.nextNode === null) {
        this._tail = null;
      }
      this._head = this._head.nextNode;
      this._size--;
      return;
    }

    let node = this._head;
    for (let i = 1; i < index; i++) {
      node = node.nextNode;
    }
    node.nextNode = node.nextNode.nextNode;
    if (node.nextNode === null) {
      this._tail = node;
    }
    this._size--;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };
