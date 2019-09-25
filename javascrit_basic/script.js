// Javascript Conceitos básicos
// Refrenciando os elementos da dom para fazer as inserções no html
var inputElement = document.querySelector('#app input')
var listaElement = document.querySelector('#app ul')
var buttonElement = document.querySelector('#app button')
var todos = JSON.parse(localStorage.getItem('listTodos')) || []
var todos2 = ['Café é bom demais','Mas chá também é good','Deixe de onde, agua é o que há',]

function renderTodos(){
    listaElement.innerHTML = ''
    for(todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', "#")

        var linkText= document.createTextNode('Excluir')
        linkElement.appendChild(linkText) 

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')') 

        todoElement.appendChild(todoText)
        listaElement.appendChild(todoElement)
        todoElement.appendChild(linkElement)

    }
}
renderTodos()

function addTodo(){
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos() 
    saveToStorage()
}
buttonElement.onclick = addTodo

function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}
function saveToStorage(){
    localStorage.setItem('listTodos', JSON.stringify(todos))
}
// Ajax: requisição assincrona  requisitar sem precisar atualizar a pagina (Api do github)
var vhr = new XMLHttpRequest()
vhr.open('GET','https://api.github.com/users/gislainejessica')
vhr.send(null)

vhr.onreadystatechange = function(){
    if (vhr.readyState == 4){
        console.log(JSON.parse(vhr.responseText))
    }
}
// Promises conceitos iniciais
var minhaPromisse = function(){
    return new Promise(function(resolve, reject){
        var vhr = new XMLHttpRequest()
        vhr.open('GET','https://api.github.com/users/gislainejessica')
        vhr.send(null)

        vhr.onreadystatechange = function(){
            if (vhr.readyState === 4){
                if (vhr.status === 200){
                    resolve(JSON.parse(vhr.responseText))
                }else{
                    reject("Deu ruim na requisição")
                }
            }
        }
    })
}
// Inicializar a promisse
minhaPromisse()
.then(function(response){
    console.log(response)
})
.catch(function(erro){
    console.warn(erro)
})
// Axios
axios.get('https://api.github.com/users/gislainejessica')
.then(function(response){
    console.log(response)
})
.catch(function(erro){
    console.warn(erro)
})