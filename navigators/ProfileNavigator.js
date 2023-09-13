import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Dishes from '../screens/Profile/Dishes';
import Reviews from '../screens/Profile/Reviews';
import Lists from '../screens/Profile/Lists';
import { COLORS } from '../constants';

const Tab = createMaterialTopTabNavigator();

function ProfileNavigator() {
    return (
            <Tab.Navigator
                initialRouteName={'Dishes'}
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarIndicatorStyle: {
                        backgroundColor: COLORS.primary,
                      },
                    tabBarInactiveTintColor: COLORS.secondary,
                    tabBarActiveTintColor: COLORS.primary,
                  }}
            >
                <Tab.Screen name="Dishes" options={{ tabBarLabel: 'Dishes' }}
                    component={Dishes} />
                <Tab.Screen name="Reviews" options={{ tabBarLabel: 'Reviews' }}
                    component={Reviews} />
                <Tab.Screen name="Lists" options={{ tabBarLabel: 'Lists' }}
                    component={Lists} />
            </Tab.Navigator>
    )
}

export default ProfileNavigator;
