function makeNegative1(num) {
  if (num < 0) {
    return -num;
  } else {
    return num;
  }
}

function makeNegative2(num) {
  return -Math.abs(num);
}

function makeNegative3(num) {
  return num < 0 ? num : -num;
}

const makeNegative4 = (n) => -Math.abs(n);
