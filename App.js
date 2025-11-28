import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import NewsWebViewScreen from './screens/NewsWebViewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: "Últimas Notícias" }}
        />

        <Stack.Screen 
          name="NewsDetail"
          component={NewsDetailScreen}
          options={{ title: "Notícia" }}
        />

        <Stack.Screen 
          name="NewsWebView"
          component={NewsWebViewScreen}
          options={{ title: "Ler notícia completa" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
