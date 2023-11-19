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
import {supabase} from '../screens/main/supabase';

const BadgetType_First = ({data}) => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);
  // const firstName = user.map(item => item.firstName);

  return (
    <View
      style={{
        backgroundColor: 'ghostwhite',
        height: '100%',
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
            height: 250,
            backgroundColor: 'rgb(71,118,119)',
            marginTop: 30,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'rgb(210, 175, 38)',
              fontSize: 30,
            }}>
            Badges
          </Text>
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
                height: '50%',
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
                Mr. {data['firstName']}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  {data['Class']}
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 13,
                    color: 'white',
                    marginBottom: 3,
                  }}>
                  {data['number']}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '50%',
              marginLeft: -110,
            }}>
            <Image source={require('../assets/badge.png')} style={style.logo} />
          </View>
        </View>
      </View>
      <Text style={{marginTop: 15, fontSize: 20, fontWeight: 'bold'}}>
        Choose a Badge Type
      </Text>
      <View
        style={{
          width: '90%',
          height: 3,
          backgroundColor: 'rgb(186,180,163)',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 20,
        }}></View>
      <TouchableOpacity
        style={{...style.type}}
        onPress={() => {
          Data.setBadgeScreen(1);
        }}>
        <Image
          source={require('../assets/category/airplane.png')}
          style={{...style.typeLogo}}
        />
        <Text style={style.typeName}>Cathay Aircraft</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...style.type}}
        onPress={() => {
          Data.setBadgeScreen(2);
        }}>
        <Image
          source={require('../assets/category/countries.png')}
          style={style.typeLogo}
        />
        <Text style={style.typeName}>Countries</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...style.type}}
        onPress={() => {
          Data.setBadgeScreen(3);
        }}>
        <Image
          source={require('../assets/category/mission.png')}
          style={style.typeLogo}
        />
        <Text style={style.typeName}>Missions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={true}
        style={{
          ...style.type,
        }}
        onPress={() => {
          Data.setBadgeScreen(4);
        }}>
        <Image
          source={require('../assets/category/group.png')}
          style={style.typeLogo}
        />
        <Text style={style.typeName}>Communities</Text>
      </TouchableOpacity>
      {/* <Toast /> */}
    </View>
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
    fontSize: 18,
    color: 'white',
    width: '50%',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  typeLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 30,
  },
  type: {
    backgroundColor: 'rgb(71,118,119)',
    width: 360,
    height: 60,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default BadgetType_First;
