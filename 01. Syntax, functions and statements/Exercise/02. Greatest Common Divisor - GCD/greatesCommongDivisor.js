function greatestCommonDivisor(firstNum, secondNum) {
  let result = 0;
  for (let i = 1; i <= Math.min(firstNum, secondNum); i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      result = i;
    }
  }

  console.log(result);
}

greatestCommonDivisor(15, 10);
