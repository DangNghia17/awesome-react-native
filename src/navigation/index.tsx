import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomePage from "../pages/home/HomePage";

import {SCREENS} from "../helpers/constants";
import LoginPage from "../pages/home/LoginPage";
import SignUpPage from "../pages/home/SignUpPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MessagePage from "../pages/bottomTab/MessagePage";
import ProfilePage from "../pages/bottomTab/ProfilePage";
import SettingsPage from "../pages/bottomTab/SettingsPage";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BottomTabNavigator from "./bottomNavigator";
import DetailPage from "../pages/detail/DetailPage";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const Nagivation= () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={SCREENS.HOME}>
                <Stack.Screen name={SCREENS.HOME} component={HomePage}/>
                <Stack.Screen name={SCREENS.LOGIN} component={LoginPage}/>
                <Stack.Screen name={SCREENS.SIGNUP} component={SignUpPage}/>
                <Stack.Screen name={SCREENS.DETAIL} component={DetailPage}/>
                <Stack.Screen name={SCREENS.MESSAGE} component={BottomTabNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Nagivation
