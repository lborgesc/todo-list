const getDatabase = () => JSON.parse(localStorage.getItem('todoList')) || [];
const setDatabase = ( database ) => localStorage.setItem('todoList', JSON.stringify(database));

const createItem = ( text, status, index ) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-index = ${index}>
        <div>${text}</div>
        <input type="button" value="X" data-index = ${index}>
    `
    document.getElementById('todoList').appendChild(item);
}

const clearTask = ( ) => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}
 
const renderScreen = ( ) => {
    clearTask(); 
    const database = getDatabase();
    database.forEach((data, index) => createItem(data.tarefa, data.status, index));
}


const insertItem = ( event ) => {
    const key = event.key;
    const text = event.target.value;

    if (key === 'Enter') {
        const database = getDatabase();
        database.push({tarefa: text, status: " "});
        setDatabase(database);
        renderScreen();
        event.target.value = '';
    }
}

const removeItem = ( index ) => {
    const database = getDatabase();
    database.splice(index, 1);
    setDatabase(database);
    renderScreen();
}

const updateItem = ( index ) => {
    const database = getDatabase();
    database[index].status = database[index].status === '' ? 'checked' : '';
    setDatabase(database);
    renderScreen();
}

const clickItem = ( event ) => {
    const element = event.target;
    
    if (element.type === 'button') {
        const index = element.dataset.index;
        removeItem(index)
    }else if(element.type === 'checkbox'){
        const index = element.dataset.index;
        updateItem(index)
    }  
}
 
document.getElementById('newItem').addEventListener('keypress', insertItem);
document.getElementById('todoList').addEventListener('click', clickItem);

renderScreen()