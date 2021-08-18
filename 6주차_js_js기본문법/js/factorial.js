var n = prompt("숫자를 입력하세요.","10");
var msg = "";

if (n !== null) {  // '취소' 버튼을 누르지 않았는지 체크
	var nFact = 1;  // 결과 값
	var i = 1;  // 카운터
	while(i <= n) {
		nFact *= i;
		i++;
	}
	msg = n + "! = " + nFact;  // 결과 값을 표시할 문자열 
}
else
	msg = "값을 입력하지 않았습니다.";

document.write(msg);  // 결과 표시