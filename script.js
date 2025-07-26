
document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task-button");
  const taskList = document.getElementById("task-list");
  const emptyImage = document.querySelector(".empty-image");

  const toggleEmptyImage = () => {
    emptyImage.style.display = taskList.children.length === 0 ? "block" : "none";
  };

  const createTaskElement = (taskText) => {
    const li = document.createElement("li");
    li.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const span = document.createElement("span");
    span.textContent = taskText;

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.title = "Edit";
    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit your task:", span.textContent);
      if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.title = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
      toggleEmptyImage();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
  };

  const addTask = (event) => {
    if (event) event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task");
      return;
    }
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
    taskInput.value = "";
    toggleEmptyImage();
  };

  addTaskButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(event);
    }
  });

  toggleEmptyImage();
});

