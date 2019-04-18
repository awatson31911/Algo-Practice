// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    } 

    insert(value, direction) {
        const newTree = new BST(value);
        newTree.left = null;
        newTree.right = null;
        const RIGHT = 'RIGHT';
        const LEFT = 'LEFT';

        if (this.left === null && direction === LEFT) {
            this.left = newTree;
            return;
        } else if (this.right === null && direction === RIGHT) {
            this.right = newTree;
            return;
        }

        if (value > this.value) {this.value.right.insert(value, direction = RIGHT); }
        if (value < this.value) {this.value.left.insert(value, direction = LEFT); }

        return this;
    }

    contains(value) {
        if (this.value === value) return true;
        if (this.left === null && this.right === null) return false;

        const isInLeftTree = (value < this.value) && this.left != null
            ? this.left.contains(value)
            : false;
        const isInRightTree = (value > this.value) && this.right != null
            ? this.right.contains(value)
            : false;

        return this.value === value || isInLeftTree || isInRightTree;
    }

    remove(value) {


        return this;
    }
}

// Do not edit the line below.
exports.BST = BST;