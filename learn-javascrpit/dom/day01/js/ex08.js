window.onload = function () {
  const header = this.document.getElementById('header');
  // header.style.color = 'red';
  // header.style.border = '1px solid black';

  const input = document.createElement('input');
  input.type = 'text';
  input.value = header.innerText; // 기존 텍스트를 입력값으로

  input.style.fontSize = '24px'; // 글씨 크기 크게
  input.style.color = 'red'; // 글씨 색 빨간색
  input.style.fontWeight = 'bold'; // (선택) 글씨 굵게
  input.style.border = '1px solid black';
  input.style.padding = '6px 10px';

  // 기존 header를 input으로 교체
  header.parentNode.replaceChild(input, header);
};
