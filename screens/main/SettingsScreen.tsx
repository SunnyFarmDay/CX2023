import {
  View,
  Text,
  ScrollView,
  Switch,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {DataContext} from '../../store/Data';
import {StringsContext} from '../../store/Strings';
import Toast from 'react-native-toast-message';
import {
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 150,
            marginTop: Platform.OS === 'android' ? 50 : 0,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <UserCircleIcon color={'grey'} size={150} />
          <View></View>
          <Toast />
        </View>
        <View style={{height: '100%'}}>
          <ScrollView
            style={{
              backgroundColor: 'ghostwhite',
              height: Data.screenHeight - 210,
              width: Data.screenWidth,
              position: 'absolute',
              flexDirection: 'column',
              borderTopRightRadius: 60,
              borderTopLeftRadius: 60,
            }}>
            {/* <Text style={{alignSelf:'center'}}>{Str.version}: 2023041701</Text> */}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
