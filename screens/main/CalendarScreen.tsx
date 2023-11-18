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
import {StringsContext} from '../../store/Strings';
import {DataContext} from '../../store/Data';
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
import BadgetType_First from '../../components/BadgetType_First';
import BadgetSecond from '../../components/Badget_Second';

const CalendarScreen = ({navigation}) => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);

  const [select, setSelect] = useState(0);

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
            height: 100,
            justifyContent: 'top',
            alignItems: 'left',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
            marginTop: Platform.OS === 'android' ? 50 : 0,
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'rgb(38,92,98)',
                position: 'absolute',
                width: '100%',
                textAlign: 'center',
              }}>
              {(() => {
                switch (Data.badgeScreen) {
                  case 0:
                    return null;
                  case 1:
                    return <Text>Cathay Aircraft</Text>;
                  case 2:
                    return <Text>Country</Text>;
                  case 3:
                    return <Text>Missions</Text>;
                  case 4:
                    return <Text>Community</Text>;
                  default:
                    return null;
                }
              })()}
            </Text>
            <TouchableOpacity
              style={{marginLeft: 20}}
              onPress={() => {
                Data.badgeScreen != 0 ? Data.setBadgeScreen(0) : null;
              }}>
              <ChevronLeftIcon color={'black'} size={30} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              width: '100%',
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => setSelect(0)}
              style={[select == 0 ? style.selected : style.noSelected]}>
              <Text
                style={[
                  select == 0 ? style.selectedText : style.noSelectedText,
                ]}>
                Asia Miles
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelect(1)}
              style={[select == 1 ? style.selected : style.noSelected]}>
              <Text
                style={[
                  select == 1 ? style.selectedText : style.noSelectedText,
                ]}>
                Badges
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {(() => {
          switch (Data.badgeScreen) {
            case 0:
              return <BadgetType_First />;
            case 1:
              return <BadgetSecond type={1} />;
            case 2:
              return <BadgetSecond type={2} />;
            case 3:
              return <BadgetSecond type={3} />;
            case 4:
              return <BadgetSecond type={4} />;
            default:
              return null;
          }
        })()}
        {/* <BadgetType_First /> */}
      </View>
    </SafeAreaView>
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
export default CalendarScreen;
