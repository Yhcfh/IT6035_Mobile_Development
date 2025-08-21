import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './screens/LandingPage';
import ToysPage from './screens/ToysPage';
import ToyDetailsPage from './screens/ToyDetailsPage';
import ShoppingCartPage from './screens/ShoppingCartPage';

const Stack = createStackNavigator();

// Cart Context
export const CartContext = createContext();

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen name="LandingPage" component={LandingPage} options={{ title: 'Welcome' }} />
          <Stack.Screen name="ToysPage" component={ToysPage} options={{ title: 'Toys' }} />
          <Stack.Screen name="ToyDetailsPage" component={ToyDetailsPage} options={{ title: 'Toy Details' }} />
          <Stack.Screen name="ShoppingCartPage" component={ShoppingCartPage} options={{ title: 'Shopping Cart' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
}
