// 이벤트 연결
window.onload = function () {
  let button = this.document.getElementById('button');

  // 버튼객체에 이벤트 연결
  button.onclick = function () {
    button.innerHTML = button.innerHTML + '★';
  };
};
