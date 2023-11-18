import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StringsContext} from '../../store/Strings';
import {DataContext} from '../../store/Data';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SelectList} from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';

const RecordScreen = () => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);

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
          <Text style={{fontSize: 24, fontWeight: 'bold'}}> </Text>
        </View>

        <View style={{backgroundColor: 'ghostwhite', height: '100%'}}>
          <ScrollView
            style={{
              backgroundColor: 'ghostwhite',
              height: Data.screenHeight - 210,
              width: Data.screenWidth,
              position: 'absolute',
            }}></ScrollView>
          <Toast />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecordScreen;
