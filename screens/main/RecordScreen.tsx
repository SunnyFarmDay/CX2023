import { View, Text, SafeAreaView, ScrollView, Platform, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { StringsContext } from '../../store/Strings'
import { DataContext } from '../../store/Data'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SelectList } from 'react-native-dropdown-select-list'
import  DateTimePicker from '@react-native-community/datetimepicker';


const RecordScreen = () => {
  const [selected, setSelected] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [recordName, setRecordName] = useState("");
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const [recordType, setRecordType] = useState("")
  const today = new Date();
  const [date, setDate] = useState(new Date());

  useEffect(()=>{
    setDate(new Date(today))
  }, [])

  async function addRecordFunction() {
    if(Number(amount)<=0){
      switch(Data.lang){
        case "en":
          Alert.alert('Error', 'The amount must be positive number!', [
            {text: 'OK', onPress: () => setAmount("")},
          ]);
          break;
        case "hk":
          Alert.alert('錯誤', '金額需要為正數!', [
            {text: '知道！', onPress: () => setAmount("")},
          ]);
          break;
      }
    } else {
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
      
      const data = "recordName="+recordName+"&type="+selected+"&amount="+amount+"&time="+(Math.floor(date.getTime() / 1000)).toString()+"&categoryID="+selectedCategory+"&sid="+await AsyncStorage.getItem("sid");
      const response = await fetch(Data.getApiHost+'/app/addRecord.php',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: data})
          .catch(function(error) {
            Toast.show({
              type: 'error',
              text1: 'Message',
              text2: error.message,
              autoHide: true,
              visibilityTime: 1500,
              position: 'top'
            });
          console.log('There has been a problem with your fetch operation: ' + error.message);
           // ADD THIS THROW error
            throw error;
          });
      const responseText = await response.text();
      if(responseText == "Record inserted successfully") {
        setRecordName("");
        setAmount("");
        switch(Data.lang){
          case "en":
            Toast.show({
              type: 'success',
              text1: 'Message',
              text2: "Record inserted successfully!",
              autoHide: true,
              visibilityTime: 1500,
              position: 'top'
            });
            break;
          case "hk":
            Toast.show({
              type: 'success',
              text1: '信息',
              text2: "紀錄插入成功！",
              autoHide: true,
              visibilityTime: 1500,
              position: 'top'
            });
            break;
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
}

  const dataList = [
      {key:'0', value:'Income / 收入'},
      {key:'1', value:'Expenditure / 支出'},
  ]
  const categoryList = [
    {key:'0', value:'Food / 食物'},
    {key:'1', value:'Transport / 交通'},
    {key:'2', value:'Sports / 運動'},
    {key:'3', value:'Others / 其他'},
]

    const Data = useContext(DataContext)
    const Str = useContext(StringsContext)
  

    const [currentDateText, setCurrentDateText] = useState(date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear());
    const [currentTimeText, setCurrentTimeText] = useState(('0'+date.getHours()).slice(-2) + ':' + ('0'+date.getMinutes()).slice(-2));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate ;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      let tempDate = new Date(currentDate)
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear()
      let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
      if(mode === 'date'){
        setCurrentDateText(fDate)
      } else if (mode === 'time'){
        setCurrentTimeText(fTime)
      }
      // setDate(new Date(tempDate.getDate() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear()))
      setShow(false)
    };
  
    const showMode = (currentMode) => {
      setShow(true)
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'column'}}>
        <View style={{backgroundColor: 'white', height: 50,justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.3, borderColor: 'black',marginTop: Platform.OS === 'android' ? 50 : 0}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>{Str.main_record_add}</Text>
        </View>
        
        <View style={{backgroundColor: 'ghostwhite', height: '100%'}}>
            <ScrollView style={{backgroundColor: 'ghostwhite', height: Data.screenHeight-210, width: Data.screenWidth, position: 'absolute',}}>
                <View style={{width: Data.screenWidth, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{backgroundColor: 'whitesmoke',width: Data.screenWidth-50, marginTop: 10, padding: 10, borderRadius: 10, borderColor: 'seashell', borderWidth: 2 }}>
                    <View style={{borderBottomWidth: 1, borderColor: 'black'}}>
                        <Text style={{padding: 15}}>{Str.main_record_recordName}</Text>
                        <TextInput
                        editable
                        maxLength={40}
                        placeholder={Str.main_record_recordNameMsg}
                        onChangeText={recordName => setRecordName(recordName)}
                        value={recordName}
                        style={{paddingLeft: 15}}
                        />
                    </View>

                    <Text style={{padding: 15}}>{Str.main_record_recordType}</Text>
                    <SelectList 
                        setSelected={(val) => setSelected(val)} 
                        data={dataList} 
                        save="key"
                        search={false}
                    />
                    <View style={{borderBottomWidth: 1, borderColor: 'black'}}>
                        <Text style={{padding: 15}}>{Str.main_record_recordAmount}</Text>
                            <TextInput
                            editable
                            maxLength={40}
                            placeholder={Str.main_record_recordAmountMsg}
                            onChangeText={amount => setAmount(amount)}
                            value={amount}
                            style={{paddingLeft: 15}}
                            />
                    </View>
                    <Text style={{padding: 15}}>{Str.main_record_category}</Text>
                    <SelectList 
                        setSelected={(val) => setSelectedCategory(val)} 
                        data={categoryList} 
                        save="key"
                        search={false}
                    />
                    <View style={{margin:10}}>
                      {Platform.OS==='ios'?
                        <DateTimePicker
                        value={date}
                        mode={'datetime'}
                        display='default'
                        is24Hour={true} 
                        onChange={onChange}
                        maximumDate={today}
                      />
                      :
                      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableOpacity onPress={()=>showDatepicker()} style={{backgroundColor: 'lightgrey', padding: 5, margin: 5, borderRadius: 10}}>
                          <Text style={{fontSize: 20}}>{currentDateText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>showTimepicker()} style={{backgroundColor: 'lightgrey', padding: 5, margin: 5, borderRadius: 10}}>
                          <Text style={{fontSize: 20}}>{currentTimeText}</Text>
                        </TouchableOpacity>
                      </View>

                      }
                      
                      {show?
                        <DateTimePicker
                        value={date}
                        mode={mode}
                        display='default'
                        is24Hour={true} 
                        onChange={onChange}
                        maximumDate={today}
                      />
                      :
                      null
                    }

                    </View>

                    </View>
                </View>


                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity onPress={() => addRecordFunction()} style={{backgroundColor: 'lightblue', width: 120, height: 40, justifyContent: 'center', alignItems: "center", borderRadius: 10}}>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>{Str.main_record_add}</Text>
                </TouchableOpacity>
                </View>
              </ScrollView>
              <Toast/>
        </View>
    </View>
</SafeAreaView>
  )
}

export default RecordScreen