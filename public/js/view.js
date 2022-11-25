const modifyBtn = document.querySelector("#modifyBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const item = window.localStorage.getItem("boards");

// console.log(item); // 출력 결과가 string이기에 object로 형변환 후 해당 객체 안의 특정 값을 가져올 수 있음!!

const boards = JSON.parse(item);

const idx = location.search.split("="); // 데이터 타입이 string이다!! >> '?index=3' >> ['?index', '3']
const index = idx[1];
const board = boards[index];

const viewFrm = document.querySelectorAll("#viewFrm > div");

for (let i = 0; i < viewFrm.length; i++) {
  const id = viewFrm[i].id; // element의 id 값('subject')
  // board[i] -> board['subject']

  // console.log("id", id, board[id]);
  const span = viewFrm[i].querySelector("span");
  span.innerHTML = board[id];
}

modifyBtn.addEventListener("click", function () {
  location.href = `/board/modify.html?index=${index}`;
});

function deleteHandler(e) {
  if (confirm("정말 삭제하시겠습니까?") === true) {
    boards.splice(index, 1);

    const data = JSON.stringify(boards);
    localStorage.setItem("boards", data);
    location.href = "/board/list.html";
  }
}

deleteBtn.addEventListener("click", deleteHandler);

let prevPage = document.referrer;

if (prevPage.indexOf("list.html") !== -1) {
  board.hit += 1;
  const hitCount = JSON.stringify(boards);
  localStorage.setItem("boards", hitCount);
}
