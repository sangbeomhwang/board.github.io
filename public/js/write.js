const writeFrm = document.querySelector("#writeFrm");

class Board {
  constructor(subject, content, writer) {
    let writeYear = new Date().getFullYear();
    let writeMonth = new Date().getMonth() + 1;
    let writeDay = new Date().getDate();

    this.index = "";
    this.subject = subject;
    this.content = content;
    this.writer = writer;

    function datePrinter() {
      if (writeMonth < 10 && writeDay < 10) {
        return `${writeYear}-0${writeMonth}-0${writeDay}`;
      } else if (writeMonth < 10 && writeDay >= 10) {
        return `${writeYear}-0${writeMonth}-${writeDay}`;
      } else if (writeMonth >= 10 && writeDay < 10) {
        return `${writeYear}-${writeMonth}-0${writeDay}`;
      } else {
        return `${writeYear}-${writeMonth}-${writeDay}`;
      }
    }
    this.date = datePrinter();
    this.hit = 0;
  }
}

function submitHandler(e) {
  e.preventDefault();
  const subject = e.target.subject.value;
  const content = e.target.content.value;
  const writer = e.target.writer.value;
  const instance = new Board(subject, content, writer);

  // '[]' -> []
  // boards -> []
  // boards.push(instance)
  const boards = JSON.parse(localStorage.getItem("boards"));
  boards.push(instance);
  // console.log(boards);

  const index = boards.length - 1;

  const item = JSON.stringify(boards);
  //   boards: []
  localStorage.setItem("boards", item);
  //   [] -> {}
  e.target.reset();

  // location : html의 a 태그 없이 자바스크립트만으로 링크 이동이 가능하게 하는 객체(location: url과 관련된 내용을 담고 있는 객체)
  location.href = "/board/view.html?index=" + index;
}
writeFrm.addEventListener("submit", submitHandler);