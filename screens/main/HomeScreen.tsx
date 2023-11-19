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
  ImageBackground,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StringsContext} from '../../store/Strings';
import {DataContext} from '../../store/Data';
import Logout from '../../components/Logout';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from '../Constants';

import {PieChart} from 'react-native-chart-kit';
import LinkButton from '../../components/LinkButton';
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
  const setOpenSideBar = Data.setOpenSideBar;

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
        {/* <View
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
        </View> */}
        <View style={{backgroundColor: 'ghostwhite', height: '100%'}}>
          <ScrollView
            style={{
              backgroundColor: 'ghostwhite',
              height: '100%',
              width: Data.screenWidth,
              position: 'absolute',
            }}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 0,
                position: 'relative',
              }}>
              <Image
                source={require('../../assets/HomeScreen/HomeScreen_background_1.jpg')}
                style={{width: '100%', aspectRatio: 9 / 20}}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 5,
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
                onPress={() => setOpenSideBar(true)}
              />

              <View
                style={{
                  position: 'absolute',
                  top: 510,
                  left: 0,
                  width: '100%',
                  height: 215,
                  backgroundColor: 'white',
                  borderTopColor: 'grey',
                  borderTopWidth: 1,
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'semibold',
                    color: Colors.cathayGold,
                    position: 'absolute',
                    top: 20,
                    left: 20,
                  }}>
                  Cathay Badge
                </Text>
                <LinkButton
                  title="More details →"
                  onPress={() => {
                    navigation.navigate('Calendar');
                    Data.setBadgeScreen(0);
                  }}
                  styles={{
                    touch: {
                      position: 'absolute',
                      top: 14,
                      left: 285,
                      borderRadius: 10,
                      padding: 10,
                    },
                    buttonText: {
                      color: Colors.cathayGreen,
                      fontSize: 15,
                      fontWeight: 'semibold',
                    },
                  }}
                />

                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'semibold',
                    color: Colors.black,
                    position: 'absolute',
                    top: 60,
                    left: 20,
                  }}>
                  You have earned 3 badges
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'semibold',
                    color: Colors.black,
                    position: 'absolute',
                    top: 105,
                    left: 20,
                  }}>
                  Badges for you, Feels good to move!
                </Text>
              </View>
            </View>
            {/* <ImageBackground source={require('../../assets/HomeScreen/HomeScreen_background_1.jpg')} style={{width: 600, height: '100%'}}>
             <Text>Test</Text>
              </ImageBackground> */}
          </ScrollView>
          <Toast />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
