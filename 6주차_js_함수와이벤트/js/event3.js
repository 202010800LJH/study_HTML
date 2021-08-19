// 방법 1 : 웹 요소를 변수로 지정 & 미리 만든 함수 사용
var changeBttn = document.querySelector("#change");
changeBttn.onclick = changeColor;

function changeColor() {
  document.querySelector("p").style.color = "#f00";
}

// 방법 2 : 웹 요소를 따로 변수로 만들지 않고 사용
// document.querySelector("#change").onclick = changeColor;

// function changeColor() {
//   document.querySelector("p").style.color = "#f00";
// }

// 방법 3 : 직접 함수를 선언
// document.querySelector("#change").onclick = function() {
//   document.querySelector("p").style.color = "#f00";
// };