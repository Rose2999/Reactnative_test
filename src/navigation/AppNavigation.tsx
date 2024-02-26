import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginMain from '../sreens/loginmain';
import InstaHomeScreen from '../sreens/InstaHomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Page2 from '../sreens/Pages/Page2';
import Page4 from '../sreens/Pages/Page4';
import Page3 from '../sreens/Pages/Page3';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StackNav = createNativeStackNavigator();
const BottomNav = createBottomTabNavigator();
export function HomeStackNavigation() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="LoginScreen"
        component={LoginMain}
        options={{
          headerShown: false,
        }}
      />

      <StackNav.Screen
        name="InstaHome"
        component={BottomStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
}
export function BottomStackNavigator() {
  return (
    <BottomNav.Navigator>
      <BottomNav.Screen
        name="Home"
        component={InstaHomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        }}
      />

      <BottomNav.Screen
        name="Bell"
        component={Page2}
        options={{
          headerShown: false,
          tabBarLabel: 'Bell',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        }}
      />

      <BottomNav.Screen
        name="Settings"
        component={Page3}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        }}
      />
      <BottomNav.Screen
        name="Profile"
        component={Page4}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        }}
      />
    </BottomNav.Navigator>
  );
}
