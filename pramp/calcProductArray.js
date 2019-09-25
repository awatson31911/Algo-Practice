function calcProductArray(inputArr) {
    if (inputArr.length === 0 || inputArr.length === 1) { return []; }
    const productArray = [];
    let product = 1;

    for (let i = 0; i < inputArr.length; i++) {
        productArray[i] = product;
        product*= inputArr[i];
    }

    product = 1;
    for (let i = inputArr.length - 1; i >= 0; i--) {
        productArray[i]*= product;
        product *= inputArr[i];
    }

    return productArray;
}