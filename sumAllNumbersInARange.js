function sumAll(arr) {
  let smallNum = Math.min(arr[0], arr[1]);
  let bigNum = Math.max(arr[0], arr[1]);
  let sum2 = 0;
  let sum1 = smallNum + bigNum;
  for (let i = smallNum + 1; i < bigNum; i++) {
    sum2 += i;
  }
  return sum2 + sum1;
}


console.log(sumAll([1, 4]));