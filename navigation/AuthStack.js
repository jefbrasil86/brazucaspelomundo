import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas principais
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import HomeScreen from '../screens/HomeScreen';
import CidadeScreen from '../screens/CidadeScreen';
import AdminScreen from '../screens/AdminScreen';
import TabsNavigator from './TabsNavigator';

// Telas das cidades
import RomaScreen from '../screens/cidades/RomaScreen';
import MilanoScreen from '../screens/cidades/MilaoScreen';
import BergamoScreen from '../screens/cidades/BergamoScreen';

// Telas dos times
import BrazucasOver40Screen from '../screens/times/BrazucasOver40Screen';
import BrazucasMundialOver40Screen from '../screens/times/BrazucasMundialOver40Screen';
import BrazucasMilaoScreen from '../screens/times/BrazucasMilaoScreen';
import BrazucasFutebolAlegriaBergamoScreen from '../screens/times/BrazucasFutebolAlegriaBergamoScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {/* Login inicial */}
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* Navegação principal com abas */}
      <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />

      {/* Telas extras individuais */}
      <Stack.Screen name="Logout" component={LogoutScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cidades" component={CidadeScreen} />
      <Stack.Screen name="Administração" component={AdminScreen} />

      {/* Cidades */}
      <Stack.Screen name="Roma" component={RomaScreen} />
      <Stack.Screen name="Milão" component={MilanoScreen} />
      <Stack.Screen name="Bergamo" component={BergamoScreen} />

      {/* Times */}
      <Stack.Screen name="BrazucasOver40" component={BrazucasOver40Screen} />
      <Stack.Screen name="BrazucasMundialOver40" component={BrazucasMundialOver40Screen} />
      <Stack.Screen name="BrazucasMilao" component={BrazucasMilaoScreen} />
      <Stack.Screen name="BrazucasFutebolAlegriaBergamo" component={BrazucasFutebolAlegriaBergamoScreen} />
    </Stack.Navigator>
  );
}