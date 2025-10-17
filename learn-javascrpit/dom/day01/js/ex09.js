// 이벤트 연결
window.onload = function () {
  // 버튼 객체를 선택한다.
  let button = this.document.getElementById('button');

  // 버튼객체에 이벤트 연결
  button.onclick = function () {
    alert('click event');
  };
};
