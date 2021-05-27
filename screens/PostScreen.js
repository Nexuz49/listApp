import React from "react";
import { View, Text, Button, StyleSheet, TextInput, SafeAreaView, StatusBar } from "react-native";
import { Formik } from 'formik';


const PostScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <SafeAreaView style={styles.container}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Review title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
              />

              <TextInput
                multiline
                style={styles.input}
                placeholder="Review body"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
              />

              <TextInput
                style={styles.input}
                placeholder="Rating (1-5)"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                keyboardType='numeric'
              />

              <Button
                title="submit"
                color="maroon"
                onPress={props.handleSubmit}
              />
            </View>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
}


export default PostScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    //backgroundColor: "#8fcbbc",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});