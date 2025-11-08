const input = document.getElementById("to_do");

const button = document.getElementById("add_button");

const listContainer = document.getElementById("list_items");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

function addTask() {
  if (input.value === "") {
    alert("empty Box!");
  } else {
    let li = document.createElement("li");

    li.innerHTML = input.value;
    listContainer.appendChild(li);
    input.value = "";
  }
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});
