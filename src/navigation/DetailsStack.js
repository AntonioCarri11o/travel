import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import detailsScreen from '../screens/detailsScreen';
import IndexStack from '../navigation/IndexStack';
import LoginScreen from '../screens/LoginScreen';
const Stack=createNativeStackNavigator();
export default function DetailsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="details"
            component={detailsScreen} options={{title:"Detalles"}} />
        </Stack.Navigator>
    )
}