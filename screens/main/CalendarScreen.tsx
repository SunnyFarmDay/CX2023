import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StringsContext} from '../../store/Strings';
import {DataContext} from '../../store/Data';
import Calendar from 'react-native-calendars/src/calendar';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalendarScreen = ({navigation}) => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  function checkTimestamp(timestamp, selected) {
    const date = new Date(selected);
    const dateTimestamp = date.getTime() / 1000;

    const tsdate = new Date(timestamp * 1000);
    const tsyear = tsdate.getFullYear();
    const tsmonth = `0${tsdate.getMonth() + 1}`.slice(-2);
    const tsday = `0${tsdate.getDate()}`.slice(-2);
    const tsDate = new Date(tsyear + '-' + tsmonth + '-' + tsday);
    const tsDateTimestamp = tsDate.getTime() / 1000;

    if (tsDateTimestamp !== dateTimestamp) {
      return false;
    }
    return true;
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 0.3,
            borderColor: 'black',
            marginTop: Platform.OS === 'android' ? 50 : 0,
          }}>
          <Text
            style={{fontSize: 22, fontWeight: 'bold', color: 'rgb(38,92,98)'}}>
            Cathay Connect
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: 'grey'}}>
            • Empower Your Finances
          </Text>
        </View>
        <View style={{backgroundColor: 'ghostwhite', height: '100%'}}>
          <View
            style={{
              backgroundColor: 'ghostwhite',
              height: Data.screenHeight - 210,
              width: Data.screenWidth,
              position: 'absolute',
            }}></View>
          <Toast />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;
