import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ChatScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button title="Please Don't Click Here" onPress={() => alert("You Shouldn't have!")} />
    </View>
  );
};


export default ChatScreen;

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});