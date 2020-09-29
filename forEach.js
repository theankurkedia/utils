Array.prototype.myForEach = function(callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index],);
    }
}

console.log("================================")
console.log("[1,2,3].forEach((val) => console.log(val))");
console.log(
  [1,2,3].forEach((val) => console.log(val)),
  [1,2,3].myForEach((val) => console.log(val))
);
console.log("================================")