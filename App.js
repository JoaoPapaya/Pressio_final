import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReadingsProvider } from './src/data/ReadingsContext';
import TabsNavigator from './src/navigation/TabsNavigator';
import NovaLeituraScreen from './src/screens/NovaLeituraScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ReadingsProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" component={TabsNavigator} />
          <Stack.Screen
            name="NovaLeitura"
            component={NovaLeituraScreen}
            options={{ presentation: 'modal' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReadingsProvider>
  );
}
