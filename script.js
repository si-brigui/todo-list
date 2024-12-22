document.querySelector("#addTaskBtn").onclick = function () {
  const taskInput = document.querySelector("#taskInput");
  const tasksContainer = document.querySelector("#tasks");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  // Create task container
  const task = document.createElement("div");
  task.classList.add("task");

  // Add task text
  const taskText = document.createElement("span");
  taskText.textContent = taskInput.value;

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    const newTask = prompt("Edit your task:", taskText.textContent);
    if (newTask) {
      taskText.textContent = newTask;
    }
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    task.remove();
  };

  // Append elements
  task.appendChild(taskText);
  task.appendChild(editBtn);
  task.appendChild(deleteBtn);
  tasksContainer.appendChild(task);

  // Clear input field
  taskInput.value = "";
};
