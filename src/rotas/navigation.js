import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../paginas/Home';
import Login from '../paginas/Login';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes () {
    return(
        <Tab.Navigation>
            <Tab.Screen name='Tab' component={ListaPets} />
            <Tab.Screen name='Mensagem' component={Mensagem} />
        </Tab.Navigation>
    )
};

export default function Navigation(){
    return(
        <NavigationContainer>
            //conseguimos colocar o screenOptoins direto no screen da tela desejavel.
            <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                headerTitle: '',
                headreShown: false,
            }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Login' component={Login} />
                // Stack.Screen para podermos usar a barra de navegação TabRoutes dento do NavigationContainer
                <Stack.Screen name='Tab' component={TabRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
