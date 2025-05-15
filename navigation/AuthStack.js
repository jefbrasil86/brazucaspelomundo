import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import TabsNavigator from '../screens/TabsNavigator';

// Cidades
import RomaScreen from '../screens/cidades/RomaScreen';
import MilaoScreen from '../screens/cidades/MilaoScreen';
import BergamoScreen from '../screens/cidades/BergamoScreen';

// Times
import BrazucasOver40Screen from '../screens/times/BrazucasOver40Screen';
import BrazucasMundialOver40Screen from '../screens/times/BrazucasMundialOver40Screen';
import BrazucasMilaoScreen from '../screens/times/BrazucasMilaoScreen';
import BrazucasFutebolAlegriaBergamoScreen from '../screens/times/BrazucasFutebolAlegriaBergamoScreen';

// Eventos
import AgendaScreen from '../screens/eventos/AgendaScreen';
import EventosBergamoScreen from '../screens/eventos/EventosBergamoScreen';
import EventosMilaoScreen from '../screens/eventos/EventosMilaoScreen';
import EventosRomaScreen from '../screens/eventos/EventosRomaScreen';
import TorneiosScreen from '../screens/eventos/TorneiosScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={TabsNavigator} />

      {/* Cidades */}
      <Stack.Screen name="Roma" component={RomaScreen} />
      <Stack.Screen name="Milao" component={MilaoScreen} />
      <Stack.Screen name="Bergamo" component={BergamoScreen} />

      {/* Times */}
      <Stack.Screen name="BrazucasOver40" component={BrazucasOver40Screen} />
      <Stack.Screen name="BrazucasMundialOver40" component={BrazucasMundialOver40Screen} />
      <Stack.Screen name="BrazucasMilao" component={BrazucasMilaoScreen} />
      <Stack.Screen name="AlegriaBergamo" component={BrazucasFutebolAlegriaBergamoScreen} />

      {/* Eventos */}
      <Stack.Screen name="Agenda" component={AgendaScreen} />
      <Stack.Screen name="EventosBergamo" component={EventosBergamoScreen} />
      <Stack.Screen name="EventosMilao" component={EventosMilaoScreen} />
      <Stack.Screen name="EventosRoma" component={EventosRomaScreen} />
      <Stack.Screen name="Torneios" component={TorneiosScreen} />
    </Stack.Navigator>
  );
}