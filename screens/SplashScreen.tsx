import React, { useEffect, useContext } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { DataContext } from '../store/Data';

const SplashScreen = ({ }) => {

  const Data = useContext(DataContext)
  useEffect(() => {
    setTimeout(() => {
        Data.setScreen(0)
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.logo} />
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>SEHH3165 Mobile App Development</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornsilk',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default SplashScreen;