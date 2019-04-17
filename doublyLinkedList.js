// Feel free to add new properties and methods to the class.
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.insertBefore(this.head, node);
        }
    }

    setTail(node) {
        if (this.tail === null) {
            this.setHead(node);
        } else {
            this.insertAfter(this.tail, node);
        }
    }

    insertBefore(node, nodeToInsert) {
        if (this.head === nodeToInsert && this.tail === nodeToInsert) { return; }

        this.remove(nodeToInsert);
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node;

        if (node.prev === null) {
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
        }
        node.prev = nodeToInsert;
    }

    insertAfter(node, nodeToInsert) {
        if (this.head === nodeToInsert && this.tail === nodeToInsert) { return; }

        this.remove(nodeToInsert);
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;

        if (node.next === null) {
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert;
    }

    insertAtPosition(position, nodeToInsert) {
        this.remove(nodeToInsert);
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }

        let currentPosition = 1;
        let currNode = this.head;
        while (currNode !== null && currentPosition++ !== position) currNode = currNode.next;
        if (currNode !== null) {
            this.insertBefore(currNode, nodeToInsert);
        } else {
            this.setTail(nodeToInsert);
        }
    }

    removeNodesWithValue(value) {
        let currNode = this.head;
        while (currNode !== null) {
            const nodeToRemove = currNode;
            currNode = currNode.next;
            if (nodeToRemove.value === value) {
                this.remove(nodeToRemove);
            }
        }
    }

    remove(node) {
        if (node === this.head && node === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (node === this.head) {
            this.head = this.head.next; // node.next = null
        } else if (node === this.tail) {
            this.tail = this.tail.prev; // node.prev = null 
        }

        this.removeNodeBindings(node);
    }

    containsNodeWithValue(value) {
        let currNode = this.head;
        while (currNode !== null) {
            if (currNode.value === value) { return true; }

            currNode = currNode.next;
        }
        return false;
    }

    removeNodeBindings(node) {
        if (node.prev !== null) { node.prev.next = node.next; }
        if (node.next !== null) { node.next.prev = node.prev; }
        node.next = null;
        node.prev = null;
    }
}

// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;

const linkedList = new DoublyLinkedList;
const n1 = new Node(2);
const n2 = new Node(6);
const n3 = new Node(1);
const n4 = new Node(1);

linkedList.setHead(n1);
linkedList.insertAfter(n1, n2);
linkedList.insertAfter(n2, n3);
linkedList.insertAfter(n3, n4);
linkedList.removeNodesWithValue(1);
linkedList.remove(n1);
linkedList.insertAtPosition(3, n1);
linkedList.insertAtPosition(1, n1);
linkedList.insertAtPosition(1, n3);
linkedList.containsNodeWithValue(6);