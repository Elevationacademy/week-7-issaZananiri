/* Write your class below */

const Stack = require('./Stack');
class MinStack {
    constructor() {
        this.stack = []
        this.length = 0
        this.minValues = new Stack;
    }
    push(item) {
        if (item < this.minValues.peek(item) || this.length === 0) {
            this.minValues.push(item)
        }
        this.stack[this.length] = item
        this.length++
    }
    isEmpty() {
        if (this.length === 0) {
            return true
        }
        else {
            return false
        }
    }
    pop() {
        if (this.isEmpty()) {
            return null
        } else if (this.stack[this.length - 1] === this.minValues.peek()) {
            delete this.stack[this.length - 1]
            this.length--
            this.minValues.pop()
        } else {
            delete this.stack[this.length - 1]
            this.length--
        }
    }
    peek() {
        if (this.stack[this.length - 1]) {
            return this.stack[this.length - 1]
        }
        else {
            return null
        }
    }
    print() {
        console.log(this.stack)
    }
    getMin() {
        if (this.minValues.isEmpty()) {
            return null
        } else {
            return this.minValues.peek()
        }

    }
}




//You can paste the test code from the lesson below to test your solution
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19



/* Do not remove the exports below */
module.exports = MinStack