let rootElement = document.getElementById('root');
let ulElement = document.createElement('ul');
let inputElement = document.createElement('input');
inputElement.setAttribute('placeholder', 'Текст задачи...');

const tasks = ['Я хочу сделать список задач'];

let buttonElement = createElement('button', 'Добавить', handleClickAdd);

rootElement.appendChild(ulElement);
rootElement.appendChild(inputElement);
rootElement.appendChild(buttonElement);

render();

function handleClickAdd() {
  if (inputElement.value.trim()) {
    tasks.push(inputElement.value);
    inputElement.value = '';
    render();
  } else {
    alert('Инпут не может быть чистым!');
    inputElement.value = '';
    inputElement.focus();
  }
}

function handleClickRemove(index) {
  tasks.splice(index, 1);
  render();
}

function render() {
  while (ulElement.firstChild) {
    ulElement.firstChild.remove();
  }
  tasks.forEach((task, index) => {
    let liElement = createElement('li', task);
    let buttonElement = createElement('button', 'X', () =>
      handleClickRemove(index)
    );
    liElement.appendChild(buttonElement);
    ulElement.appendChild(liElement);
  });
}

function createElement(tag, innerHTML, method = undefined) {
  let element = document.createElement(tag);
  element.innerHTML = innerHTML;
  if (method) {
    element.onclick = method;
  }
  return element;
}
