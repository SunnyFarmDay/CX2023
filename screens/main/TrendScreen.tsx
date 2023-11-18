import {View, Text, SafeAreaView, ScrollView, Platform} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StringsContext} from '../../store/Strings';
import {DataContext} from '../../store/Data';
import {LineChart} from 'react-native-chart-kit';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ExclamationCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from 'react-native-heroicons/outline';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  fromZero: true,
  propsForLabels: {
    fontSize: 9,
  },
};

const TrendScreen = ({navigation}) => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            borderBottomWidth: 0.3,
            borderColor: 'black',
            marginTop: Platform.OS === 'android' ? 50 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}></Text>
        </View>
        <View style={{backgroundColor: 'ghostwhite', height: '100%'}}>
          <Toast />
          <ScrollView
            style={{
              backgroundColor: 'ghostwhite',
              height: Data.screenHeight - 210,
              width: Data.screenWidth,
              position: 'absolute',
            }}></ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TrendScreen;
