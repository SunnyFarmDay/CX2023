// SideBar.tsx

import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinkButton from './LinkButton';
import {Colors} from '../screens/Constants';
import {DataContext} from '../store/Data';
import { useNavigation } from '@react-navigation/native';

interface SidebarProps {
  width: number;
  backgroundColor: string;
  navigation: any;
}

const Sidebar: React.FC<SidebarProps> = ({
  width,
  backgroundColor,
}) => {
  const Data = React.useContext(DataContext);
  const setOpenSideBar = Data.setOpenSideBar;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.sidebar, {width, backgroundColor}]}>
        <TouchableOpacity
          style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
          onPress={() => setOpenSideBar(false)}
        />
      </View>
      <View style={styles.content}>
        <ScrollView
          style={{
            backgroundColor: 'ghostwhite',
            position: 'absolute',
            height: '100%',
          }}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 0,
              paddingTop: 30,
              position: 'relative',
            }}>
            <Image
              source={require('../assets/SideBar/SideBar_background_1.jpg')}
              style={{width: '100%', aspectRatio: 9 / 5}}
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity
            style={{
              position: 'relative',
              width: '100%',
              height: 50,
              backgroundColor: 'white',
              borderTopColor: 'rgba(0,0,0,0.3)',
              borderTopWidth: 1,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}
            onPress={() => {
                setOpenSideBar(false);
                navigation.navigate('Settings');
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                position: 'absolute',
                marginLeft: 3,
              }}>
              <Image
                source={require('../assets/CathayLogo.png')}
                style={{width: 36, aspectRatio: 1 / 1, marginEnd: 15}}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontSize: 18,
                  color: 'rgba(0,0,0,0.5)',
                  flex: 1,
                  marginLeft: -5,
                  fontWeight: '300'
                }}>
                Cathay Connect
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'relative',
              width: '100%',
              height: 50,
              backgroundColor: 'white',
              borderTopColor: 'rgba(0,0,0,0.3)',
              borderTopWidth: 1,
              borderBottomColor: 'rgba(0,0,0,0.3)',
              borderBottomWidth: 1,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}
            onPress={() => {
                setOpenSideBar(false);
                navigation.navigate('Record');
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                position: 'absolute',
                marginLeft: 3,
              }}>
              <Image
                source={require('../assets/CathayLogo.png')}
                style={{width: 36, aspectRatio: 1 / 1, marginEnd: 15}}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontSize: 18,
                  color: 'rgba(0,0,0,0.5)',
                  flex: 1,
                  marginLeft: -5,
                  fontWeight: '300'
                }}>
                Discover events
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 0,
              position: 'relative',
            }}>
            <Image
              source={require('../assets/SideBar/SideBar_background_2.jpg')}
              style={{width: '100%', aspectRatio: 9 / 24}}
              resizeMode="cover"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 100,
  },
  sidebar: {
    flex: 1,
    maxWidth: '20%',
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Replace with your desired background color
  },
});

export default Sidebar;
