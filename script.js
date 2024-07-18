//console.log("Hi :3");
//
//let a = "9";
//console.log("a");

//while (a < 10) {
//  console.log(a);
// a += 1;
//}
//for (let i = 0; i < 10; i += 1) {
// console.log(i);
//}

//if (0) {
//console.log(sd)
//} else if(1){
//  console.log(s)
//} else

//let a = prompt("chislo");
//alert(a);
//a = Number(a);
//switch (a) {
// case 0:
//    console.log("0");
//  break;
//  case 1:
//    console.log("1");
//    break;//
//  case 2:
//    console.log("2");
//    break;
//  case 3:
//    console.log("3");
//    break;
//  case 4:
//    console.log("4");
//  break;
//  default:
//  console.log("d");
//  break;
// }
//let answer = confirm("stul");
//alert(answer);

let a = Math.floor(Math.random() * 11);
console.log(a);
while (true) {
  let b = prompt("Введите число :");

  if (b < a) {
    alert("Загаданое число больше");
  } else if (b > a) {
    alert("Загаданое число меньше");
  } else {
    alert("Угадал");
    break;
  }
}
