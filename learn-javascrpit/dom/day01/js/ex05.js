window.onload = function () {
  const header = this.document.getElementById('header');
  const originalText = header.innerHTML;

  header.innerHTML = '변경 후 : From JavaScript! <br/>';
  header.innerHTML += '변경 전 : ' + originalText;
};
