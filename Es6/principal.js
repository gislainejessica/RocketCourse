class List{
    constructor(){
        this.todos = []
    }
    add(data){
        this.todos.push(data)
        console.log(this.todos)
    }
}

class TodoList extends List{
   constructor(){
    super() 
    this.usuario = "Jéssica"
  }
   mostrarUsuario(){
       console.log(this.usuario)
   }
}
// Classe estatica
class Mathe{
    constructor(){
        this.operacoes = []
    }
    static add(a, b){
        return a + b
    }
}

const minhaLista = new TodoList()
document.getElementById("novoTodo").onclick = function(){
    minhaLista.add("Novo Todo")
}
//minhaLista.mostrarUsuario()

// Const Let Var
/** 
 * map, reduce, filter, find
 */
// Desestruturação
const pessoa = {
    nome: 'Jessica',
    idade: 30,
    endereco:{
        rua:'Costa Rica',
        numero: 700
    }
}
const {nome , idade, endereco:{numero}} = pessoa
console.log(nome, idade, numero)
// operadores rest e sprad
/** Rest é um operadodor para pegar o resto de um objeto */
//const {nome, ...resto} = pessoa
const a = [1]
const b = [2]
// Pega tudo da a e tudo de b
//const[...a, ...b]
//const pessoanova = {...pessoa, nome:'Gislaine'}

/** Wepack: serviço que vai disponibilizar e permitir que a aplicação tenha varias pastas com arquivos js dentro outros
 * que serão transpilados para 
 * o mesmo bundle
 */