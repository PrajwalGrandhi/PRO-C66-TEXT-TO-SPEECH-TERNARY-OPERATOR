import React from 'react';
import { render } from 'react-dom';
import { TextInput, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, initialWindowMetrics} from "react-native-safe-area-context";
//import axios from'axios';
import * as Speech from 'expo-speech';

export default class App extends React.Component {

  constructor()
  {
    super();
    this.state={
      text:""
    }
  }

speak=(speech)=>{
var thingstospeak=speech;
Speech.speak(thingstospeak);
}

  render(){
    return (
      <SafeAreaProvider>
      <Header
centerComponent={{ text: 'Text-To-Speech', style: { color: '#fff' } }}
/>

      <View style={styles.container}>

      <Image
          style={styles.tinyLogo}
          source={require('./assets/speech-icon.png')}
        />

        <TextInput
        style={{ height: 40,width:200,borderColor: 'gray', borderWidth: 1 ,alignItems:'center',justifyContent:'center',textAlign:'justify'}}
        onChangeText={(text) => {this.setState({text:text})}}
        value={this.state.text}
     />

<TouchableOpacity style={styles.button} 
onPress={()=>{
  var lower=this.state.text.toLowerCase().trim();
  this.speak(lower);
  }} >
<Text>Speak</Text>
</TouchableOpacity>

      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    //marginTop: 350,
    //marginLeft: 70,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 200,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 100,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
