import React from "react";
import { View, Text, Button, StyleSheet, TextInput, alert } from "react-native";
//import { useForm, useController } from "react-hook-form";

let render = 0;

const HomeScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text></Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
      <View>
        <Text>TEST</Text>
        <Text style={{textAlignVertical: "center",textAlign: "center",}}>Hiiiz</Text>
      </View>
      <View>
        
      </View>
    </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
        marginTop: 15,
    },
    button: {
      
    }
});