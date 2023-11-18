import React, { useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataContext } from '../store/Data';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
import ForgetPwScreen from '../screens/ForgetPwScreen';
import MainScreen from '../screens/MainScreen.js';

import { NavigationContainer } from '@react-navigation/native'

const AppNavigator: React.FC = () => {
    const data = useContext(DataContext);

    useEffect(() => {
        console.log(new Date().toLocaleString()+ ": Current Screen is "+ data.getCurrentScreen())
    }, [data.appScreen]);

    return (
        <View style={styles.container}>
            {/* Switch to different screens */}
            {(() => {
                switch (data.appScreen) {
                case 0:
                    return <LoginScreen/>
                case 1:
                    return <MainScreen/>
                case 2:
                    return <RegisterScreen/>
                case 3:
                    return <ForgetPwScreen/>
                case 4: 
                    return <SplashScreen />
                default:
                    return null
                }
            })()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});

export default AppNavigator;