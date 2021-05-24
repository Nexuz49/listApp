import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text class="Rubrik">Home Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
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
    text: {
      alignItems: 'center'
    }
});