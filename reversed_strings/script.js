function solution(str) {
  let result = [];
  for (let i = str.length; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join("");
}
//1----------------------------------------
function solution1(str) {
  return str.split("").reverse().join("");
}

//2----------------------------------------
const solution2 = (str) => [...str].reverse().join("");

//3============================================
function solution3(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }
console.log(solution3("world")); //'dlrow'
