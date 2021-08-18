var numberOne = prompt("50미만의 숫자를 입력하세요.");
var numberTwo = prompt("50미만의 숫자를 입력하세요.");
      
if (numberOne !== null && numberTwo !== null) {
    if (numberOne < 10 || numberTwo < 10)
        alert("두 개의 숫자 중 최소한 하나는 10 미만이군요.");
    else 
        alert("두 개의 숫자 중 10 미만인 수는 없습니다.");
}
else {
    alert("50 미만의 숫자를 입력하세요.");
}