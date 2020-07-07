let $todoInput;// miejsce w którym użytkownik wpisuje treść zadania
let $alertInfo;// info o braku zadań / konieczności dodania tekstu
let $addBtn;// przycisk ADD - dodaje nowe elemeny do listy
let $ulList;// nasza lista zadań, tagi <ul></ul>
let $newTask;
let $popup;
let $popupInfo;
let $editedTodo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

// pobieramy nasze elementy
const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
};

// nadajemy nasłuchiwanie
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $addBtn.addEventListener('click', createToolsArea);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
};

const addNewTask = () => {
    if($todoInput.value !== "") {
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $ulList.appendChild($newTask);
        $todoInput.value = '';
        $alertInfo.innerText = '';
    } else {
        $alertInfo.innerText = "Wpisz treść zadania";
    }
};

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    $newTask.appendChild(toolsPanel);
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    editBtn.innerHTML = 'EDIT';
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);
};

const checkClick = (e) => {
    if(e.target.closest('button').classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed');
    } else if(e.target.closest('button').className === 'edit') {
        editTask();
    } else if(e.target.closest('button').className === 'delete') {
        console.log('delete');
    }
};

const editTask = () => {
    $popup.style.display = 'flex';
};

const closePopup = () => {
    $popup.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', main);
