import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import CidadeScreen from './CidadeScreen';
import TimeScreen from './TimeScreen';
import AdminScreen from './AdminScreen';
import LogoutScreen from './LogoutScreen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          shadowColor: '#fff',
          shadowOffset: { width: 0, height: -5 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 6,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Cidades':
              iconName = 'location-outline';
              break;
            case 'Times':
              iconName = 'people-outline';
              break;
            case 'Administração':
              iconName = 'settings-outline';
              break;
            case 'Sair':
              iconName = 'log-out-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: 'gray',
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