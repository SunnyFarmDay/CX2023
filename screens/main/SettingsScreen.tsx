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
  Image,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {DataContext} from '../../store/Data';
import {StringsContext} from '../../store/Strings';
import Toast from 'react-native-toast-message';
import {
  ArrowLeftOnRectangleIcon,
  ChevronLeftIcon,
  UserCircleIcon,
  UserIcon, 
  HandThumbUpIcon
} from 'react-native-heroicons/outline';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import LinkButton from '../../components/LinkButton';
import { Colors } from '../Constants';

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const CommunityPosts = [
  {
    post_userid: 1,
    post_username: 'John_0236',
    post_title: '1st Road Trip in USA',
    post_imgsrc: require('../../assets/post/20231119-1.png'),
    postid: '20231119-1',
    comments: [
      {userid: 2, comment: 'Where is it?'},
      {userid: 3, comment: 'I want to go there too!'},
    ],
  },
  {
    post_userid: 2,
    post_username: 'Mary._.K',
    post_title: 'My First Trip to Japan',
    post_imgsrc: require('../../assets/post/20231119-2.png'),
    postid: '20231119-2',
    comments: [
      {userid: 1, comment: 'Nice!'},
      {userid: 3, comment: 'Do you use Asia Miles?'},
    ],
  },
];

const SettingsScreen = () => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);
  const [showComment, setShowComment] = useState(null);
  // const [showBadge]
  const navigation = useNavigation();

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
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Cathay Connect
            </Text>
          </View>
          <Image
            source={require('../../assets/CathayLogo.png')}
            style={{height: 40, width: 40, position: 'absolute', right: 25}}
          />
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
            <View style={{flexDirection: 'column', padding: 10}}>
              {CommunityPosts.map((post, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'column',
                      padding: 10,
                      alignItems: 'center',
                      flex: 1,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        if (showComment == index) setShowComment(null);
                        else setShowComment(index);
                        console.log(index);
                      }}>
                      {/* <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '400',
                          color: 'black',
                        }}>
                        {post.post_title}
                      </Text> */}
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 10,
                          marginStart: 10,
                        }}>
                        <Image
                          source={require('../../assets/user_icon.png')}
                          style={{height: 20, width: 20}}
                        />
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'black',
                            marginLeft: 10,
                          }}>
                          {post.post_username}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 10,
                          position: 'relative',
                        }}>
                        <Image
                          source={post.post_imgsrc}
                          style={{
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            padding: 10,
                          }}
                        />
                        {/* {post.comments.length > 0 ? (
                          <View style={{position: 'absolute', top: 0, right: 0, backgroundColor: 'red', borderRadius: 10, padding: 5}}>
                            <Text style={{color: 'white', fontSize: 12}}>{post.comments.length}</Text>
                          </View>
                        ) : null} */}
                        <View position="absolute" top={0} left={0}>
                          {showComment == index
                            ? post.comments.map(comment => {
                                return (
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      marginTop: generateRandomNumber(5, 60),
                                      marginStart: generateRandomNumber(5, 100),
                                      alignItems: 'center',
                                    }}>
                                    <Image
                                      source={require('../../assets/user_icon.png')}
                                      style={{height: 20, width: 20}}
                                    />
                                    <Text
                                      style={{
                                        fontSize: 16,
                                        fontWeight: '400',
                                        color: 'white',
                                        marginLeft: 10,
                                        backgroundColor: 'rgba(0,0,0,0.6)',
                                        padding: 5,
                                        borderRadius: 50,
                                      }}>
                                      {comment.comment}
                                    </Text>
                                  </View>
                                );
                              })
                            : null}
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center', position: 'relative'}}>
                        <LinkButton
                          title="Show Badges Earned"
                          styles={{
                            touch: {
                              marginLeft: 10,
                              backgroundColor: 'rgba(0,0,0,0.2)',
                              padding: 5,
                              borderRadius: 50,
                            }, text : {
                              color: Colors.cathayGreen
                            }
                          }}
                          onPress={() => {}}
                        />
                        <TouchableOpacity style={{marginLeft: 10, flexDirection: 'row', alignItems: 'center'}} onPress={() => {}}>
                          <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>{post.postid == '20231119-1' ? '292' : '5'}</Text>
                          <HandThumbUpIcon color={'black'} size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft: 10}} onPress={() => {}}>
                          <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>Comment</Text>
                        </TouchableOpacity>
                        </View>    
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
// <SafeAreaView style={{backgroundColor: 'white'}}>
//   <View style={{flexDirection: 'column'}}>
//     <View
//       style={{
//         backgroundColor: 'white',
//         height: 150,
//         marginTop: Platform.OS === 'android' ? 50 : 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//       }}>
//       <UserCircleIcon color={'grey'} size={150} />
//       <View></View>
//       <Toast />
//     </View>
//     <View style={{height: '100%'}}>
//       <ScrollView
//         style={{
//           backgroundColor: 'ghostwhite',
//           height: Data.screenHeight - 210,
//           width: Data.screenWidth,
//           position: 'absolute',
//           flexDirection: 'column',
//           borderTopRightRadius: 60,
//           borderTopLeftRadius: 60,
//         }}>
//         {/* <Text style={{alignSelf:'center'}}>{Str.version}: 2023041701</Text> */}
//       </ScrollView>
//     </View>
//   </View>
// </SafeAreaView>
