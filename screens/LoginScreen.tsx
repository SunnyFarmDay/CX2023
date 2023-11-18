import React, { useContext, useEffect, useState } from 'react';
import { View, Image, TextInput, StyleSheet, Button, Text, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataContext } from '../store/Data';
import { StringsContext } from '../store/Strings';
import { LockClosedIcon, LockOpenIcon, UserCircleIcon } from 'react-native-heroicons/outline';


const LoginScreen = () => {
  const Data = useContext(DataContext)
  const Str = useContext(StringsContext)
  var someErrorOccur = false;
  const [hidePW, setHidePW] = useState(true)

  useEffect(()=>{
    async function tryLogin(){
      if(await AsyncStorage.getItem("sid") !== "" && await AsyncStorage.getItem("sid") !== "0" && await AsyncStorage.getItem("sid") != null) {
        const _username = await AsyncStorage.getItem('username')
        Data.setLoginUserName(_username)
        Data.setScreen(1);
      }
    };
    tryLogin();
  }, [])

  async function loginFunction() {
    switch(Data.lang){
      case "en":
        Toast.show({
          type: 'info',
          text1: 'Message',
          text2: "Please wait......",
          autoHide: false,
          position: 'top'
        });
        break;
      case "hk":
        Toast.show({
          type: 'info',
          text1: '信息',
          text2: "請稍候......",
          autoHide: false,
          position: 'top'
        });
        break;
    }
    const data = "username="+Data.getLoginUserName+"&password="+Data.getLoginPassWord;
    const response = await fetch(Data.getApiHost+'/app/login.php',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data
        })
        .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });
    const responseText = await response.text();
    if(responseText.length == 8) {
        try {
            await AsyncStorage.setItem('sid', responseText)
            await AsyncStorage.setItem('username', Data.getLoginUserName)
        } catch (e) {
            someErrorOccur = true;
        }
        try {
          const value = await AsyncStorage.getItem('sid')

          if(value == null) {
            someErrorOccur = true;
          }
        } catch(e) {
            someErrorOccur = true;
        }
        if(!someErrorOccur) {
            Data.setLoginPassWord("");
            Data.setScreen(1);
        }
    } else {
        Toast.show({
          type: 'error',
          text1: 'Message',
          text2: responseText,
          autoHide: true,
          visibilityTime: 1500,
          position: 'top'
        });
    }
}

  return (
    <ScrollView style={{flex:1, backgroundColor: 'ghostwhite'}}
    showsVerticalScrollIndicator={false}>
      <ImageBackground
      source={require('../assets/iconwithbg.png')}
      style={{
        height: Dimensions.get('window').height/2.5,
      }}>
        <Toast/>
      </ImageBackground>
      {/* Bottom View */}
      <View style={{flex: 1.5, backgroundColor: 'ghostwhite', bottom: 45,borderTopStartRadius: 60, borderTopEndRadius: 60}}>
        <View style={{padding: 40}}>
          <Text style={{color:'#4632A1', fontSize:34}}>{Str.login_wel}</Text>
          <Text>
            {Str.login_noac}
            <Text onPress={() => Data.setScreen(2)} style={{color: 'red', fontStyle: 'italic'}}>
              {' '}
              {Str.login_register}
            </Text>
          </Text>

          <View style={{marginTop: 50}}>
            <Text>{Str.login_username}</Text>
            <View style={{flexDirection: 'row', borderBottomWidth: 1}}>
              <TextInput
              editable
              autoCapitalize='none'
              maxLength={40}
              placeholder={Str.login_usernameMsg}
              autoCorrect={false}
              onChangeText={userName => Data.setLoginUserName(userName)}
              value={Data.getLoginUserName}
              style={{padding: 10, flex:7}}
              />
              <UserCircleIcon color={'grey'} style={{justifyContent: 'flex-end', flex:1}}/>
            </View>

            <Text style={{marginTop: 10}}>{Str.login_passwordMsg}</Text>
            <View style={{flexDirection: 'row', borderBottomWidth: 1}}>
              <TextInput
              editable
              autoCapitalize='none'
              maxLength={40}
              placeholder={Str.login_passwordMsg}
              onChangeText={passWord => Data.setLoginPassWord(passWord)}
              secureTextEntry={hidePW}
              autoCorrect={false}
              value={Data.getLoginPassWord}
              style={{padding: 10, flex: 7}}
              />
              {hidePW?
              <LockClosedIcon onPress={()=>setHidePW(false)} color={'grey'} style={{justifyContent: 'flex-end', flex:1}}/>
              :
              <LockOpenIcon onPress={()=>setHidePW(true)} color={'grey'} style={{justifyContent: 'flex-end', flex:1}}/>
              }
            </View>
            <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>

              <View style={{width:'100%', justifyContent: 'flex-end', flexDirection: 'row'}}>
                <Button
                  onPress={() => Data.setScreen(3)}
                  title={Str.login_forgetPW}
                  color="grey"
                  accessibilityLabel="Learn more about this purple button"
                  />
              </View>
              <TouchableOpacity onPress={loginFunction} style={{...styles.shadow, marginTop: 50, width: 200, height: 50, backgroundColor: 'beige', justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
                <Text style={{color: 'blue', fontSize: 30}}>
                {Str.login_login}
                </Text>
              </TouchableOpacity>
            </View>
 
          </View>

        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  shadow :{
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  }
});

export default LoginScreen;