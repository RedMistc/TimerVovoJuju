import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Main from '../pages/Main'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Main"
                component={Main}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}