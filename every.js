Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if(!callback(this[i])) {
          return false;
        }
    }
    return true;
}

console.log("================================")
console.log("[1,2,3].every((a) => a%2===0),");
console.log(
  [1,2,3].every((a) => a%2===0),
  [1,2,3].myEvery((a) => a%2===0),
);
console.log("[2,4,6].every((a) => a%2===0)");
console.log(
  [2,4,6].every((a) => a%2===0),
  [2,4,6].myEvery((a) => a%2===0),
);
console.log("================================")