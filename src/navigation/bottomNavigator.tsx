import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsPage from '../pages/bottomTab/SettingsPage';
import ProfilePage from '../pages/bottomTab/ProfilePage';
import MessagePage from "../pages/bottomTab/MessagePage";
import {SCREENS} from "../helpers/constants";
import {Image} from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name={SCREENS.MESSAGE} component={MessagePage}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Image
                                source={require('../assets2/message-solid.png')}
                                style={{width: 20, height: 20, tintColor: color}}
                            />
                        ),
                    }}/>
        <Tab.Screen name={SCREENS.PROFILE} component={ProfilePage}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Image
                                source={require('../assets2/id-badge-solid.png')}
                                style={{width: 20, height: 20, tintColor: color}}
                            />
                        ),
                    }}/>
        <Tab.Screen name={SCREENS.SETTINGS} component={SettingsPage}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Image
                                source={require('../assets2/gear-solid.png')}
                                style={{width: 20, height: 20, tintColor: color}}
                            />
                        ),
                    }}/>
    </Tab.Navigator>
);

export default BottomTabNavigator;
