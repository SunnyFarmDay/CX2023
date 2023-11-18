import React, { useContext, useEffect, useState } from 'react';
import { View, Image, StyleSheet, Button, ScrollView, Text, TouchableOpacity } from 'react-native';
import { DataContext } from '../store/Data';
import HomeScreen from './main/HomeScreen'
import CalendarScreen from './main/CalendarScreen'
import RecordScreen from './main/RecordScreen'
import TrendScreen from './main/TrendScreen'
import SettingsScreen from './main/SettingsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CalendarIcon, ChartBarIcon, HomeIcon, PlusIcon, WrenchIcon } from 'react-native-heroicons/outline';
import { StringsContext } from '../store/Strings';

const BottomTab = createBottomTabNavigator();

function CustomTabBarButton({children, onPress}) {
  
  return(
    <TouchableOpacity
    style={{
      top: -15,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}>
  
      <View style={{
        width: 80,
        height: 80,
        borderRadius: 35,
        backgroundColor: 'red'
      }}>
        {children}
      </View>
  
    </TouchableOpacity>
  )
}

const MainScreen = () => {

  const Str = useContext(StringsContext)
        
    return (
        <BottomTab.Navigator screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20, 
            right: 20,
            backgroundColor: 'white',
            borderRadius: 15,
            height: 90,
            ...styles.shadow
          }
        }}>
          <BottomTab.Screen name="Home" component={HomeScreen} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{marginTop: 20, alignItems: 'center', flex: 1,width: 100,justifyContent: 'center'}}>
                <HomeIcon color={focused?'#1e90ff':'#748c94'} size={35}/>
                <Text style={{color: focused?'#1e90ff':'#748c94', fontSize: 12}}>{Str.main_home.toUpperCase()}</Text>
              </View>
            ),
          }}/>
          <BottomTab.Screen name="Calendar" component={CalendarScreen} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{marginTop: 20, alignItems: 'center', flex: 1,width: 100,justifyContent: 'center'}}>
                <CalendarIcon color={focused?'#1e90ff':'#748c94'} size={35}/>
                <Text style={{color: focused?'#1e90ff':'#748c94', fontSize: 12}}>{Str.main_cal.toUpperCase()}</Text>
              </View>
            ),
          }}/>
          <BottomTab.Screen name="Record" component={RecordScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <PlusIcon color={'white'} size={60}/>
            ),
            tabBarButton: (props) => (
              <CustomTabBarButton {...props} />
            )
          }}
          />
          <BottomTab.Screen name="Trend" component={TrendScreen} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{marginTop: 20, alignItems: 'center', flex: 1,width: 100,justifyContent: 'center'}}>
                <ChartBarIcon color={focused?'#1e90ff':'#748c94'} size={35}/>
                <Text style={{color: focused?'#1e90ff':'#748c94', fontSize: 12}}>{Str.main_trend.toUpperCase()}</Text>
              </View>
            ),
          }}/>
          <BottomTab.Screen name="Settings" component={SettingsScreen} options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{marginTop: 20, alignItems: 'center', flex: 1, width: 100,justifyContent: 'center'}}>
                <WrenchIcon color={focused?'#1e90ff':'#748c94'} size={35}/>
                <Text style={{color: focused?'#1e90ff':'#748c94', fontSize: 12}}>{Str.main_settings.toUpperCase()}</Text>
              </View>
            ),
          }}/>
        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow :{
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  }
});

export default MainScreen;