import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import indexScreen from "../screens/indexScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack=createNativeStackNavigator();
export default function IndexStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="index" component={indexScreen} options={{title:"Inicio"}} />
            <Stack.Screen name="loginS" component={LoginScreen} options={{title:"Iniciar sesión"}} />
            <Stack.Screen name="registerS" component={RegisterScreen} options={{title:"Registrarse"}} />
        </Stack.Navigator>
    )
}