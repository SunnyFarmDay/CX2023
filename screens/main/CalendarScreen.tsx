import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
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
import {supabase} from './supabase';
import AsiaMiles from './AsiaMiles';
import BadgeThird from '../../components/Badge_Third';

const CalendarScreen = ({navigation}) => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);

  const [rawdata, setRawdata] = useState([]);
  const [userid, setUserid] = useState('');
  const [select, setSelect] = useState(1);

  useEffect(() => {
    setSelect(1);
    Data.setBadgeScreen(1);
  }, []);

  useEffect(() => {
    if (select) Data.setBadgeScreen(0);
    else Data.setBadgeScreen(5);
  }, [select]);

  //------------------------------------------------------------------------

  async function signInWithEmail() {
    // setLoading(true);
    const {data, error} = await supabase.auth.signInWithPassword({
      email: 'cloudman0341@gmail.com',
      password: 'a55048980Q',
    });

    if (error) Alert.alert(error.message);
    // setLoading(false);
    // console.log(data);
    if (data.session) {
      setUserid(data.user.id);
      // navigation.navigate('Home');
    }
  }

  const fetchData = async () => {
    // setLoading(true);
    const {data, error} = await supabase.from('user_detail').select('*');
    // .eq('userID', userid);
    // setRawdata(data);
    if (error) Alert.alert(error.message);
    // setLoading(false);
    console.log(data[0]);

    setRawdata(data[0]);
  };

  useEffect(() => {
    fetchData();
    signInWithEmail();
    console.log('Reloaded!');
    // getImageFromStorage();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 100,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
            marginTop: 0,
            position: 'relative',
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <Image
              source={require('../../assets/Cathay.png')}
              style={{
                width: 40,
                height: 40,
                marginEnd: 15,
                position: 'absolute',
                left: 350,
              }}
            />
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
                    return <Text>Countries</Text>;
                  case 3:
                    return <Text>Missions</Text>;
                  case 4:
                    return <Text>Communities</Text>;
                  default:
                    return;
                }
              })()}
            </Text>

            <TouchableOpacity
              style={{marginLeft: 20}}
              onPress={() => {
                Data.badgeScreen != 0 && Data.badgeScreen != 5
                  ? Data.setBadgeScreen(0)
                  : navigation.navigate('Home');
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
              return <BadgetType_First data={rawdata} />;
            case 1:
              return <BadgetSecond type={1} data={rawdata} />;
            case 2:
              return <BadgetSecond type={2} data={rawdata} />;
            case 3:
              return <BadgetSecond type={3} data={rawdata} />;
            case 4:
              return <BadgetSecond type={4} data={rawdata} />;
            case 5:
              return <AsiaMiles />;
            case 6:
              return <BadgeThird subtypeID={1} />;
            case 7:
              return <BadgeThird subtypeID={2} />;
            case 8:
              return <BadgeThird subtypeID={3} />;
            case 9:
              return <BadgeThird subtypeID={4} />;
            case 10:
              return <BadgeThird subtypeID={1} />;
            case 11:
              return <BadgeThird subtypeID={2} />;
            case 12:
              return <BadgeThird subtypeID={3} />;
            case 13:
              return <BadgeThird subtypeID={4} />;
            case 14:
              return <BadgeThird subtypeID={1} />;
            case 15:
              return <BadgeThird subtypeID={2} />;
            case 16:
              return <BadgeThird subtypeID={3} />;
            case 17:
              return <BadgeThird subtypeID={1} />;

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
