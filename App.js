import React, { useState, useEffect } from 'react';
import { View, Text, Button, Dimensions, SafeAreaView } from 'react-native';
import WelcomeScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import DataProvider from './store/Data';
import StringsProvider from './store/Strings';
import AppNavigator from './navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Spentiv = () => {

  return (
      <DataProvider>
        <StringsProvider>
        <NavigationContainer>
          <AppNavigator/>
          <StatusBar style="auto" />
        </NavigationContainer>
        </StringsProvider>
      </DataProvider>

  );
};

export default Spentiv;
