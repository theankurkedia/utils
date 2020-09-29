Array.prototype.myFilter = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index])){
          resultArray.push(this[index]);
        }
    }
    return resultArray;
}

console.log("================================")
console.log("[1,2,3].filter((val) => val%2 === 0))");
console.log(
  [1,2,3].filter((val) => val%2 === 0), 
  [1,2,3].myFilter((val) => val%2 === 0)
);
console.log("================================")