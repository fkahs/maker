// 페이지가 완전히 로드된 후 실행되도록 설정
window.onload = function() {
    const boomBtn = document.getElementById('boom-btn');
    const resetBtn = document.getElementById('reset-btn');
    const result = document.getElementById('result');
    const title = document.getElementById('title');

    // [눌러보기] 버튼 클릭 시
    if (boomBtn) {
        boomBtn.addEventListener('click', function() {
            result.textContent = "펑! 💥";
            if (title) title.textContent = "터져버렸습니다!";
            
            // 버튼 교체
            boomBtn.style.display = "none";
            if (resetBtn) resetBtn.style.display = "inline-block";
        });
    }

    // [다시하기] 버튼 클릭 시
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            result.textContent = "";
            if (title) title.textContent = "버튼을 누르세요!";
            
            // 버튼 원상복구
            resetBtn.style.display = "none";
            if (boomBtn) boomBtn.style.display = "inline-block";
        });
    }
};