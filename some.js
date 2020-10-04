Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
          return true;
        }
    }
    return false;
}

console.log("================================")
console.log("[1,2,3].some((a) => a%2===0),");
console.log(
  [1,2,3].some((a) => a%2===0),
  [1,2,3].mySome((a) => a%2===0),
);
console.log("[1,3,5].some((a) => a%2===0)");
console.log(
  [1,3,5].some((a) => a%2===0),
  [1,3,5].mySome((a) => a%2===0),
);
console.log("================================")