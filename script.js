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
    
    // 확대 애니메이션 추가
    screenImage.classList.add('zoom-effect');
    
    // 애니메이션 리셋을 위한 코드
    setTimeout(function() {
        screenImage.classList.remove('zoom-effect');
    }, 500); // 0.5초 후 확대 효과 제거
}
