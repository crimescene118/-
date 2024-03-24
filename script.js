// 마지막 이미지 소스를 저장할 변수와 현재 화면이 초기 화면인지 아닌지를 나타내는 플래그
let lastImageSrc = ''; 
let isInitialScreen = true;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        handleClick(this.getAttribute('data-id'));
        // 버튼을 클릭했을 때, 모든 버튼을 숨기고 뒤로 가기 및 새 이미지 버튼을 보여줌
        document.querySelectorAll('.btn').forEach(btn => btn.classList.add('hidden'));
        document.getElementById('backButton').classList.remove('hidden');
        document.getElementById('newImageButton').classList.remove('hidden');
        isInitialScreen = false; // 초기 화면이 아님을 표시
    });
});

function handleClick(buttonId) {
    var images = {
        1: "인스타.jpg",
        2: "메시지.jpg",
        3: "메시지함.jpg",
        4: "인스타게시글.jpg"
    };

    var imageUrl = images[buttonId];
    var screenImage = document.querySelector('.screen-image');

    screenImage.src = imageUrl;
    screenImage.classList.remove('zoom-effect');

    setTimeout(() => {
        screenImage.classList.add('zoom-effect');
    }, 10);
}

// 새로운 이미지를 여는 버튼 기능
document.getElementById('newImageButton').onclick = function() {
    var screenImage = document.querySelector('.screen-image');
    lastImageSrc = screenImage.src; // 현재 이미지 소스를 마지막 이미지로 저장
    screenImage.src = '인스타게시글.jpg'; // 새 이미지로 변경

    screenImage.classList.remove('zoom-effect');
    setTimeout(() => {
        screenImage.classList.add('zoom-effect');
    }, 10);

    this.classList.add('hidden'); // '새 이미지 버튼' 숨김
    isInitialScreen = false; // 초기 화면이 아님을 표시
};

// 뒤로 가기 버튼에 대한 이벤트 리스너 설정
document.getElementById('backButton').onclick = function() {
    var screenImage = document.querySelector('.screen-image');

    if (!isInitialScreen && lastImageSrc !== '') {
        // lastImageSrc에 저장된 이전 이미지로 돌아가는 경우
        screenImage.src = lastImageSrc;
        lastImageSrc = ''; // lastImageSrc 초기화
    } else {
        // 초기 화면으로 돌아가는 경우
        screenImage.src = '최아들배경.PNG';
        document.querySelectorAll('.btn').forEach(button => button.classList.remove('hidden'));
        document.getElementById('newImageButton').classList.add('hidden');
        isInitialScreen = true;
    }

    this.classList.add('hidden'); // 뒤로 가기 버튼 숨김
    screenImage.classList.remove('zoom-effect');
    setTimeout(() => {
        screenImage.classList.add('zoom-effect');
    }, 10);
};
