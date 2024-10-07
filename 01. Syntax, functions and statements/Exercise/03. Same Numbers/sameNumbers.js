function sameNumbers(num) {
  let stringNumArr = num.toString().split("");
  let result = 0;
  let areTheSame = true;

  for (i = 0; i < stringNumArr.length; i++) {
    result += Number(stringNumArr[i]);

    if (
      stringNumArr[i] !== stringNumArr[i + 1] &&
      i < stringNumArr.length - 1
    ) {
      areTheSame = false;
    }
  }
  console.log(areTheSame);
  console.log(result);
}

sameNumbers(1234);
