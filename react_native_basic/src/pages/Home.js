import React, {useEffect, useState} from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import api from '../services/api'

/**     {_id:'0000', title:"Camundongo", description:"Rato", url:"http", createAt:"hoje"},
        {_id:'0001', title:"Voa", description:"Macaco", url:"https", createAt:"Amanhã"}, 
        {_id:'0002', title:"Pula", description:"Formiga", url:"httpw", createAt:"depois"},
        {_id:'0003', title:"Corredor", description:"Gato", url:"httpt", createAt:"agora"},
        {_id:'0004', title:"Animal", description:"Cachorro", url:"httpe", createAt:"futuro"},
 */

function Home(props){
    const [docs, setProducts] = useState([ ]);
    const [producInfo, setInfo] = useState({})
    const [page, setPage] = useState(1)

    useEffect( () => {
        carregarProdutos()
    },[])

    carregarProdutos = async (page = 1) => {
        const resposta = await api.get(`/products?page=${page}`)
        const dados = resposta.data.docs
        //const  { docs, ...info} = resposta.data
        setProducts([...docs, ...dados]) // {docs: [...produtos, ...docs]
        //setInfo(productInfo)
        setPage(page)
        console.log(dados, page)
    }
   renderItens =  ({item}) => (
       <View style = {styles.produtoContainer}>
            <Text style = {styles.produtoTitulo}> {item.title}</Text>
            <Text style = {styles.produtoDesc}> {item.description}</Text>
            <TouchableOpacity 
                style = {styles.produtoBotao} 
                onPress={()=>{
                    props.navigation.navigate('Produto', { produto: item })
                }}>
                <Text style = {styles.produtoBotaoTexto}> Acessar </Text>
            </TouchableOpacity>
        </View> 
    )
    carregaMais = () => {
        if (page === producInfo.pages) return
        const pageNumber = page + 1
        carregarProdutos(pageNumber)
    } 
    return(
        <View style ={styles.container} >
            <FlatList 
                contentContainerStyle = {styles.list}
                data = { docs }
                keyExtractor = { item => item._id }
                renderItem = { renderItens} 
                onEndReached = { carregaMais }
                onEndReachedThreshold = {0.1}
            />  
        </View>
    )}


export default Home;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fafafa',
        flex:1
    },
    list:{
        padding:20
    },
    produtoContainer:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor: '#DDD',
        borderRadius:5,
        padding:20,
        marginBottom:20
    },
    produtoTitulo:{
        fontSize:18,
        fontWeight:'bold',
        color:'#333'
    },
    produtoDesc:{
        fontSize:16,
        color:'#999',
        marginTop: 5,
        lineHeight: 24

    },
    produtoBotao:{
        height: 42,
        borderRadius:5,
        borderWidth:2,
        borderColor:'#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10        
    },
    produtoBotaoTexto:{
        fontSize:16,
        color:'#DA552F',
        fontWeight: 'bold'
    }
})
