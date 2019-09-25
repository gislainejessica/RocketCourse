import React from 'react'
import './styles.css'

/* Stateless component (Comopenentes que não possuem uma logica tão apurada) 
    Podem ser reusado em outras partes da aplicação e 
    geralmente são usados para apresentar algo na tela: São burros, não sabe muito o que fazer, 
    só mostar  coisas que recebe e é isso aí. 
    Basicamente eles vão mostrar as coisinhas formatadas na tela.
    <=> Stateful 
*/

const Header = () => ( 
    <header id='main-header'> 
        Devs 
    </header>
);

export default Header