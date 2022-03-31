
function funcaoContrutora() {
    
    const inputTarefa = document.querySelector("input[type='text']");
    const divTodoList = document.querySelector('.todo__list')
    const arrayObj = JSON.parse(localStorage.getItem("Tarefa")) || []
    
    arrayObj.forEach((element, index) =>  {
        
        element.id = index;
        criaElemento(element)
    });


    capturaTarefa()
    apagarTarefa()

    function capturaTarefa(){

        window.addEventListener('keyup', e => {

            e.preventDefault();

            if (e.key === 'Enter' && inputTarefa.value !== '') {

                const obj = {'tarefa': inputTarefa.value};
                criaObj(obj);
                limpaCampo();
                apagarTarefa();
            }
        })
    }

    function criaObj(tarefa) {
       
        criaElemento(tarefa)
        arrayObj.push(tarefa);
        localStorage.setItem("Tarefa", JSON.stringify(arrayObj));
    }

    function criaElemento(element) {

        divTodoList.innerHTML += `
        <label class="todo__item" id='${element.id}'>
            <input type="checkbox">
            <div>${element.tarefa}</div>
            <input type="button" value="X">
        </label>
    `
    } 

    function apagarTarefa() { 

        const arrayButton = document.querySelectorAll("input[type='button']")
        
        arrayButton.forEach(button => {

            button.addEventListener('click', ( ) => {
                
                
                const itemExluido = button.parentNode;
                const id = +itemExluido.getAttribute('id');

                arrayObj.splice(arrayObj.findIndex(element => element.id === id), 1)   
                itemExluido.remove();  
                
                localStorage.setItem("Tarefa", JSON.stringify(arrayObj));
            })

        })


    
    }    

    function limpaCampo(){

        return inputTarefa.value = '';
    }
};

funcaoContrutora();

