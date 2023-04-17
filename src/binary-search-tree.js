const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addToTree(this.head, data);
    function addToTree(element, data) {
      if (!element) {
        return new Node(data);
      } else if (element.data === data) {
        return element;
      } else if (element.data < data) {
        element.right = addToTree(element.right, data);
      } else if (element.data > data) {
        element.left = addToTree(element.left, data);
      }
      return element;
    }
  }

  has(data) {
    function check(node, data) {
      if (node.data === data) {
        return true;
      } else if (node.data < data && !!node.right) {
        return check(node.right, data);
      } else if (node.data > data && !!node.left) {
        return check(node.left, data);
      } else {
        return false;
      }
    }
    return check(this.head, data);
  }

  find(data) {
    function check(node, data) {
      if (node.data === data) {
        return node;
      } else if (node.data < data && !!node.right) {
        return check(node.right, data);
      } else if (node.data > data && !!node.left) {
        return check(node.left, data);
      } else {
        return null;
      }
    }
    return check(this.head, data);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let cur = this.head;

    while (!!cur.left) {
      cur = cur.left;
    }

    return cur.data;
  }

  max() {
    let cur = this.head;

    while (!!cur.right) {
      cur = cur.right;
    }

    return cur.data;
  }
}

module.exports = {
  BinarySearchTree,
};
