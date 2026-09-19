const STORAGE_KEY = 'todo-list-items';

const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const emptyState = document.querySelector('#empty-state');
const remainingCount = document.querySelector('#remaining-count');

let todos = loadTodos();

// 從瀏覽器儲存空間讀取資料,格式錯誤時使用空清單
function loadTodos() {
  try {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];
    return Array.isArray(parsedTodos) ? parsedTodos : [];
  } catch (error) {
    console.warn('無法讀取待辦資料,將使用空清單。', error);
    return [];
  }
}

// 儲存每次新增、勾選或刪除後的最新資料
function saveTodos() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.warn('無法儲存待辦資料。', error);
  }
}

function createTodoId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function createTodoElement(todo) {
  const item = document.createElement('li');
  item.className = todo.completed ? 'todo-item completed' : 'todo-item';
  item.dataset.id = todo.id;

  const checkbox = document.createElement('input');
  checkbox.className = 'todo-checkbox';
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.setAttribute('aria-label', `標記「${todo.text}」為完成`);

  const text = document.createElement('span');
  text.className = 'todo-text';
  text.textContent = todo.text;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.type = 'button';
  deleteButton.textContent = '×';
  deleteButton.title = '刪除';
  deleteButton.setAttribute('aria-label', `刪除「${todo.text}」`);

  item.append(checkbox, text, deleteButton);
  return item;
}

// 依目前資料重新繪製清單與未完成數量
function renderTodos() {
  list.replaceChildren(...todos.map(createTodoElement));
  emptyState.hidden = todos.length !== 0;

  const remaining = todos.filter((todo) => !todo.completed).length;
  remainingCount.textContent = `未完成:${remaining} 項`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) {
    input.value = '';
    return;
  }

  todos.push({
    id: createTodoId(),
    text,
    completed: false,
  });

  saveTodos();
  renderTodos();
  form.reset();
  input.focus();
});

// 使用事件委派處理所有清單項目的操作
list.addEventListener('change', (event) => {
  if (!event.target.matches('.todo-checkbox')) return;

  const item = event.target.closest('.todo-item');
  const todo = todos.find((entry) => entry.id === item.dataset.id);
  if (!todo) return;

  todo.completed = event.target.checked;
  saveTodos();
  renderTodos();
});

list.addEventListener('click', (event) => {
  const deleteButton = event.target.closest('.delete-button');
  if (!deleteButton) return;

  const item = deleteButton.closest('.todo-item');
  todos = todos.filter((todo) => todo.id !== item.dataset.id);
  saveTodos();
  renderTodos();
});

renderTodos();