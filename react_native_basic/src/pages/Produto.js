import React from 'react'
import { WebView } from 'react-native-webview'
// WebView renderizar uma pagina web dentro do app 
// (Browser dentro da aplicação => Experiencia de navegador sem sair do app)
function Produto({navigation}) {
    return (
        <WebView source = {{uri: navigation.state.params.produto.url}} />
)}

Produto.navigationOptions = ({navigation}) => ({
    title: navigation.state.params.produto.title
})

export default Produto
