function findClosestValueInBst(tree, target) {
    if (tree.left === null && tree.right === null) { return tree.value; }

    const maxDifference = Math.abs(target - tree.value);
    const maxDifferenceNode = tree.value;
    const leftValue = (tree.left !== null) && (target < tree.value)
        ? findClosestValueInBst(tree.left, target)
        : Infinity;
    const rightValue = (tree.right !== null) && (target > tree.value)
        ? findClosestValueInBst(tree.right, target)
        : Infinity;

    const maxDifferenceRightLeft = Math.abs(target - rightValue) < Math.abs(target - leftValue)
        ? Math.abs(target - rightValue)
        : Math.abs(target - leftValue);
    const maxDifferenceNodeRightLeft = maxDifferenceRightLeft === Math.abs(target - rightValue)
        ? rightValue
        : leftValue;

    if (maxDifferenceRightLeft <= maxDifference) { return maxDifferenceNodeRightLeft; }

    return maxDifferenceNode;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
