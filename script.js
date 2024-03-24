function handleClick(buttonId) {
    var images = {
        1: "인스타.jpg",
        2: "메시지.png",
        3: "메시지함.jpg",
        4: "인스타게시글.jpg"
    };
    
    var imageUrl = images[buttonId]; // 버튼 ID에 해당하는 이미지 URL
    var screenImage = document.querySelector('.screen-image');
    var backButton = document.getElementById('backButton');
    var newImageButton = document.getElementById('newImageButton');
    
    // 첫 번째 화면의 버튼들 숨기기
    document.querySelectorAll('.btn').forEach(button => button.classList.add('hidden'));
    
    // 이미지와 버튼 상태 업데이트
    screenImage.src = imageUrl;
    backButton.classList.remove('hidden');
    newImageButton.classList.remove('hidden');

    // 이전 확대 애니메이션 효과 제거 후 재적용
    screenImage.classList.remove('zoom-effect');
    setTimeout(() => {
        screenImage.classList.add('zoom-effect');
    }, 10); // 딜레이 후 애니메이션 추가
}

// 뒤로 가는 버튼 기능
document.getElementById('backButton').onclick = function() {
    var screenImage = document.querySelector('.screen-image');
    // 초기 화면 이미지 URL로 변경
    screenImage.src = '최아들배경.PNG';
    this.classList.add('hidden');
    document.getElementById('newImageButton').classList.add('hidden');
    // 첫 번째 화면의 버튼들 다시 보이기
    document.querySelectorAll('.btn').forEach(button => button.classList.remove('hidden'));

    // 애니메이션 효과를 여기서 제거하거나 추가하지 않음
};

// 새로운 이미지를 여는 버튼 기능
document.getElementById('newImageButton').onclick = function() {
    var screenImage = document.querySelector('.screen-image');
    screenImage.src = '인스타게시글.jpg';
    this.classList.add('hidden');
    document.getElementById('backButton').classList.add('hidden');
    // 여기서도 첫 번째 화면의 버튼들을 다시 보이게 할 필요가 없음
};
