import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const FlatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#72a98f",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 18,
    textAlign: "center",
  },
});

export default FlatButton;
