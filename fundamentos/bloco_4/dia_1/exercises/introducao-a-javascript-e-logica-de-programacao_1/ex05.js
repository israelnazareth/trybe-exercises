let a = 80;
let b = 40;
let c = 60;

if (a <= 0 || b <= 0 || c <= 0){
  console.log("O valor de algum ângulo é invalido.")
} else if (a + b + c == 180) {
  console.log(true)
} else {
  console.log(false)
}