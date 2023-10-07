import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomePage from "../pages/home/HomePage";

import {SCREENS} from "../helpers/constants";
import LoginPage from "../pages/home/LoginPage";
import SignUpPage from "../pages/home/SignUpPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const Nagivation= () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={SCREENS.HOME}>
                <Stack.Screen name={SCREENS.HOME} component={HomePage}/>
                <Stack.Screen name={SCREENS.LOGIN} component={LoginPage}/>
                <Stack.Screen name={SCREENS.SIGNUP} component={SignUpPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Nagivation