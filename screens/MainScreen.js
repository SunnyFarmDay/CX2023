import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {DataContext} from '../store/Data';
import HomeScreen from './main/HomeScreen';
import CalendarScreen from './main/CalendarScreen';
import RecordScreen from './main/RecordScreen';
import TrendScreen from './main/TrendScreen';
import SettingsScreen from './main/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CalendarIcon,
  ChartBarIcon,
  HomeIcon,
  PlusIcon,
  WrenchIcon,
} from 'react-native-heroicons/outline';
import {StringsContext} from '../store/Strings';
import SideBar from '../components/SideBar';

const BottomTab = createBottomTabNavigator();

function CustomTabBarButton({children, onPress}) {
  return (
    <TouchableOpacity
      style={{
        top: -15,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 35,
          backgroundColor: 'rgb(38,92,98)',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

const MainScreen = () => {
  const Str = useContext(StringsContext);
  const setOpenSideBar = useContext(DataContext).setOpenSideBar;
  const openSideBar = useContext(DataContext).openSideBar;

  return (
    <View style={{flex: 1, position: 'relative'}}>
      {openSideBar ? <SideBar /> : null}

      <BottomTab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            backgroundColor: 'white',
            borderRadius: 15,
            height: 90,
            display: 'none',
            ...styles.shadow,
          },
        }}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Record"
          component={RecordScreen}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Trend"
          component={TrendScreen}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default MainScreen;
