const input = document.querySelector('.input-box');
const addBtn = document.querySelector('.add-task');
const todoList = document.querySelector('.todo-list');

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const label = document.createElement('label');
  label.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete');

  
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  
  input.value = '';

  
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });

  
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
}
