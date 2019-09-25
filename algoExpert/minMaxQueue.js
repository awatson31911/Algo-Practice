class MinMaxStack {
    constructor() {
        this.minMaxDict = [] //fill with key:value pairs for min/max
        this.currentStack = []

    }

    peek() {
        return this.currentStack[this.currentStack.length - 1];
    }

    pop() {
        this.minMaxDict.pop()
        return this.currentStack.pop();
    }
    
    push(number) {
        if (this.currentStack.length === 0) {
            this.minMaxDict.push({ min: number, max: number });
            this.currentStack.push(number);
            return;
        }
        
        let currMin = this.getMin();
        let currMax = this.getMax();
        
        if (number < currMin) {
            this.minMaxDict.push({ min: number, max: currMax });
        } else if (number > currMax) {
            this.minMaxDict.push({ min: currMin, max: number });
        } else {
            this.minMaxDict.push({ min: currMin, max: currMax });
        }
        this.currentStack.push(number);
    }
    
    getMin() {
        return this.minMaxDict[this.minMaxDict.length - 1].min
    }

    getMax() {
        return this.minMaxDict[this.minMaxDict.length - 1].max
    }
}

let stack = new MinMaxStack
stack.currentStack;
stack.push(4)
stack.push(5)
stack.push(7)
stack.push(2)
stack.pop()

 stack.getMax()
 stack.getMin()
