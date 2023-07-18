const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const totalList = document.querySelector('.list-task')
let myList = []


function addList(){
    myList.push({
      ask: input.value,
      complete: false,
    })
    input.value = ''
    showList()
}

function showList(){
    let newLi = ''

    myList.forEach((item, position) => {
        newLi = newLi + 
        `
        <li class="task ${item.complete && 'done'}">
        <img src="./img/check.png" alt="finalizar-tarefa" onclick="checkItem(${position})">
        <p>${item.ask}</p>
        <img src="./img/trash.png" alt="apagar-tarefa" onclick="deleteItem(${position})">
        </li>

        `
    })

    totalList.innerHTML = newLi
    localStorage.setItem('box', JSON.stringify(myList))
}

function checkItem(position){
    myList[position].complete = !myList[position].complete
    showList()
}

function deleteItem(position){
    myList.splice(position, 1)
    showList()
}

function recharge(){
    const taskLocalStorage = localStorage.getItem('box')
    if(taskLocalStorage){
        myList = JSON.parse(taskLocalStorage)
    }
    showList()
}

recharge()
button.addEventListener('click', addList)

