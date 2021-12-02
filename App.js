import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Favourites from './screens/Favourites';
import Home from './screens/Home';
import User from './screens/User';
import Prices from './screens/Prices';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
  
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: "black" },
        })}>
          <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: (tabInfo) => (
                <Ionicons
                  name="md-home"
                  size={tabInfo.focused ? 26 : 20}
                  color={"white"}
                />
              ),
            }} />
          <Tab.Screen 
            name="Prices" 
            component={Prices}
            options={{
              tabBarLabel: 'Prices',
              tabBarIcon: (tabInfo) => (
                <Ionicons
                  name="stats-chart-outline"
                  size={tabInfo.focused ? 26 : 20}
                  color={"white"}
                />
              ),
            }}/>
          <Tab.Screen 
            name="Favourites" 
            component={Favourites}
            options={{
              tabBarLabel: 'Favourites',
              tabBarIcon: (tabInfo) => (
                <Ionicons
                  name="star-outline"
                  size={tabInfo.focused ? 26 : 20}
                  color={"white"}
                />
              ),
            }}/>
          <Tab.Screen 
            name="User" 
            component={User}
            options={{
              tabBarLabel: 'User',
              tabBarIcon: (tabInfo) => (
                <Ionicons
                  name="md-person-circle-outline"
                  size={tabInfo.focused ? 26 : 20}
                  color={"white"}              
                />
              ),
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}