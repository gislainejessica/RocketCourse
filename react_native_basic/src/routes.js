import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './pages/Home'
import Produto from './pages/Produto'

const Rotas =  createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: () => ({
            title: 'Home Sweet Home',
            headerStyle:{
                backgroundColor:'#DA552F'
            },
            headerTintColor: "#fff"
        })
    },
    Produto:{
        screen: Produto,
        navigationOptions: () => ({
            headerStyle:{
                backgroundColor:'#DA552F'
            },
            headerTintColor: "#fff"
        })
    }
});


export default createAppContainer(Rotas)