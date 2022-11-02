import "./style.css";

const todoContainer = document.querySelector(".todo-list");

const toDoItems = [
  {
    description: "My first to do",
    completed: false,
    index: 0,
  },
  {
    description: "My second to do",
    completed: false,
    index: 1,
  },
  {
    description: "My third to do",
    completed: false,
    index: 2,
  },
];

const MarkupGenerator = (data) => {
  return `<li class="todo" data-index="${data.index}" data-completed="${data.completed}"> 
  <input type="checkbox" id="${data.index}" name="${data.index}" value="Bike">
  <label for="${data.index}"> ${data.description} <i
          class="fa-list-icon fa-solid fa-ellipsis-vertical"></i></label>
  </li>`;
};

const allListItems = (arr) => {
  let listString = "";

  const sortedArr = arr.sort((a, b) => a.index - b.index);

  sortedArr.forEach((item) => {
    listString += MarkupGenerator(item);
  });

  todoContainer.innerHTML = listString;
};

allListItems(toDoItems);
