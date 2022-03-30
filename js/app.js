const inputTarefa = document.querySelector("input[type='text']")
const divTodoList = document.querySelector('.todo__list')

function criaTodoList(){
    
    window.addEventListener('keyup', e =>{
        
        
        if(e.key === 'Enter'){

            divTodoList.innerHTML += `
                <label class="todo__item">
                    <input type="checkbox">
                    <div>${inputTarefa.value}</div>
                    <input type="button" value="X">
                </label>
            `
            limpaInput()
            apagarTarefa()
        }
        
        
    })
}

function limpaInput() {
    
    return inputTarefa.value = ''
}

criaTodoList();  

function apagarTarefa() { 


    const arrayButton = document.querySelectorAll("input[type='button']")

    arrayButton.forEach(button => {
        button.addEventListener('click', () => {
            button.parentNode.remove();
        })
    })

}