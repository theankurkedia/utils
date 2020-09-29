Array.prototype.myMap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

console.log("================================")
console.log("[1,2,3].map((val) => val*2))");
console.log(
  [1,2,3].map((val) => val*2), 
  [1,2,3].myMap((val) => val*2)
);
console.log("================================")