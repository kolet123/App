import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import AccountRecoveryPage from './components/AccountRecoveryPage';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomePage} />
    <HomeStack.Screen name="AboutUs" component={AboutUs} />
    <HomeStack.Screen name="ContactUs" component={ContactUs} />
  </HomeStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LandingPage">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="LandingPage" component={LandingPage} />
        <Drawer.Screen name="Login" component={LoginPage} />
        <Drawer.Screen name="Registration" component={RegistrationPage} />
        <Drawer.Screen name="AccountRecovery" component={AccountRecoveryPage} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
