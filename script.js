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
