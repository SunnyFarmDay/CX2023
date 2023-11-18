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

const AsiaMiles = () => {
  const Data = useContext(DataContext);
  const Str = useContext(StringsContext);

  return (
    <View style={{height: '100%'}}>
      <Image
        source={require('../../assets/category/asiamiles.jpeg')}
        style={{
          width: '100%',
          aspectRatio: 9 / 20,
          marginLeft: -15,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default AsiaMiles;
