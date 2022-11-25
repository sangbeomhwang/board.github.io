let item = localStorage.getItem("boards");
if (item === null) {
  const initialState = [];
  const state = JSON.stringify(initialState);
  localStorage.setItem("boards", state);
  item = state;
}

const tbody = document.querySelector("tbody");

function template(item, index) {
  return `
  <tr>
       <td>${index + 1}</td>
       <td><a href='/board/view.html?index=${index}'>${item.subject}</a></td>
       <td>${item.content}</td>
       <td>${item.date}</td>
       <td>${item.hit}</td>
  </tr>
`;
}

// const obj = { index: 0, subject: "11", content: "11", date: "11", hit: 0 };

// tbody.innerHTML = template(obj);
// console.log(item)

const boards = JSON.parse(item);
// [{}, {}, {}]

for (let i = boards.length - 1; i >= 0; i--) {
  tbody.innerHTML += template(boards[i], i);
}
