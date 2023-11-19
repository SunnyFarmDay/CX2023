import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StringsContext} from '../../store/Strings';
import {DataContext} from '../../store/Data';
import {LineChart} from 'react-native-chart-kit';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ChevronLeftIcon,
  ExclamationCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from 'react-native-heroicons/outline';
import { Colors } from '../Constants';
import LinkButton from '../../components/LinkButton';

const BadgeData = [{Type: 'Flight', Subtype: 'A330', Badge: 'Plane', Date: '2023-11-02'},
{Type: 'Flight', Subtype: 'A330', Badge: 'Plane', Date: '2023-11-02'},
{Type: 'Mission', Subtype: 'Hong Kong', Badge: 'Location', Date: '2023-11-02'},
{Type: 'Flight', Subtype: 'A320', Badge: 'Plane', Date: '2023-11-03'},
{Type: 'Country', Subtype: 'Hong Kong', Badge: 'Country', Date: '2023-11-03'},
{Type: 'Flight', Subtype: 'A330', Badge: 'Plane', Date: '2023-11-04'},
{Type: 'Mission', Subtype: 'United Kingdom', Badge: 'Location', Date: '2023-11-04'},
{Type: 'Flight', Subtype: 'A330', Badge: 'Plane', Date: '2023-11-08'},
{Type: 'Mission', Subtype: 'Hong Kong', Badge: 'Location', Date: '2023-11-12'},
{Type: 'Flight', Subtype: 'A321', Badge: 'Plane', Date: '2023-11-13'},
{Type: 'Mission', Subtype: 'Hong Kong', Badge: 'Location', Date: '2023-11-13'},
{Type: 'Flight', Subtype: 'A321', Badge: 'Plane', Date: '2023-11-14'},
{Type: 'Communication', Subtype: 'Posting', Badge: 'Story', Date: '2023-11-14'},
{Type: 'Communication', Subtype: 'Commenting', Badge: 'Most Liked', Date: '2023-11-14'},



]
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

const Calendar = ({selectedDate, setSelectedDate}) => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(
    currentDate.getMonth() + 1,
  );
  const [selectedYear, setSelectedYear] = useState(
    currentDate.getFullYear().toString(),
  );

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedYear, selectedMonth - 1);
    const firstDayOfMonth = new Date(
      selectedYear,
      selectedMonth - 1,
      1,
    ).getDay();

    const calendar = [];

    calendar.push(
      <View key="weekdays" style={styles.weekdaysContainer}>
        {weekdays.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text key={index} style={styles.weekdayText}>
              {day}
            </Text>
          </View>
        ))}
      </View>,
    );

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<View key={`filler-${i}`} style={styles.dayContainer} />);
    }
    const eventDays = ['2023-11-02', '2023-11-03'];
    for (let i = 1; i <= daysInMonth; i++) {
      // const isCurrentDay = i === currentDate.getDate();
      // const circleStyle = isCurrentDay ? styles.currentDayCircle : null;
      const isEventDay = BadgeData.map((item) => item.Date).includes(
        `${selectedYear}-${selectedMonth.toString().padStart(2, '0')}-${i
          .toString()
          .padStart(2, '0')}`,
      );
      const dayStyle = isEventDay
        ? styles.currentDayCircle
        : styles.dayContainer;

      days.push(
        <View key={i} style={dayStyle}>
            <TouchableOpacity
              onPress={() => {
                setSelectedDate(new Date(selectedYear, selectedMonth - 1, i));
                console.log('selected date');
              }}>
              <Text style={styles.dayText}>{i}</Text>
            </TouchableOpacity>
        </View>,
      );
    }

    const lastDayOfMonth = new Date(
      selectedYear,
      selectedMonth - 1,
      daysInMonth,
    ).getDay();
    for (let i = lastDayOfMonth + 1; i <= 6; i++) {
      days.push(<View key={`filler-${i}`} style={styles.dayContainer} />);
    }

    const weeks = [];
    const weekCount = days.length / 7;
    for (let i = 0; i < weekCount; i++) {
      weeks.push(
        <View key={i} style={styles.weekContainer}>
          {days.splice(0, 7)}
        </View>,
      );
    }

    calendar.push(weeks);

    return calendar;
  };

  const handleMonthChange = month => {
    if (month.length > 2) {
      month = 12;
    } else if (month === '' || month[0] === '0') {
    } else if (month < 1) {
      month = 1;
    } else if (month > 12) {
      month = 12;
    }
    setSelectedMonth(month);
  };

  const handleYearChange = year => {
    setSelectedYear(year);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectionContainer}>
        <TextInput style={styles.selectionText} value="Month:" />
        <TextInput
          style={styles.input}
          value={selectedMonth.toString()}
          onChangeText={handleMonthChange}
          keyboardType="numeric"
        />
        <TextInput style={styles.selectionText} value="Year:" />
        <TextInput
          style={styles.input}
          value={selectedYear}
          onChangeText={handleYearChange}
          keyboardType="numeric"
        />
      </View>
      {renderCalendar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  selectionText: {
    width: 80,
    height: 40,
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 8,
    color: Colors.cathayGold,
  },
  input: {
    width: 80,
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 8,
  },
  weekdaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekdayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.cathayGreen,
  },
  dayContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 2,
  },
  dayText: {
    fontSize: 16,
  },
  currentDayCircle: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 2,
    backgroundColor: 'lightgrey',
    color: Colors.cathayGreen,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

const getBadgeIcon = (badge) => {
  switch (badge) {
    // <Image source={require('../../assets/badges/badge_location.png')} style={{width: 50, aspectRatio: 1 / 1}} resizeMode="cover" />
    case 'Location':
      return (<Image source={require('../../assets/badges/badge_location.png')} style={{width: 50, aspectRatio: 1 / 1}} resizeMode="cover" />)
    case 'Country':
      return <Image source={require('../../assets/badges/badge_country.png')} style={{width: 50, aspectRatio: 1 / 1}} resizeMode="cover" />
    default:
      return null;
  }
}

const BadgeSummary = ({Date}) => {
  const day = Date.getDate();
  const month = Date.getMonth();
  const year = Date.getFullYear();


  const Data = useContext(DataContext);
  const month_to_string = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return (
    <>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingHorizontal: 20, backgroundColor: 'white'}}>
      <Text style={{fontSize: 24}}>
        {month_to_string[month]} {day}
      </Text>
      <LinkButton
        title="Share Today"
        onPress={() => {
          console.log('Share Now');
        }}
        styles={{
          touch: {
            position: 'absolute',
            top: 14,
            right: 5,
            borderRadius: 10,
            padding: 10,
          },
          buttonText: {color: Colors.cathayGreen, fontSize: 15, fontWeight: 'semibold'},
        }
      }
      />
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 20, backgroundColor: 'white'}}>
      <Text style={{fontSize: 14}}>
        Badges obtained
      </Text>
    </View>
    <View style={{backgroundColor: 'white'}}>
      {BadgeData.map((item, index) => {
        if (item.Date === `${year}-${(month+1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`) {
          return (
            <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, position: 'relative', borderLeftColor: Colors.cathayGold, borderLeftWidth: 3, marginLeft: 10, marginBottom: 10}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '400', color: Colors.cathayGold, paddingEnd: 10}}>{item.Type}</Text>
                <Text style={{fontSize: 18, fontWeight: '100', color: Colors.cathayGreen}}>{item.Subtype}</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                {getBadgeIcon(item.Badge) ? getBadgeIcon(item.Badge) : 
                <Text style={{fontSize: 18, fontWeight: '100', color: Colors.cathayGold}}>{item.Badge}</Text>}
              </View>
            </View>
          )
        }
      }
      )}
    </View>
    </>
  )
}

const TrendScreen = ({navigation}) => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column', position: 'relative'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, backgroundColor: 'white', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{marginLeft: 20, position: 'absolute', left: 0}}
              onPress={() => {
                Data.badgeScreen != 0
                  ? Data.setBadgeScreen(0)
                  : navigation.navigate('Home');
              }}>
              <ChevronLeftIcon color={'black'} size={30} />
            </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            marginTop: Platform.OS === 'android' ? 50 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24}}>Milestone</Text>
        </View>
          <Image source={require('../../assets/Cathay.png')} style={{width: 40, height: 40, aspectRatio: 1 / 1, position: 'absolute', right: 20, top: 0}} />
        </View>
        <View style={{backgroundColor: 'ghostwhite', height: '100%'}}>
          <Toast />
          <ScrollView
            style={{
              backgroundColor: 'ghostwhite',
              height: Data.screenHeight - 210,
              width: Data.screenWidth,
              position: 'absolute',
            }}>
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <BadgeSummary Date={selectedDate} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TrendScreen;
