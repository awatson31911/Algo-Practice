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

    insert(value) {
        const newTree = new BST(value);
        let currentNode = this;
        
        while(true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newTree;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newTree;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }

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

    remove(value, parentNode = null) {
        // Iterate through and find value
        // infinte while loop where < iterate left, > iterate right until value found 
        // if found see edge cases
        let currentNode = this;

        while (currentNode !== null) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else { // we have reached the node to remove
                if (currentNode.left !== null && currentNode.right !== null) {
                    currentNode.value = currentNode.right.getMinimumValue();
                    currentNode.right.remove(currentNode.value, currentNode);
                } else if (parentNode === null) {
                    if (currentNode.left !== null) {
                        currentNode.value = currentNode.left.value;
                        currentNode.right = currentNode.left.right;
                        currentNode.left = currentNode.left.left;

                    }
                    else if (currentNode.right !== null) {
                        currentNode.value = currentNode.right.value;
                        currentNode.left = currentNode.right.left;
                        currentNode.right = currentNode.right.right;
                    } else {
                        currentNode.value = null;
                    }
                }
                else if (parentNode.left === currentNode) {
                    parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
                }
                else if (parentNode.right === currentNode) {
                    parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
                }

                break;
            }
        }
        return this;
    }

    getMinimumValue() {
        let currentNode = this;
        while(currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }
}

// Do not edit the line below.
exports.BST = BST;

const test1 = new BST(10).insert(5).insert(15).insert(5).insert(2).insert(14).insert(22);
const test2 = new BST(10).insert(15).insert(11).insert(22).remove(10);
test2;
test1;
// chai.expect(test1.right.right.value).to.deep.equal(22);