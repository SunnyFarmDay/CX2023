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

const BadgeThird = ({subtypeID}) => {
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
                <Text style={{fontSize: 40, marginLeft: 20}}>0/3</Text>
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
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'column',
              justifyContent: 'center',
              margin: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {erg[0].airplane}
            </Text>
            <Image
              source={
                Data.badgeScreen == 6
                  ? require('../assets/category/airplane1.png')
                  : Data.badgeScreen == 7
                  ? require('../assets/category/airplane2.png')
                  : Data.badgeScreen == 8
                  ? require('../assets/category/airplane3.png')
                  : Data.badgeScreen == 9
                  ? require('../assets/category/airplane4.png')
                  : Data.badgeScreen == 10
                  ? require('../assets/category/japan.png')
                  : Data.badgeScreen == 11
                  ? require('../assets/category/korean.jpg')
                  : Data.badgeScreen == 12
                  ? require('../assets/category/india.png')
                  : Data.badgeScreen == 13
                  ? require('../assets/category/japan.png')
                  : Data.badgeScreen == 14
                  ? require('../assets/category/invitefriends.jpg')
                  : Data.badgeScreen == 15
                  ? require('../assets/category/carbonemission.jpg')
                  : Data.badgeScreen == 16
                  ? require('../assets/category/active.jpg')
                  : require('../assets/category/airplane1.png')
              }
              style={{width: '100%', height: '100%', padding: 5}}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'rgb(186,180,163)',
            width: '90%',
            height: 50,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            <View
              style={{
                width: '50%',
                justifyContent: 'flex-start',
                padding: 10,
              }}>
              <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 20}}>
                Level 1
              </Text>
            </View>
            <View
              style={{width: '50%', alignItems: 'flex-end', marginRight: 20}}>
              <Image
                source={require('../assets/category/75.png')}
                style={{width: 40, height: 40, borderRadius: 60}}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'rgb(186,180,163)',
            width: '90%',
            height: 50,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            <View
              style={{
                width: '50%',
                justifyContent: 'flex-start',
                padding: 10,
              }}>
              <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 20}}>
                Level 2
              </Text>
            </View>
            <View
              style={{width: '50%', alignItems: 'flex-end', marginRight: 20}}>
              <Image
                source={require('../assets/category/50.png')}
                style={{width: 40, height: 40, borderRadius: 60}}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'rgb(186,180,163)',
            width: '90%',
            height: 50,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            <View
              style={{
                width: '50%',
                justifyContent: 'flex-start',
                padding: 10,
              }}>
              <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 20}}>
                Level 3
              </Text>
            </View>
            <View
              style={{width: '50%', alignItems: 'flex-end', marginRight: 20}}>
              <Image
                source={require('../assets/category/25.png')}
                style={{width: 40, height: 40, borderRadius: 60}}
              />
            </View>
          </View>
        </TouchableOpacity>
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

export default BadgeThird;
