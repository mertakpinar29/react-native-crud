import React from 'react'
import { View, Text } from 'react-native'
import UpdateScreen from './UpdateScreen'
import Feed from './Feed'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='Feed' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Feed' component={Feed} />
            <Stack.Screen name='Update' component={UpdateScreen} />
        </Stack.Navigator>
    )
}

export default HomeScreen
