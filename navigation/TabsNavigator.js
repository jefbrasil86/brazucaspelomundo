import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Telas associadas às abas
import HomeScreen from '../screens/HomeScreen';
import CidadeScreen from '../screens/CidadeScreen';
import TimeScreen from '../screens/TimeScreen';
import AdminScreen from '../screens/AdminScreen';
import LogoutScreen from '../screens/LogoutScreen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#FFD700',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Cidades') iconName = 'business';
          else if (route.name === 'Times') iconName = 'people';
          else if (route.name === 'Administração') iconName = 'settings';
          else if (route.name === 'Sair') iconName = 'log-out';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cidades" component={CidadeScreen} />
      <Tab.Screen name="Times" component={TimeScreen} />
      <Tab.Screen name="Administração" component={AdminScreen} />
      <Tab.Screen name="Sair" component={LogoutScreen} />
    </Tab.Navigator>
  );
}