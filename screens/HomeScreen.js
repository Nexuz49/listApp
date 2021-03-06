import React from "react";
import { View, Text, Button, StyleSheet, TextInput, alert } from "react-native";
//import { useForm, useController } from "react-hook-form";
import { Formik } from "formik";
import { color } from "react-native-reanimated";

const HomeScreen = (props) => (
  <Formik
    initialValues={{ email: "" }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={styles.formInput}>
        <Text style={{fontSize: 30, marginBottom: 10,}}>Welcome!</Text>
        <Text style={{fontSize: 20, marginBottom: 20,}}>This is the List App (Beta Version)</Text>
        <Text style={{fontSize: 13, marginBottom: 20, marginTop: 10,}}>Interested in Regular Updates? - Feel free to enter your email!</Text>
        <TextInput
          style={styles.inputArea}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          placeholder={"email..."}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
    marginTop: 15,
  },
  formInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputArea: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 1,
    margin: 5,
    width: "50%",
  },
});
