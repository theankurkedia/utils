Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        if(accumulator) {
          accumulator = callback(this[i], accumulator);
        } else {
          accumulator = this[i];
        }
    }
    return accumulator;
}

console.log("================================")
console.log("[1,2,3].reduce((a, b) => (a + b), 10)");
console.log(
  [1,2,3].reduce((a, b) => (a + b), 10),
  [1,2,3].myReduce((a, b) => (a + b), 10),
);
console.log("================================")