document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        handleClick(this.getAttribute('data-id'));
    });
});

function handleClick(buttonId) {
    var images = {
        1: "인스타.jpg",
        2: "메시지.jpg",
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
    }, 10); // 딜레이 후 애니메이션 추가

    // "뒤로 가기" 및 "새 이미지" 버튼 숨기기
    document.getElementById('backButton').classList.add('hidden');
    document.getElementById('newImageButton').classList.add('hidden');

    // 첫 번째 화면의 버튼들 다시 보이기
    document.querySelectorAll('.btn').forEach(button => button.classList.remove('hidden'));
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

    // 확대 애니메이션 효과 제거
    screenImage.classList.remove('zoom-effect');
};

// 새로운 이미지를 여는 버튼 기능
document.getElementById('newImageButton').onclick = function() {
    var screenImage = document.querySelector('.screen-image');
    screenImage.src = '인스타게시글.jpg';
    this.classList.add('hidden');
    document.getElementById('backButton').classList.add('hidden');
    // 여기서도 첫 번째 화면의 버튼들을 다시 보이게 할 필요가 없음
};
let lastImageSrc = ''; // 마지막 이미지 소스를 저장할 변수

// 새로운 이미지를 여는 버튼 기능
document.getElementById('newImageButton').onclick = function() {
    var screenImage = document.querySelector('.screen-image');

    lastImageSrc = screenImage.src; // 현재 이미지 소스를 마지막 이미지로 저장

    // '인스타게시글.jpg'로 이미지 변경
    screenImage.src = '인스타게시글.jpg';

    // 확대 애니메이션 효과 재적용
    screenImage.classList.remove('zoom-effect');
    setTimeout(() => {
        screenImage.classList.add('zoom-effect');
    }, 10); // 딜레이 후 애니메이션 추가

    // "새로운 이미지를 여는 버튼" 숨기고 "뒤로 가는 버튼" 보이기
    this.classList.add('hidden');
    var backButton = document.getElementById('backButton');
    backButton.classList.remove('hidden');

    // '뒤로 가는 버튼'의 클릭 이벤트 핸들러 재설정
    backButton.onclick = function() {
        screenImage.src = lastImageSrc; // 마지막 이미지 소스로 변경
        backButton.classList.add('hidden'); // '뒤로 가는 버튼' 숨기기
        document.getElementById('newImageButton').classList.remove('hidden'); // '새로운 이미지를 여는 버튼' 다시 보이기
        document.querySelectorAll('.btn').forEach(button => button.classList.add('hidden')); // 초기 화면 버튼 숨기기 (필요에 따라 조정)

        // 이전 확대 애니메이션 효과 제거 후 재적용
        screenImage.classList.remove('zoom-effect');
        setTimeout(() => {
            screenImage.classList.add('zoom-effect');
        }, 10); // 딜레이 후 애니메이션 추가
    };
};
