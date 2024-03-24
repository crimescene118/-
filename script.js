function handleClick(buttonId) {
    // 버튼 ID에 따른 이미지 파일 매핑
    var images = {
        1: "인스타.jpg",
        2: "메시지.png",
        3: "메시지함.jpg",
        4: "인스타게시글.jpg"
    };
    
    var imageUrl = images[buttonId]; // 버튼 ID에 해당하는 이미지 URL
    var screenImage = document.querySelector('.screen-image');
    
    screenImage.src = imageUrl; // 이미지 소스 변경
    
    // 이전 확대 애니메이션 효과 제거
    screenImage.classList.remove('zoom-effect');
    
    // 브라우저가 이전 변경 사항을 무시하지 않도록 함
    setTimeout(() => {
        // 확대 애니메이션 추가
        screenImage.classList.add('zoom-effect');
    }, 0);
}
function handleClick(buttonId) {
    var imageUrl = "인스타.jpg"; // '인스타.jpg' 이미지 경로
    var screenImage = document.querySelector('.screen-image');
    var firstScreenButtons = document.querySelectorAll('.btn');
    var backButton = document.getElementById('backButton');
    var newImageButton = document.getElementById('newImageButton');

    // 첫 번째 화면의 버튼들 숨기기
    firstScreenButtons.forEach(button => button.classList.add('hidden'));

    // 새 이미지로 변경 및 새로운 버튼 보이기
    screenImage.src = imageUrl;
    backButton.classList.remove('hidden');
    newImageButton.classList.remove('hidden');

   // 뒤로 가는 버튼 기능
backButton.onclick = function() {
    // 초기 화면 이미지 URL로 변경 필요
    screenImage.src = '최아들배경.PNG'; // 첫 화면의 이미지로 변경
    backButton.classList.add('hidden');
    newImageButton.classList.add('hidden');
    
    // 첫 번째 화면의 버튼들 다시 보이기
    firstScreenButtons.forEach(button => button.classList.remove('hidden'));

    // 확대 애니메이션 효과 재적용
    screenImage.classList.remove('zoom-effect');
    // 약간의 딜레이를 추가하여 애니메이션 재시작을 보장
    setTimeout(() => {
        screenImage.classList.add('zoom-effect');
    }, 10); // 0에서 10ms로 변경
};


    // 새로운 이미지를 여는 버튼 기능 (설정 필요)
    newImageButton.onclick = function() {
        screenImage.src = '인스타게시글.jpg'; // 첫 화면의 이미지로 변경
        backButton.classList.add('hidden');
        newImageButton.classList.add('hidden');
    };
}
