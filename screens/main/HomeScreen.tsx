import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StringsContext} from '../../store/Strings';
import {DataContext} from '../../store/Data';
import Logout from '../../components/Logout';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {PieChart} from 'react-native-chart-kit';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const HomeScreen = ({navigation}) => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);

  // React.useEffect(() => {
  //   const reload = navigation.addListener('focus', () => {
  //     getRecordFunction()
  //   });
  //   return reload;
  // }, [navigation]);

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

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'column',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 0.3,
            borderColor: 'black',
            marginTop: Platform.OS === 'android' ? 30 : 0,
            padding: 10,
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
          <ScrollView
            style={{
              backgroundColor: 'ghostwhite',
              height: Data.screenHeight - 210,
              width: Data.screenWidth,
              position: 'absolute',
            }}
            showsVerticalScrollIndicator={false}></ScrollView>
          <Toast />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
