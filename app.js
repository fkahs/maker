// 1. 필요한 요소들을 모두 가져옵니다.
const boomBtn = document.getElementById('boom-btn');
const resetBtn = document.getElementById('reset-btn');
const result = document.getElementById('result');
const title = document.getElementById('title');

// 2. [눌러보기] 버튼 클릭 이벤트
boomBtn.addEventListener('click', function() {
    // 메시지 표시
    result.textContent = "펑! 💥";
    title.textContent = "터져버렸습니다!";
    
    // 버튼 교체 (폭발 버튼 숨기고, 다시하기 버튼 보이기)
    boomBtn.classList.add('hidden');
    resetBtn.classList.remove('hidden');
});

// 3. [다시하기] 버튼 클릭 이벤트 (돌아오는 기능)
resetBtn.addEventListener('click', function() {
    // 상태 초기화
    result.textContent = "";
    title.textContent = "버튼을 누르세요!";
    
    // 버튼 교체 (다시하기 버튼 숨기고, 폭발 버튼 보이기)
    resetBtn.classList.add('hidden');
    boomBtn.classList.remove('hidden');
});