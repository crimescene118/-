document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.image-btn');
    let history = [];

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const imageName = this.getAttribute('data-image');
            changeImage(imageName);
            toggleButtonsVisibility(false); // 새 이미지가 나타날 때 버튼 숨김
        });
    });

   function changeImage(imageName, button) {
    const imgElement = document.getElementById('current-image');
    const rect = button.getBoundingClientRect(); // 버튼의 위치와 크기 정보

    // 이미지 시작 위치와 크기를 버튼에 맞춤
    imgElement.style.position = 'absolute';
    imgElement.style.left = `${rect.left}px`;
    imgElement.style.top = `${rect.top}px`;
    imgElement.style.width = `${rect.width}px`;
    imgElement.style.height = `${rect.height}px`;

    setTimeout(() => {
        history.push(imgElement.src);
        imgElement.src = imageName;
        // 원래 크기와 위치로 애니메이션
        imgElement.style.transition = 'all 0.5s ease';
        imgElement.style.left = '0px'; // 이미지의 원래 위치
        imgElement.style.top = '0px'; // 이미지의 원래 위치
        imgElement.style.width = '100%'; // 이미지의 원래 너비
        imgElement.style.height = 'auto'; // 이미지의 원래 높이
    }, 500);
}
    function addBackButton() {
        let backButton = document.getElementById('back-button');
        if (!backButton) {
            backButton = document.createElement('button');
            backButton.id = 'back-button';
            backButton.textContent = '뒤로가기'; // 실제 상황에서는 투명으로 설정됩니다.
            backButton.onclick = function() {
                goBack();
                if (history.length === 0) {
                    toggleButtonsVisibility(true); // 뒤로 갈 때 기존 버튼 보이기
                }
            };
            document.body.appendChild(backButton);
        }
    }

    function goBack() {
        if (history.length > 0) {
            const imgElement = document.getElementById('current-image');
            const previousImage = history.pop();
            imgElement.src = previousImage;
        }
    }

    // 버튼의 가시성을 토글하는 함수
    function toggleButtonsVisibility(show) {
        buttons.forEach(button => {
            button.style.display = show ? 'block' : 'none';
        });
    }
});
