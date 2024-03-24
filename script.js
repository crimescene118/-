function handleClick(buttonId) {
    // 예시 이미지 URL, 실제 사용할 이미지 URL로 변경해야 함
    var imageUrl = "path/to/your/image-for-button-" + buttonId + ".jpg";
    var screenImage = document.querySelector('.screen-image');
    
    // 이미지 URL 변경
    screenImage.src = imageUrl;

    // 확대 애니메이션 추가
    screenImage.classList.add('zoom-effect');
    
    // 애니메이션이 끝난 후에 추가적인 동작을 구현하고 싶다면 여기에 코드를 추가
    // 예: setTimeout(function() { /* 다음 동작 */ }, 500); // 0.5초 후에 실행
}
