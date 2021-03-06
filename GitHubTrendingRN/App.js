/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritePage from './js/page/FavoritePage';
import MyPage from './js/page/MyPage';
import PopularPage from './js/page/PopularPage';
import TrendingPage from './js/page/TrendingPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    switch (route.name) {
                        case 'PopularPage':
                            return (
                                <MaterialIcons name={'whatshot'} color={color} size={size}/>
                            )
                            break
                        case 'TrendingPage':
                            return (
                                <Ionicons name={'md-trending-up'} color={color} size={size}/>
                            )
                            break
                        case 'FavoritePage':
                            return (
                                <MaterialIcons name={'favorite'} color={color} size={size}/>
                            )
                            break
                        case 'MyPage':
                            return (
                                <Entypo name={'user'} color={color} size={size}/>
                            )
                            break
                    }
                },
            })}>
                <Tab.Screen name="PopularPage" component={PopularPage} options={{
                    title: '??????',
                    tabBarBadge: 3,
                }}/>
                <Tab.Screen name="TrendingPage" component={TrendingPage} options={{
                    title: '??????',
                }}/>
                <Tab.Screen name="FavoritePage" component={FavoritePage} options={{
                    title: '??????',
                }}/>
                <Tab.Screen name="MyPage" component={MyPage} options={{
                    title: '??????',
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
