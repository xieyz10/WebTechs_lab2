import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';
import React from 'react'

// function RedText(props){
//   return (
//     <View>
//       <Text style={styles.textView}>{props.name}</Text>
//       <Text style={styles.textView}>{props.name}</Text>
//     </View>
//   )
// }

export default function App() {
  const [value,setValue] = React.useState('placeholder')
  const [isEnabled, setIsEnabled] = React.useState(false)
  const [backgroundColor, setBackgroundColor] = React.useState("#f5dd4b")
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column', //or column, row
      backgroundColor: backgroundColor,
      justifyContent: 'center', //'flex-start', 'flex-end'
      alignItems: 'center' //or stretch
    },
    edit:{
      borderWidth:3,
      borderColor:'black',
      width: '90%'
    },
    textView:{
      fontSize: 30,
      borderWidth: 3,
      borderColor: 'red',
      color: 'red'
    }
  });
  
  const toggleSwitch = () => {
    setBackgroundColor(backgroundColor=="#f5dd4b"?"#fff":"#f5dd4b")
    setIsEnabled(previousState => !previousState);
  }
  
  return (
    <View style={styles.container}>
      {/* <Text style={styles.textStyle}>Mingyuan Xie</Text> */}
      {/* <RedText name='sqp 15 2022 dsdsd' value="date"></RedText> */}
      <TextInput style={styles.edit} onChangeText={text=>setValue(text)} clearTextOnFocus = 'true'></TextInput>
      {/* <TextInput style={styles.edit} onChangeText={text=>setValue(text)} clearTextOnFocus = 'true'></TextInput> */}
      <Text style={styles.textView}>{value}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button title='Clear' onPress={()=>setValue('')}></Button>
    </View>
  );
}

