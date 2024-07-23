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

//const claculate3 = (a, b) => a + b;
//console.log(claculate3(1, 3));

// Список посилань на зображення
const imageUrls = [
  "https://img.freepik.com/free-photo/travel-destination-view-from-airplane-window_23-2151382931.jpg",
  "https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg",
  "https://img.freepik.com/free-photo/3d-icon-travel-with-airplane_23-2151037350.jpg",
  "https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg",
  "https://img.freepik.com/free-photo/maldives-island_1203-7338.jpg",
  "https://img.freepik.com/free-photo/young-female-traveler-enjoying-rural-surroundings_23-2149125532.jpg",
  "https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg",
];
// Функція для створення розмітки галереї
function createImageGallery(urls) {
  const gallery = document.getElementById("imageGallery");
  urls.forEach((url) => {
    const listItem = document.createElement("li");
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Image";
    listItem.appendChild(img);
    gallery.appendChild(listItem);
  });
}

// Виклик функції для створення галереї
createImageGallery(imageUrls);
