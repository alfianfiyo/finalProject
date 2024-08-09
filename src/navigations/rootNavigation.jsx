import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/login'
import Cart from '../screens/cart'
import History from '../screens/history'
import HomeNavigation from './HomeNavigation'
import Map from '../screens/map'
import Menu from '../screens/menu'

const Stack = createStackNavigator();
export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='HomeNav' component={HomeNavigation}></Stack.Screen>
        {/* <Stack.Screen name='Cart' component={Cart}></Stack.Screen> */}
        {/* <Stack.Screen name='History' component={History}></Stack.Screen> */}
        {/* <Stack.Screen name='Map' component={Map}></Stack.Screen> */}
        {/* <Stack.Screen name='Menu' component={Menu}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}