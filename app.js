// 버튼과 결과창 요소를 가져옵니다.
const btn = document.getElementById('boom-btn');
const result = document.getElementById('result');

// 버튼을 클릭했을 때 실행될 함수
btn.addEventListener('click', function() {
    // 화면에 '펑'을 출력합니다.
    result.textContent = "펑! 💥";
    
    // 콘솔창(F12)에도 출력해봅니다.
    console.log("펑");
});