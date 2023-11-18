import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import lang from '../lang.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

type DataContextObj = {
  appScreen: number;
  badgeScreen: number;
  setScreen: (whichScreen: number) => void;
  setBadgeScreen: (screen: number) => void;
  getCurrentScreen: () => String;
  getApiHost: string;
  getLoginUserName: string;
  setLoginUserName: (userName: string) => void;
  getLoginPassWord: string;
  setLoginPassWord: (passWord: string) => void;
  screenWidth: number;
  screenHeight: number;
  lang: string;
  changeLang: (_lang: string) => void;
  totalExpenditure: number;
  totalIncome: number;
};

export const DataContext = React.createContext<DataContextObj>({
  appScreen: 1,
  badgeScreen: 0,
  setScreen: () => {},
  setBadgeScreen: () => {},
  getCurrentScreen: () => '',
  getApiHost: '',
  getLoginUserName: '',
  setLoginUserName: () => {},
  getLoginPassWord: '',
  setLoginPassWord: () => {},
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  lang: 'en',
  changeLang: () => {},
  totalExpenditure: 0,
  totalIncome: 0,
});

const DataContextProvider: React.FC<{children: any}> = props => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [appScreen, setAppScreen] = useState<number>(1);
  const [badgeScreen, setBadgeScreen] = useState<number>(0);
  const [totalExpenditure, setTotalExpenditure] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [lang, setLang] = useState<string>('en');

  useEffect(() => {
    loadLang();
  }, []);

  const setScreen = async (_whichScreen: number) => {
    setAppScreen(_whichScreen);
  };

  const setBScreen = async (screen: number) => {
    setBadgeScreen(screen);
  };

  const saveLang = async () => {
    try {
      await AsyncStorage.setItem('lang', lang);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    saveLang();
  }, [lang]);

  const loadLang = async () => {
    try {
      const value = await AsyncStorage.getItem('lang');
      if (value !== null) {
        setLang(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const changeLang = (_lang: string) => {
    // lang == 0 -> English
    // lang == 1 -> Chinese
    setLang(_lang);
    console.log(new Date().toLocaleString() + ': Current Language is ' + _lang);
  };

  const getCurrentScreen = () => {
    switch (appScreen) {
      case 0:
        return 'Login Screen';
      case 1:
        return 'Main Screen';
      case 2:
        return 'Register Screen';
      case 3:
        return 'Forget PW Screen';
      case 4:
        return 'Welcome Screen';
      default:
        return 'Unknown Screen';
    }
  };

  const contextValue: DataContextObj = {
    appScreen: appScreen,
    badgeScreen: badgeScreen,
    setBadgeScreen: setBScreen,
    setScreen: setScreen,
    getApiHost: 'https://sehh3165asm2api.10242048.xyz',
    getLoginUserName: userName,
    setLoginUserName: setUserName,
    getLoginPassWord: password,
    setLoginPassWord: setPassword,
    getCurrentScreen: getCurrentScreen,
    screenWidth: screenWidth,
    screenHeight: screenHeight,
    lang: lang,
    changeLang: changeLang,
    totalExpenditure: totalExpenditure,
    totalIncome: totalIncome,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
