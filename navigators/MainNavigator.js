import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Search from '../screens/Search';
import Saved from '../screens/Saved';
import Profile from '../screens/Profile';
import Post from '../screens/Post';
import { COLORS } from '../constants';

function MainNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
            }}
        >
            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name='home' color={color}
                            size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Search'}
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name='search1' color={color}
                        size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Post'}
                component={Post}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name='plus-square' color={color}
                        size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Saved'}
                component={Saved}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='bookmark-o' color={color}
                            size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name={'Profile'}
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='user-o' color={color}
                            size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MainNavigator;