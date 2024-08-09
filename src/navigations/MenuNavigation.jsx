import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Menu from '../screens/menu'
import Map from '../screens/map'
import { TouchableOpacity,Text } from 'react-native'

const Stack = createStackNavigator();

export default function RootHomeNavigation() {
  return (
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name='Menu' component={Menu}></Stack.Screen>
        <Stack.Screen name='Map' component={Map}></Stack.Screen>
        {/* <Stack.Screen name='Home' component={Home} 
            options={({navigation}) => ({
                headerRight: () => ( <TouchableOpacity onPress={() => navigation.navigate('Order History')}  style={{ alignItems:'center' , backgroundColor:'#008CBA', padding:10, borderRadius:5}}><Text style={{ color:'white' }}>History</Text></TouchableOpacity>), 
                // headerLeft: () => null,
                headerRightContainerStyle:{marginEnd:20}
            })}>    
        </Stack.Screen>
        <Stack.Screen name='Order History' component={History}></Stack.Screen> */}
      </Stack.Navigator>
  )
}