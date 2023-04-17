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

  remove(data) {
    function removeNode(node, data) {
      if (!node) {
        return null;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let minRight = node.right;
          while (minRight.left) {
            minRight = minRight.left;
          }
          node.data = minRight.data;
          node.right = removeNode(node.right, minRight.data);
          return node;
        }
      }
    }
    this.head = removeNode(this.head, data);
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
