import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {StringsContext} from '../../store/Strings';
import {DataContext} from '../../store/Data';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SelectList} from 'react-native-dropdown-select-list';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ChevronLeftIcon, QrCodeIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import LinkButton from '../../components/LinkButton';
import {Colors} from '../Constants';
const nearEventsData = [
  {
    type: 'Sightseeing',
    title: 'Explore the Cave with fellow Travellers',
    location: 'Hong Kong',
    description:
      'Cheung Po Tsai Cave is a natural cave where the famous Guangdong pirate Cheung Po Tsai, according to legend, kept his treasures.',
    imgsrc: require('../../assets/EventImages/202311201000_1.png'),
    eventid: 1,
    datetime: '2023-11-20T10:00:00.000Z',
  },
  {
    type: 'Workshop',
    title: 'Dim Sum Making Workshop',
    location: 'Hong Kong',
    description: 'Learn how to make dim sum with our professional chef!',
    imgsrc: require('../../assets/EventImages/202311201000_2.png'),
    eventid: 2,
    datetime: '2023-11-20T10:00:00.000Z',
  },
  {
    type: 'Workshop',
    title: 'Wing Chun Experience Day',
    location: 'Hong Kong',
    description: 'Learn the basics of Wing Chun and how to do self-defense.',
    imgsrc: require('../../assets/EventImages/202311201200_3.png'),
    eventid: 3,
    datetime: '2023-11-20T12:00:00.000Z',
  },
];

const exploreAllData = [
  {
    type: 'Sightseeing',
    title: 'Explore the Ancient Ruins of Machu Picchu',
    location: 'Peru',
    description: 'Discover the enigmatic ruins of Machu Picchu, an ancient Inca citadel nestled in the Andes Mountains.',
    imgsrc: require('../../assets/EventImages/202311201000_1.png'),
    eventid: 4,
    datetime: '2023-11-20T10:00:00.000Z',
  },
  {
    type: 'Workshop',
    title: 'Traditional Sushi Making Class',
    location: 'Tokyo, Japan',
    description: 'Master the art of making sushi from scratch with a renowned sushi chef.',
    imgsrc: require('../../assets/EventImages/202311201000_2.png'),
    eventid: 5,
    datetime: '2023-11-20T10:00:00.000Z',
  },
  {
    type: 'Workshop',
    title: 'Tango Dance Workshop',
    location: 'Buenos Aires, Argentina',
    description: 'Immerse yourself in the passion and elegance of tango with expert instructors.',
    imgsrc: require('../../assets/EventImages/202311201200_3.png'),
    eventid: 6,
    datetime: '2023-11-20T12:00:00.000Z',
  },
  {
    type: 'Sightseeing',
    title: 'Tour the Great Wall of China',
    location: 'Beijing, China',
    description: 'Embark on a breathtaking journey to explore the ancient wonder of the world, the Great Wall of China.',
    imgsrc: require('../../assets/EventImages/202311201200_7.png'),
    eventid: 7,
    datetime: '2023-11-20T12:00:00.000Z',
  },
  {
    type: 'Workshop',
    title: 'Chocolate Making Workshop',
    location: 'Brussels, Belgium',
    description: 'Indulge in the art of chocolate making and create your own delectable treats with expert chocolatiers.',
    imgsrc: require('../../assets/EventImages/202311201400_8.png'),
    eventid: 8,
    datetime: '2023-11-20T14:00:00.000Z',
  },
  {
    type: 'Sightseeing',
    title: 'Explore the Pyramids of Giza',
    location: 'Cairo, Egypt',
    description: 'Uncover the mysteries of the ancient world as you visit the iconic Pyramids of Giza and the Sphinx.',
    imgsrc: require('../../assets/EventImages/202311201600_9.png'),
    eventid: 9,
    datetime: '2023-11-20T16:00:00.000Z',
  }
]
  



const NearEvents = (navigation) => {
  return (
    <View style={{flexDirection: 'column', margin: 20, maxWidth: "50%"}}>
      {nearEventsData.map((item, index) => {
        return (
          <View key={index} style={{flexDirection: 'row', marginTop: 20, position: 'relative'}}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('EventDetail');
              }}>
              <Image
                source={item.imgsrc}
                style={{height: 100, aspectRatio: 4/3, marginRight: 10}}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View >
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
              {item.title}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5, justifyContent: "space-between", position: "absolute", left: 0, bottom: 5}}>
            <Text style={{fontSize: 10, marginTop: 5}}>{item.location}</Text>
            <Text style={{fontSize: 10, marginTop: 5, right: 0, left: 60}}>{`${item.datetime.slice(0, 10)} ${item.datetime.slice(11, 16)}`}</Text>
              </View>
            </View>   
          </View>
        );
      })}
    </View>
  );
};

const ExploreAll = () => {
  return (
    
    <View style={{flexDirection: 'column', margin: 20, maxWidth: "50%"}}>
      {exploreAllData.map((item, index) => {
        return (
          <View key={index} style={{flexDirection: 'row', marginTop: 20, position: 'relative'}}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('EventDetail');
              }}>
              <Image
                source={item.imgsrc}
                style={{height: 100, aspectRatio: 4/3, marginRight: 10}}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View >
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
              {item.title}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5, justifyContent: "space-between", position: "absolute", left: 0, bottom: 5}}>
            <Text style={{fontSize: 10, marginTop: 5}}>{item.location}</Text>
            <Text style={{fontSize: 10, marginTop: 5, right: 0, left: 60}}>{`${item.datetime.slice(0, 10)} ${item.datetime.slice(11, 16)}`}</Text>
              </View>
            </View>   
          </View>
        );
      })}
    </View>
  )
};
const RecordScreen = () => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);
  const navigation = useNavigation();
  const [eventListMode, setEventListMode] = useState(0);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
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
            <Text style={{fontSize: 24}}>Discover Events</Text>
          </View>
          <TouchableOpacity
            style={{position: 'absolute', right: 0, marginRight: 20}}
            onPress={() => {
              navigation.navigate('QRScan');
            }}>
            <QrCodeIcon color={'black'} size={30} />
          </TouchableOpacity>
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginHorizontal: 10,
              }}>
              <TouchableOpacity
                style={[
                  {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    padding: 5,
                  },
                  eventListMode == 0
                    ? {
                        borderBottomColor: Colors.cathayGreen,
                        borderBottomWidth: 2,
                      }
                    : {},
                ]}
                onPress={() => setEventListMode(0)}>
                <Text style={{fontSize: 20}}>Near Events</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    padding: 5,
                  },
                  eventListMode == 1
                    ? {
                        borderBottomColor: Colors.cathayGreen,
                        borderBottomWidth: 2,
                      }
                    : {},
                ]}
                onPress={() => setEventListMode(1)}>
                <Text style={{fontSize: 20}}>Explore All</Text>
              </TouchableOpacity>
            </View>
              {eventListMode == 0 ? (
                <NearEvents navigation={navigation} />
              ) : (
                <ExploreAll />
              )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecordScreen;
// <SafeAreaView style={{backgroundColor: 'white'}}>
//   <View style={{flexDirection: 'column'}}>
//     <View
//       style={{
//         backgroundColor: 'white',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderBottomWidth: 0.3,
//         borderColor: 'black',
//         marginTop: Platform.OS === 'android' ? 50 : 0,
//       }}>
//       <Text style={{fontSize: 24, fontWeight: 'bold'}}> </Text>
//     </View>

//     <View style={{backgroundColor: 'ghostwhite', height: '100%'}}>
//       <ScrollView
//         style={{
//           backgroundColor: 'ghostwhite',
//           height: Data.screenHeight - 210,
//           width: Data.screenWidth,
//           position: 'absolute',
//         }}></ScrollView>
//       <Toast />
//     </View>
//   </View>
// </SafeAreaView>
