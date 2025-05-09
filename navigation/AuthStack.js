import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas principais
import LoginScreen from '../screens/LoginScreen';
import TabsNavigator from './TabsNavigator';

// Telas das cidades
import RomaScreen from '../screens/cidades/RomaScreen';
import MilaoScreen from '../screens/cidades/MilaoScreen';
import BergamoScreen from '../screens/cidades/BergamoScreen';

// Telas dos times
import BrazucasOver40Screen from '../screens/times/BrazucasOver40Screen';
import BrazucasMundialOver40Screen from '../screens/times/BrazucasMundialOver40Screen';
import BrazucasMilaoScreen from '../screens/times/BrazucasMilaoScreen';
import BrazucasFutebolAlegriaBergamoScreen from '../screens/times/BrazucasFutebolAlegriaBergamoScreen';

// Telas de eventos
import AgendaScreen from '../screens/eventos/AgendaScreen';
import EventosBergamoScreen from '../screens/eventos/EventosBergamoScreen';
import EventosMilaoScreen from '../screens/eventos/EventosMilaoScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {/* Login */}
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* Navegação principal com Tabs */}
      <Stack.Screen name="Tabs" component={TabsNavigator} />

      {/* Cidades */}
      <Stack.Screen name="Roma" component={RomaScreen} />
      <Stack.Screen name="Milao" component={MilaoScreen} />
      <Stack.Screen name="Bergamo" component={BergamoScreen} />

      {/* Times */}
      <Stack.Screen name="BrazucasOver40" component={BrazucasOver40Screen} />
      <Stack.Screen name="BrazucasMundialOver40" component={BrazucasMundialOver40Screen} />
      <Stack.Screen name="BrazucasMilao" component={BrazucasMilaoScreen} />
      <Stack.Screen name="BrazucasFutebolAlegriaBergamo" component={BrazucasFutebolAlegriaBergamoScreen} />

      {/* Agenda e Eventos */}
      <Stack.Screen name="Agenda" component={AgendaScreen} />
      <Stack.Screen name="EventosBergamo" component={EventosBergamoScreen} />
      <Stack.Screen name="EventosMilao" component={EventosMilaoScreen} />
    </Stack.Navigator>
  );
}