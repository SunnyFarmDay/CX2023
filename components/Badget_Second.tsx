import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StringsContext} from '../store/Strings';
import {DataContext} from '../store/Data';
import Calendar from 'react-native-calendars/src/calendar';
import Toast from 'react-native-toast-message';
import {
  CalendarIcon,
  ChartBarIcon,
  HomeIcon,
  PlusIcon,
  WrenchIcon,
  ArrowLeftIcon,
  ChevronLeftIcon,
} from 'react-native-heroicons/outline';
import BadgetType_First from './BadgetType_First';

const BadgetSecond = ({type}) => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);

  return (
    <ScrollView style={{height: '100%'}}>
      <View
        style={{
          backgroundColor: 'ghostwhite',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'ghostwhite',
            height: Data.screenHeight - 210,
            width: Data.screenWidth,
            position: 'absolute',
          }}></View>
        <View>
          {/* Photo */}
          <View
            style={{
              width: '100%',
              height: 350,
              backgroundColor: 'rgb(38,92,98)',
              marginTop: 5,
              flexDirection: 'row',
              borderBottomLeftRadius: 70,
              borderBottomRightRadius: 70,
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'rgb(186,180,163)',
                  width: '30%',
                  height: 130,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 60,
                }}>
                <Image
                  source={require('../assets/Avastars.png')}
                  style={{width: '90%', height: '90%', borderRadius: 60}}
                />
              </View>

              <View style={{marginTop: 15, alignItems: 'flex-start'}}>
                <Text
                  style={{
                    fontSize: 25,
                    color: 'rgb(186,180,163)',
                    fontWeight: 'bold',
                  }}>
                  Mr. Cathay
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    Diamond
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 20,
                      color: 'white',
                    }}>
                    1234567890
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ScrollView></ScrollView>
        {/* <Toast /> */}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  selected: {
    justifyContent: 'center',
    margin: 20,
    marginBottom: 0,
    height: 35,
    borderBottomColor: 'rgb(38,92,98)',
    borderBottomWidth: 3,
  },
  noSelected: {
    justifyContent: 'center',
    margin: 20,
    height: 30,
  },
  selectedText: {
    fontSize: 15,
    color: 'black',
  },
  noSelectedText: {
    fontSize: 15,
    color: 'grey',
  },
  typeName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'rgb(38,92,98)',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  typeLogo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginTop: 10,
  },
  type: {
    backgroundColor: 'lightgrey',
    width: 180,
    height: 180,
    margin: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BadgetSecond;
