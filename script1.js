const inputText = document.getElementById("to_do");
const AddButton = document.getElementById("add_button");
const listContainer = document.getElementById("list_items");

function addTask() {
  if (inputText.value === "") {
    alert("please input item");
  } else {
    let item = document.createElement("li");
    item.innerText = inputText.value;
    listContainer.appendChild(item);
    item.addEventListener("click", (event) => {
      event.target.classList.toggle("checked");
    });
    inputText.value = "";
    saveData();
  }
}

inputText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  console.log("saved");
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
