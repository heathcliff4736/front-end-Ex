function waitOneSecond(msg) {
  return new Promise((resolve, _) => {
    setTimeout(resolve(`${msg}`), 1000);
  });
} // 1초 대기하고 메시지 출력 함수

async function countOnetoTen() {
  for (let i of [...Array(10).keys()]) {
    // 1초 대기 후에 result에 결과값을 저장
    let result = waitOneSecond(`${i + 1}초 대기중 ....`);
    console.log(result);
  } // 0부터 9까지 loop
  console.log('complete');
}

countOnetoTen();
