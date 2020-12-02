import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationIcon from '../../../assets/Notifications';
import NavIcon from '../../../assets/NavIcon';
import Auth from '../../screens/Auth/Auth';
import Verification from '../../screens/Verification/Verification';
import Profile from '../../screens/Profile/Profile';

const Stack = createStackNavigator();

export function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
                <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0,
                        boxShadow: { width: 0, height: 0 },
                        shadowColor: 'transparent'
                    },
                    headerTitle: () => (
                        <View />
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ padding: 8, margin: 8 }}>
                            <NavIcon />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity style={{ padding: 8, margin: 8 }}>
                            <NotificationIcon />
                        </TouchableOpacity>
                    )
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}