function getMinMax(str) {
    let numArr = str.split(", ").join(" ").split(" ")
    .filter(item => Number(item)).map(item =>+item);
    let minmax = {};
    minmax.min = Math.min(...numArr);
    minmax.max = Math.max(...numArr);
  return minmax;
}


const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
console.log(getMinMax(inputData));

function makeArrOfNum(str) { 
    let numArr = str.split(", ").join(" ").split(" ")
    .filter(item => Number(item)).map(item =>+item);
    return numArr;
}


function ObjOfMaxMin(arr) {
    this.arr = arr;
    this.max = Math.max(...arr);
    this.min = Math.min(...arr);
}

let obj = new ObjOfMaxMin(makeArrOfNum(inputData));

console.log(obj.max);

console.log(obj.min);








