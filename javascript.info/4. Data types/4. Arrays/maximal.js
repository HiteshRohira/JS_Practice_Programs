function getMaxSubSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let tempSum = 0;
    for (let j = i; j < arr.length; j++) {
      tempSum += arr[j];
      if (tempSum > sum)
        sum = tempSum;
    }
  }
}