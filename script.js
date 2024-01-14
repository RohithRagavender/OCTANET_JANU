function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="removeTask(this)">Remove</button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }
  
  function removeTask(button) {
    const li = button.parentNode;
    const taskList = document.getElementById('taskList');
    taskList.removeChild(li);
  }
  