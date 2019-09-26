"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.todos = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.todos.push(data);
      console.log(this.todos);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = "Jéssica";
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostrarUsuario",
    value: function mostrarUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List); // Classe estatica


var Mathe =
/*#__PURE__*/
function () {
  function Mathe() {
    _classCallCheck(this, Mathe);

    this.operacoes = [];
  }

  _createClass(Mathe, null, [{
    key: "add",
    value: function add(a, b) {
      return a + b;
    }
  }]);

  return Mathe;
}();

var minhaLista = new TodoList();

document.getElementById("novoTodo").onclick = function () {
  minhaLista.add("Novo Todo");
}; //minhaLista.mostrarUsuario()
// Const Let Var

/** 
 * map, reduce, filter, find
 */
// Desestruturação


var pessoa = {
  nome: 'Jessica',
  idade: 30,
  endereco: {
    rua: 'Costa Rica',
    numero: 700
  }
};
var nome = pessoa.nome,
    idade = pessoa.idade,
    numero = pessoa.endereco.numero;
console.log(nome, idade, numero); // operadores rest e sprad

/** Rest é um operadodor para pegar o resto de um objeto */
//const {nome, ...resto} = pessoa

var a = [1];
var b = [2]; // Pega tudo da a e tudo de b
//const[...a, ...b]
//const pessoanova = {...pessoa, nome:'Gislaine'}

/** Wepack: serviço que vai disponibilizar e permitir que a aplicação tenha varias pastas com arquivos js dentro outros
 * que serão transpilados para 
 * o mesmo bundle
 */
