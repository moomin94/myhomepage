const todoForm = document.querySelector('.todoInput form');
const todoInput = document.querySelector('.todoInput input[type=text]');
const todoTime = document.querySelector('.todoInput input[type=time]');
const todoList = document.querySelector('.todoList');

function showTodos(todo){
  let todoLi = document.createElement('li');
  let deleteBtn = document.createElement('button');
  let todoBtn = document.createElement('button');
  let todoA = document.createElement('a');
  let todoSpan = document.createElement('span');
  deleteBtn.innerHTML = 'X';
  todoBtn.innerHTML = 'O';
  todoA.innerHTML = todo;
  todoSpan.innerHTML = todoTime.value;
  deleteBtn.classList.add('todoBtn');
  deleteBtn.addEventListener('click', function(){
    deleteBtn.parentNode.remove();
  });
  todoBtn.classList.add('todoBtn');
  todoBtn.addEventListener('click', function(){
    todoBtn.nextSibling.classList.toggle('line-through');
  });
  todoA.classList.add('todoA');
  todoSpan.classList.add('todoSpan');
  todoLi.classList.add('todoLi');
  todoLi.appendChild(deleteBtn);
  todoLi.appendChild(todoBtn);
  todoLi.appendChild(todoA);
  todoLi.appendChild(todoSpan);
  todoList.appendChild(todoLi);
  let alarm = function(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    if(hours == todoSpan.innerHTML.substring(0,2) && minutes == todoSpan.innerHTML.substring(3,5) && seconds == 0){
      alert(todoSpan.previousSibling.textContent);
    }
  }
  setInterval(alarm,1000);
}

function submitTodos(e){
  e.preventDefault();
  let todo = todoInput.value;
  todoInput.value = '';
  showTodos(todo);
}

todoForm.addEventListener('submit', submitTodos);
