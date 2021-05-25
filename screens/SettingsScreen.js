import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <Text></Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
      <Text style={{textAlignVertical: "center",textAlign: "center", margin: 5,}}>Settings Screen</Text>
      <Text style={{textAlignVertical: "center",textAlign: "center", margin: 5,}}>1 Display </Text>
      <Text style={{textAlignVertical: "center",textAlign: "center", margin: 5,}}>2 Sound </Text>
      <Text style={{textAlignVertical: "center",textAlign: "center", margin: 5,}}>3 Network & Mobile Data</Text>
      <Text style={{textAlignVertical: "center",textAlign: "center", margin: 5,}}>4 X - Mode </Text>
      <Text style={{textAlignVertical: "center",textAlign: "center", margin: 5,}}>5 Notifcations</Text>
      <Text style={{textAlignVertical: "center",textAlign: "center", margin: 5,}}>6 Privacy</Text>
      <Text style={{textAlignVertical: "center",textAlign: "center", margin: 5,}}>7 Dev Settings</Text>
      <Text style={{textAlignVertical: "center",textAlign: "center", margin: 5,}}>8 System</Text>
      <Text style={{textAlignVertical: "center",textAlign: "center", margin: 5,}}>9 About</Text>
    </View>
  );
};


export default SettingsScreen;

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
    Text: {
      textAlignVertical: "center",
      textAlign: "center",
    }
});