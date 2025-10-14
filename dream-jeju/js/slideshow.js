var slides = document.querySelectorAll('#slides > img');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    // 모든 이미지를 화면에서 감춤
  }
  slides[n].style.display = 'block';
  // n번째 이미지만 화면에 표시
}

function prevSlide() {
  // current값이 0보다 크면 이전 위치로
  // 그렇지 않으면(첫 번째 이미지이므로) 마지막 위치로
  if (current > 0) current -= 1;
  else current = slides.length - 1;
  showSlides(current);

  // 이동한 위치의 이미지 표시
}

function nextSlide() {
  // current값이 2보다 작으면 다음 위치로
  // 그렇지 않다면(마지막 이미지이므로) 첫 번째 위치로 이동
  if (current < slides.length - 1) current += 1;
  else current = 0;
  showSlides(current);

  // 이동한 위치의 이미지 표시
}
