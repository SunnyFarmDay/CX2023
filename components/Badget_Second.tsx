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
import erg from '../erg.json';

const BadgetSecond = ({type, data}) => {
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
              backgroundColor: 'rgb(71,118,119)',
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
                      fontSize: 20,
                      color: 'white',
                    }}>
                    {data['number']}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  margin: 10,
                  padding: 10,
                  borderRadius: 20,
                }}>
                <Image
                  source={require('../assets/category/award.png')}
                  style={{width: 50, height: 50, marginLeft: 5}}
                />
                <Text
                  style={{fontSize: 40, marginLeft: 20, fontWeight: 'bold'}}>
                  0/100
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            margin: 40,
          }}>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 50,
              flexDirection: 'column',
              justifyContent: 'center',
              margin: 5,
            }}
            onPress={() => {
              Data.badgeScreen == 1
                ? Data.setBadgeScreen(6)
                : Data.badgeScreen == 2
                ? Data.setBadgeScreen(10)
                : Data.badgeScreen == 3
                ? Data.setBadgeScreen(14)
                : console.log('');
            }}>
            <Text>{erg[0].airplane}</Text>
            <Image
              source={
                Data.badgeScreen == 1
                  ? require('../assets/category/airplane1.png')
                  : Data.badgeScreen == 2
                  ? require('../assets/category/japan.png')
                  : Data.badgeScreen == 3
                  ? require('../assets/category/invitefriends.jpg')
                  : require('../assets/category/airplane1.png')
              }
              style={
                Data.badgeScreen == 1
                  ? {width: '100%', height: '100%', padding: 5}
                  : Data.badgeScreen == 2
                  ? {
                      width: '40%',
                      height: '100%',
                      padding: 5,
                      alignSelf: 'center',
                      marginVertical: '5%',
                    }
                  : Data.badgeScreen == 3
                  ? {
                      width: '100%',
                      height: '100%',
                      padding: 5,
                      resizeMode: 'center',
                    }
                  : {width: '100%', height: '100%', padding: 5}
              }
            />
            <View
              style={{
                backgroundColor: 'rgb(186,180,163)',
                width: '100%',
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>
                {erg[0].get}/{erg[0].total}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '50%',
              height: 50,
              flexDirection: 'column',
              justifyContent: 'center',
              margin: 5,
            }}
            onPress={() => {
              Data.setBadgeScreen(7);
            }}>
            <Text>{erg[1].airplane}</Text>
            <Image
              source={
                Data.badgeScreen == 1
                  ? require('../assets/category/airplane1.png')
                  : Data.badgeScreen == 2
                  ? require('../assets/category/korean.jpg')
                  : Data.badgeScreen == 3
                  ? require('../assets/category/carbonemission.jpg')
                  : require('../assets/category/airplane1.png')
              }
              style={
                Data.badgeScreen == 1
                  ? {width: '100%', height: '100%', padding: 5}
                  : Data.badgeScreen == 2
                  ? {
                      width: '40%',
                      height: '100%',
                      padding: 5,
                      alignSelf: 'center',
                      marginVertical: '5%',
                    }
                  : Data.badgeScreen == 3
                  ? {
                      width: '100%',
                      height: '110%',
                      padding: 5,
                      resizeMode: 'contain',
                    }
                  : {width: '100%', height: '100%', padding: 5}
              }
            />
            <View
              style={{
                backgroundColor: 'rgb(186,180,163)',
                width: '100%',
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>
                {erg[1].get}/{erg[1].total}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            margin: 40,
          }}>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 50,
              flexDirection: 'column',
              justifyContent: 'center',
              margin: 5,
            }}
            onPress={() => {
              Data.setBadgeScreen(8);
            }}>
            <Text>{erg[2].airplane}</Text>
            <Image
              source={
                Data.badgeScreen == 1
                  ? require('../assets/category/airplane1.png')
                  : Data.badgeScreen == 2
                  ? require('../assets/category/india.png')
                  : Data.badgeScreen == 3
                  ? require('../assets/category/active.jpg')
                  : require('../assets/category/airplane1.png')
              }
              style={
                Data.badgeScreen == 1
                  ? {width: '100%', height: '100%', padding: 5}
                  : Data.badgeScreen == 2
                  ? {
                      width: '40%',
                      height: '100%',
                      padding: 5,
                      alignSelf: 'center',
                      marginVertical: '5%',
                    }
                  : Data.badgeScreen == 3
                  ? {width: '100%', height: '100%', padding: 5}
                  : {width: '100%', height: '100%', padding: 5}
              }
            />
            <View
              style={{
                backgroundColor: 'rgb(186,180,163)',
                width: '100%',
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>
                {erg[2].get}/{erg[2].total}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '50%',
              height: 50,
              flexDirection: 'column',
              justifyContent: 'center',
              margin: 5,
            }}
            onPress={() => {
              Data.setBadgeScreen(9);
            }}>
            <Text>{erg[3].airplane}</Text>
            <Image
              source={
                Data.badgeScreen == 1
                  ? require('../assets/category/airplane1.png')
                  : Data.badgeScreen == 2
                  ? require('../assets/category/usa.png')
                  : Data.badgeScreen == 3
                  ? require('../assets/category/airplane1.png')
                  : require('../assets/category/airplane1.png')
              }
              style={
                Data.badgeScreen == 1
                  ? {width: '100%', height: '100%', padding: 5}
                  : Data.badgeScreen == 2
                  ? {
                      width: '40%',
                      height: '100%',
                      padding: 5,
                      alignSelf: 'center',
                      marginVertical: '5%',
                    }
                  : Data.badgeScreen == 3
                  ? {width: '100%', height: '100%', padding: 5}
                  : {width: '100%', height: '100%', padding: 5}
              }
            />

            <View
              style={{
                backgroundColor: 'rgb(186,180,163)',
                width: '100%',
                height: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold'}}>
                {erg[3].get}/{erg[3].total}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

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
